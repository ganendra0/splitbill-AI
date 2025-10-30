import React from 'react';
import { DollarSign } from 'lucide-react';

const ReviewSplitStep = ({ receiptData, people, splits, setSplits, includeTax, setIncludeTax, setCurrentStep }) => {
  const subtotal = receiptData?.subtotal || 0;
  const taxAmount = subtotal * 0.1;
  const totalWithExtras = subtotal + (includeTax ? taxAmount : 0);
  
  const recalculateWithTaxTip = () => {
  const baseSubtotal = receiptData?.subtotal || 0;
  const basePerPerson = baseSubtotal / people.length;
  const taxPerPerson = includeTax ? (baseSubtotal * 0.1) / people.length : 0;

  const newSplits = {};
  people.forEach(person => {
    newSplits[person] = basePerPerson + taxPerPerson;
  });

  setSplits(newSplits);
};

  
  React.useEffect(() => {
    recalculateWithTaxTip();
  }, [includeTax]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur opacity-25" />
        <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-violet-500/30 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/50">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Ringkasan Pembagian</h2>
            <p className="text-gray-300">{receiptData?.restaurant}</p>
          </div>
      
          <div className="space-y-4 mb-6">
            {people.map(person => (
              <div key={person} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between p-4 bg-slate-700/50 backdrop-blur-xl border border-violet-500/30 hover:border-violet-400/60 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg shadow-violet-500/50">
                      {person[0].toUpperCase()}
                    </div>
                    <span className="font-semibold text-white text-lg">{person}</span>
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                    Rp{splits[person]?.toLocaleString('id-ID') || '0'}
                  </span>
                </div>
              </div>
            ))}
          </div>
      
          <div className="border-t border-gray-600 pt-6 mb-6">
            <label className="flex items-center gap-3 cursor-pointer bg-slate-700/50 p-4 rounded-xl hover:bg-slate-700/70 transition-colors">
              <input
                type="checkbox"
                checked={includeTax}
                onChange={(e) => setIncludeTax(e.target.checked)}
                className="rounded border-gray-500 text-violet-500 focus:ring-violet-500 bg-slate-700"
              />
              <span className="text-gray-300 font-medium">Termasuk pajak (10%)</span>
            </label>
          </div>
      
          <div className="bg-slate-700/50 backdrop-blur-xl border border-violet-500/30 p-6 rounded-2xl mb-6">
            <div className="flex justify-between mb-3 text-gray-300">
              <span>Subtotal:</span>
              <span className="font-semibold">Rp{subtotal.toLocaleString('id-ID')}</span>
            </div>
            {includeTax && (
              <>
                <div className="flex justify-between mb-3 text-gray-300">
                  <span>Pajak:</span>
                  <span className="font-semibold">Rp{taxAmount.toLocaleString('id-ID')}</span>
                </div>
                {/* <div className="flex justify-between mb-3 text-gray-300">
                  <span>Tip:</span>
                  <span className="font-semibold">Rp{tipAmount.toLocaleString('id-ID')}</span>
                </div> */}
              </>
            )}
            <div className="flex justify-between font-bold text-xl border-t border-gray-600 pt-3">
              <span className="text-white">Total:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"> Rp{totalWithExtras.toLocaleString('id-ID')}</span>
            </div>
          </div>
      
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentStep(3)}
              className="flex-1 py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={() => setCurrentStep(5)}
              className="flex-1 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-indigo-600 transition-all shadow-lg shadow-violet-500/25"
            >
              Lihat Ringkasan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSplitStep;