import React, { useState } from 'react';
import { User, Plus, X, Home } from 'lucide-react';

const AddPeopleStep = ({ people, setPeople, setCurrentStep, onBackToLanding }) => {
  const [newPersonName, setNewPersonName] = useState('');
  
  const addPerson = () => {
    if (newPersonName.trim() && !people.includes(newPersonName.trim())) {
      setPeople([...people, newPersonName.trim()]);
      setNewPersonName('');
    }
  };
  
  const removePerson = (personToRemove) => {
    setPeople(people.filter(person => person !== personToRemove));
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25" />
        <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Tambah Squad</h2>
            <p className="text-gray-300">Siapa saja yang akan patungan?</p>
          </div>
          
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newPersonName}
                onChange={(e) => setNewPersonName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPerson()}
                placeholder="Masukkan nama orang"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
              <button
                onClick={addPerson}
                className="px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-2">
              {people.map((person, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/50 backdrop-blur-xl px-4 py-3 rounded-xl border border-gray-600/30">
                  <span className="font-medium text-white">{person}</span>
                  <button
                    onClick={() => removePerson(person)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={onBackToLanding}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-slate-600/50 transition-colors"
            >
              <Home className="w-4 h-4" />
              Beranda
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              disabled={people.length < 2}
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
            >
              Lanjutkan ({people.length} orang)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPeopleStep;