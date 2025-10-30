import React from 'react';
import { Upload } from 'lucide-react';

const UploadReceiptStep = ({ analyzeReceipt, processing, setCurrentStep }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      analyzeReceipt(file);
    }
  };
  
  if (processing) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-25" />
          <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30 shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-cyan-400 border-r-blue-400 mx-auto mb-6 shadow-lg shadow-cyan-500/50"></div>
              <h2 className="text-3xl font-bold text-white mb-2">Menganalisis struk...</h2>
              <p className="text-gray-300">AI kami sedang membaca struk Anda</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25" />
        <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/30 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Upload Struk</h2>
            <p className="text-gray-300">Foto atau upload gambar struk Anda</p>
          </div>
      
      <div className="mb-6">
          <div className="border-2 border-dashed border-emerald-500/50 rounded-2xl p-8 text-center hover:border-emerald-400/80 transition-all duration-300 bg-slate-700/30 backdrop-blur-sm">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              id="receipt-upload"
            />
            <label htmlFor="receipt-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg font-medium">Klik untuk upload atau drag and drop</p>
              <p className="text-sm text-gray-400 mt-2">PNG, JPG, atau PDF</p>
            </label>
          </div>
      </div>
      
          <button
            onClick={() => setCurrentStep(1)}
            className="w-full py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadReceiptStep;