import React, { useState } from 'react';
import { Check } from 'lucide-react';
import LandingPage from './components/LandingPage';
import AddPeopleStep from './components/addPeople';
import UploadReceiptStep from './components/upload';
import SplitItemsStep from './components/split';
import ReviewSplitStep from './components/review';
import FinalSummaryStep from './components/total';

const SplitBillApp = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [people, setPeople] = useState([]);
  const [receiptData, setReceiptData] = useState(null);
  const [billItems, setBillItems] = useState([]);
  const [splits, setSplits] = useState({});
  const [includeTax, setIncludeTax] = useState(false);
  const [processing, setProcessing] = useState(false);
  
  const analyzeReceipt = async (file) => {
  setProcessing(true);

  try {
    const formData = new FormData();
    formData.append("receipt", file); // sesuai dengan nama field di multer upload.single("receipt")

    const response = await fetch("http://localhost:3000/api/analyze", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Gagal mengupload struk");
    }

    const data = await response.json();

    // data dari backend (hasil Gemini parsing struk)
    setReceiptData(data);
    setBillItems(
      data.items.map((item) => ({
        ...item,
        assignedTo: [],
      }))
    );
    setProcessing(false);
    setCurrentStep(3);
  } catch (error) {
    console.error(error);
    setProcessing(false);
  }
};


  const handleStartApp = () => {
    setShowLanding(false);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
    setCurrentStep(1);
    setPeople([]);
    setReceiptData(null);
    setBillItems([]);
    setSplits({});
    setIncludeTax(false);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <AddPeopleStep people={people} setPeople={setPeople} setCurrentStep={setCurrentStep} onBackToLanding={handleBackToLanding} />;
      case 2:
        return <UploadReceiptStep analyzeReceipt={analyzeReceipt} processing={processing} setCurrentStep={setCurrentStep} />;
      case 3:
        return <SplitItemsStep receiptData={receiptData} billItems={billItems} setBillItems={setBillItems} people={people} setSplits={setSplits} setCurrentStep={setCurrentStep} />;
      case 4:
        return <ReviewSplitStep receiptData={receiptData} people={people} splits={splits} setSplits={setSplits} includeTax={includeTax} setIncludeTax={setIncludeTax} setCurrentStep={setCurrentStep} />;
      case 5:
        return <FinalSummaryStep receiptData={receiptData} people={people} splits={splits} billItems={billItems} includeTax={includeTax} setCurrentStep={setCurrentStep} onBackToLanding={handleBackToLanding} />;
      default:
        return <AddPeopleStep people={people} setPeople={setPeople} setCurrentStep={setCurrentStep} onBackToLanding={handleBackToLanding} />;
    }
  };

  if (showLanding) {
    return <LandingPage onStartApp={handleStartApp} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-8 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative text-center mb-8">
        <button 
          onClick={handleBackToLanding}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-2 hover:scale-105 transition-transform"
        >
          CekelanAi.id
        </button>
        <p className="text-gray-300">Bagi Rata, Tanpa Drama</p>
      </div>

      <div className="relative max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg ${
                step <= currentStep 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-purple-500/50' 
                  : 'bg-slate-700 text-gray-400 border border-gray-600'
              }`}>
                {step < currentStep ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 5 && (
                <div className={`w-16 h-1 mt-3 rounded-full ${
                  step < currentStep ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-slate-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default SplitBillApp;