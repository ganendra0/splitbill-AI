import React from 'react';
import { Receipt, Share2, Home } from 'lucide-react';

const FinalSummaryStep = ({ receiptData, people, splits, billItems, includeTax, setCurrentStep, onBackToLanding }) => {
  const handleShare = () => {
    const shareText = `Pembagian bill untuk ${receiptData?.restaurant}\n\n` +
      people.map(person => `${person}: Rp${splits[person]?.toLocaleString('id-ID') || '0'}`).join('\n') +
      `\n\nTotal: Rp${Object.values(splits).reduce((sum, amount) => sum + (amount || 0), 0).toLocaleString('id-ID')}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Ringkasan Pembagian Bill',
        text: shareText
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Ringkasan bill berhasil disalin!');
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl blur opacity-25" />
        <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-rose-500/30 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-500/50">
              <Receipt className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 mb-2">{receiptData?.restaurant}</h2>
            <h3 className="text-2xl font-bold text-white mb-4">Ringkasan Bill</h3>
          </div>
      
          <div className="space-y-4 mb-6">
            {people.map(person => (
              <div key={person} className="relative group mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-700/50 backdrop-blur-xl border border-rose-500/30 hover:border-rose-400/60 rounded-2xl p-6 transition-all duration-300">
                  <div className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Struk {person}</div>
                  <div className="space-y-2 text-sm">
                    {billItems.filter(item => item.assignedTo.includes(person)).map((item, index) => (
                      <div key={index} className="flex justify-between text-gray-300">
                        <span>{item.name}</span>
                        <span className="font-semibold">Rp{(item.price / item.assignedTo.length).toLocaleString('id-ID')}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Biaya Layanan:</span>
                      <span>Rp0</span>
                    </div>
                    {includeTax && (
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Tip (Dibagi Rata):</span>
                        <span>Rp{(receiptData.subtotal * 0.1 / people.length).toLocaleString('id-ID')}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-2">
                      <span className="text-white">Total</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Rp{splits[person]?.toLocaleString('id-ID') || '0'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
          <div className="bg-slate-700/50 backdrop-blur-xl border border-rose-500/30 p-6 rounded-2xl mb-6">
            <div className="flex justify-between mb-3 text-gray-300">
              <span>Subtotal:</span>
              <span className="font-semibold">Rp{receiptData?.subtotal.toLocaleString('id-ID')}</span>
            </div>
            {includeTax && (
              <div className="flex justify-between mb-3 text-gray-300">
                <span>Tip:</span>
                <span className="font-semibold">Rp{(receiptData.subtotal * 0.1).toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-xl border-t border-gray-600 pt-3">
              <span className="text-white">Total:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Rp{Object.values(splits).reduce((sum, amount) => sum + (amount || 0), 0).toLocaleString('id-ID')}</span>
            </div>
          </div>
      
          <div className="text-center text-sm text-gray-400 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 font-semibold">cekelanai.id</span>
          </div>
      
          <div className="flex gap-4">
            <button
              onClick={onBackToLanding}
              className="px-6 py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Beranda
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="flex-1 py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={handleShare}
              className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25"
            >
              <Share2 className="w-4 h-4" />
              Bagikan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSummaryStep;