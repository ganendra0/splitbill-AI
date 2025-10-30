import React from 'react';
import { Camera, Users, Calculator, Share2, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

const LandingPage = ({ onStartApp }) => {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Navbar */}
      <nav className="relative z-50 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              CekelanAi.id
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={scrollToFeatures}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Fitur
              </button>
              <button 
                onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Keunggulan
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Cara Kerja
              </button>
              <button 
                onClick={onStartApp}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25"
              >
                Mulai Gratis
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative text-center py-32 px-4">
        <h1 className="text-7xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
          CekelanAi.id
        </h1>
        
        <div className="relative mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Bagi Rata, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Tanpa Drama</span>
          </h2>
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Solusi <span className="text-purple-400 font-semibold">AI terdepan</span> untuk membagi bill makan bersama. 
          <br />Cukup foto struk, biarkan teknologi bekerja untuk Anda!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onStartApp}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 hover:scale-105 border border-purple-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2">
              Mulai Sekarang - GRATIS!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          Fitur <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolusioner</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center">AI Scanner</h4>
              <p className="text-gray-300 text-center leading-relaxed">Teknologi OCR terdepan membaca struk dalam <span className="text-purple-400 font-semibold">2 detik</span>. Zero manual input!</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center">Smart Calculate</h4>
              <p className="text-gray-300 text-center leading-relaxed">Algoritma pintar menghitung pembagian yang <span className="text-green-400 font-semibold">100% fair</span>. Termasuk pajak & tip!</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center">Instant Share</h4>
              <p className="text-gray-300 text-center leading-relaxed">Bagikan hasil ke semua teman via <span className="text-pink-400 font-semibold">WhatsApp, Telegram</span> atau sosmed lainnya!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
            Kenapa Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">CekelanAi.id?</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/50">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Lightning Fast ⚡</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">Hanya <span className="text-yellow-400 font-bold">30 detik</span> untuk membagi bill kompleks. Bye bye kalkulator!</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">100% Precision 🎯</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">AI trained dengan <span className="text-green-400 font-bold">50,000+</span> struk real. Zero error guaranteed!</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Zero Drama 🕊️</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">Transparent & fair splitting. <span className="text-blue-400 font-bold">No more</span> awkward money conversations!</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-50" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl p-10 rounded-3xl border border-purple-500/50 shadow-2xl">
                <h4 className="text-3xl font-black text-white mb-8 text-center">
                  🚀 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Trusted by Thousands</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">10K+</div>
                    <div className="text-gray-300 font-semibold">Happy Users</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">50K+</div>
                    <div className="text-gray-300 font-semibold">Bills Split</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">99.9%</div>
                    <div className="text-gray-300 font-semibold">Accuracy</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">4.9★</div>
                    <div className="text-gray-300 font-semibold">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
            Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Super Simple</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-blue-500/50">
                  1
                </div>
                <h4 className="text-xl font-bold text-white mb-4">👥 Tambah Squad</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Input nama semua teman yang ikut nongkrong</p>
              </div>
            </div>
            
            <div className="group text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-green-500/50">
                  2
                </div>
                <h4 className="text-xl font-bold text-white mb-4">📸 Snap Receipt</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Foto struk, AI langsung scan & extract data</p>
              </div>
            </div>
            
            <div className="group text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-purple-500/50">
                  3
                </div>
                <h4 className="text-xl font-bold text-white mb-4">🎯 Assign Items</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Tentukan siapa pesan menu apa dengan tap</p>
              </div>
            </div>
            
            <div className="group text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-orange-500/50">
                  4
                </div>
                <h4 className="text-xl font-bold text-white mb-4">🎉 Done!</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Share hasil ke grup WA atau sosmed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)]" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Drama-Free?</span>
            </h3>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join <span className="text-purple-400 font-bold">10,000+</span> smart people yang udah <span className="text-green-400 font-bold">bye-bye</span> sama drama pembagian bill!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={onStartApp}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white text-2xl font-black rounded-3xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 hover:scale-110 border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <Sparkles className="w-8 h-8 animate-spin" />
                START NOW - FREE FOREVER!
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-full border border-green-500/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 font-semibold">Tanpa Registrasi</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/30">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-gray-300 font-semibold">Gratis Selamanya</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-500/30">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-300 font-semibold">Semua Device</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bg-slate-900 border-t border-purple-500/30 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              CekelanAi.id
            </h4>
            <p className="text-gray-400 text-lg">Bagi Rata, Tanpa Drama 🚀</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">© 2024 CekelanAi.id - Made with ❤️ for Indonesian Foodies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;