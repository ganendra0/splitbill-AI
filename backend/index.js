import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

app.post("/api/analyze", upload.single("receipt"), async (req, res) => {
  console.log("📸 Upload request received");
  console.log("File info:", req.file);
  
  if (!req.file) {
    return res.status(400).json({ error: "Tidak ada file yang diupload" });
  }
  
  try {
    const imagePath = path.join(process.cwd(), req.file.path);
    console.log("📁 Image path:", imagePath);
    const imageData = fs.readFileSync(imagePath);

    console.log("🤖 Sending to Gemini AI...");
    const result = await model.generateContent([
      {
        inlineData: {
          data: imageData.toString("base64"),
          mimeType: req.file.mimetype,
        },
      },
      {
        text: `Ekstrak isi struk belanja ini, lalu kembalikan HANYA dalam JSON murni tanpa markdown atau teks tambahan. Format:
        [
          { "item": "nama barang", "qty": 1, "harga": 10000 }
        ]
        
Contoh response yang benar:
        [{"item": "Nasi Goreng", "qty": 2, "harga": 25000}, {"item": "Es Teh", "qty": 1, "harga": 5000}]`,
      },
    ]);

    const rawText = result.response.text();
    console.log("📝 Raw response from Gemini:", rawText);
    
    // Bersihkan response dari markdown atau teks tambahan
    let cleanedText = rawText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\s*/, '').replace(/```\s*$/, '');
    }
    if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\s*/, '').replace(/```\s*$/, '');
    }
    
    console.log("🧹 Cleaned response:", cleanedText);
    
    let parsed;
    try {
      parsed = JSON.parse(cleanedText);
      console.log("✅ Parsed JSON:", parsed);
    } catch (parseError) {
      console.error("❌ JSON Parse Error:", parseError.message);
      return res.status(500).json({ 
        error: "Format JSON tidak valid", 
        raw: rawText,
        cleaned: cleanedText,
        parseError: parseError.message 
      });
    }

    // Validasi struktur data
    if (!Array.isArray(parsed)) {
      console.error("❌ Response bukan array:", parsed);
      return res.status(500).json({ error: "Response harus berupa array", data: parsed });
    }
    
    const items = parsed.map((it, index) => {
      console.log(`📦 Item ${index + 1}:`, it);
      return {
        name: it.item || it.name || `Item ${index + 1}`,
        quantity: parseInt(it.qty || it.quantity || 1),
        price: parseInt(it.harga || it.price || 0),
      };
    });
    
    console.log("🛍️ Processed items:", items);

    const responseData = {
      restaurant: "Struk Belanja",
      date: new Date().toISOString().split("T")[0],
      items,
      subtotal: items.reduce((sum, it) => sum + it.price * it.quantity, 0),
      serviceCharge: 0,
      tip: 0,
      total: items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    };

    console.log("✅ Response data:", responseData);
    res.json(responseData);
    fs.unlinkSync(imagePath);
  } catch (err) {
    console.error("❌ Error processing image:", err);
    res.status(500).json({ error: "Gagal memproses gambar", details: err.message });
  }
});

// Test endpoint untuk memastikan server berjalan
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend berjalan dengan baik" });
});

app.listen(port, () => {
  console.log(`✅ Backend jalan di http://localhost:${port}`);
  console.log(`🔍 Health check: http://localhost:${port}/api/health`);
});
