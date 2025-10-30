import React from 'react';
import { Edit3 } from 'lucide-react';

const SplitItemsStep = ({ receiptData, billItems, setBillItems, people, setSplits, setCurrentStep }) => {
  const togglePersonForItem = (itemIndex, person) => {
    const newBillItems = [...billItems];
    const item = newBillItems[itemIndex];
    
    if (item.assignedTo.includes(person)) {
      item.assignedTo = item.assignedTo.filter(p => p !== person);
    } else {
      item.assignedTo = [...item.assignedTo, person];
    }
    
    setBillItems(newBillItems);
  };
  
  const calculateSplits = () => {
    const newSplits = {};
    people.forEach(person => {
      newSplits[person] = 0;
    });
    
    billItems.forEach(item => {
      if (item.assignedTo.length > 0) {
        const splitAmount = item.price / item.assignedTo.length;
        item.assignedTo.forEach(person => {
          newSplits[person] += splitAmount;
        });
      }
    });
    
    setSplits(newSplits);
    setCurrentStep(4);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-25" />
        <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/30 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50">
              <Edit3 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{receiptData?.restaurant}</h2>
            <p className="text-gray-300">{receiptData?.date}</p>
          </div>
      
      <div className="space-y-4 mb-6">
          {billItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-700/50 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/60 rounded-2xl p-6 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{item.name}</h3>
                    <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Rp{item.price.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-medium">
                    Bagi
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-300 font-medium">Pilih orang untuk dibagi:</p>
                  <div className="flex flex-wrap gap-3">
                    {people.map(person => (
                      <label key={person} className="flex items-center gap-2 cursor-pointer bg-slate-600/50 px-3 py-2 rounded-xl hover:bg-slate-600/70 transition-colors">
                        <input
                          type="checkbox"
                          checked={item.assignedTo.includes(person)}
                          onChange={() => togglePersonForItem(index, person)}
                          className="rounded border-gray-500 text-pink-500 focus:ring-pink-500 bg-slate-700"
                        />
                        <span className="text-sm text-white font-medium">{person}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex-1 py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={calculateSplits}
              className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/25"
            >
              Hitung Pembagian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitItemsStep;