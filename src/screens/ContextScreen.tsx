import React from 'react';

const ContextScreen: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-[#0f0e0c] font-display antialiased selection:bg-primary-amber/30 selection:text-primary-amber overflow-hidden h-screen w-full relative flex flex-col">
       {/* Header */}
       <header className="z-50 flex items-center justify-between whitespace-nowrap px-8 py-6 absolute top-0 w-full bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
        <div className="flex items-center gap-4 text-white pointer-events-auto">
          <div className="size-8 flex items-center justify-center text-primary-amber">
            <span className="material-symbols-outlined" style={{fontSize: '32px'}}>grid_view</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-bold leading-tight tracking-wide">AKILVILA</h2>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Spatial Logic Engine</span>
          </div>
        </div>
        <div className="flex items-center gap-10 pointer-events-auto">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Zones</a>
            <a href="#" className="text-primary-amber text-xs font-bold uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-primary-amber">Intelligence</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Metrics</a>
          </nav>
          <div className="w-px h-8 bg-white/10"></div>
          <button className="flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative w-full h-full">
         <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: "linear-gradient(rgba(15, 14, 12, 0.3), rgba(15, 14, 12, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC8nZFQYDE80k6DAC5ApPjxJ9xCdPHKnialxEQ6RPyendj5yizD2vmheNJAKpEyxYM9F1VRZOCm5Th844us2RLYP7etAmsyVd1-kKxyzM75mkCHe4GoH8CJQwemcgNfmvWPBs6H95kICHOZBqH-VkeI3piE1E6rpevzsM5dEAe0LRuv9WWYBWD9ckyYfvrf71Z_100E_DL8liu-K4wenOAJ-5PbDXjTQxESOPrO9hI0kM8XVjAA1PVFqY1wo11Z8jU-CBWr4I51-E')",
            filter: 'grayscale(100%) contrast(120%) brightness(40%)'
          }}></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0f0e0c] pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full h-full pointer-events-none flex items-center justify-center">
            <div className="relative flex flex-col items-center pointer-events-auto transform translate-y-8">
                {/* Info Card */}
                <div className="glass-card-amber w-[380px] rounded-3xl mb-4 shadow-2xl animate-float overflow-hidden flex flex-col">
                    <div className="px-6 py-5 border-b border-white/5 flex justify-between items-start bg-gradient-to-b from-white/5 to-transparent">
                        <div>
                             <h3 className="text-white text-lg font-semibold tracking-tight">Living Room</h3>
                             <p className="text-white/40 text-xs mt-1 font-medium tracking-wide">Zone 01 • Main Level</p>
                        </div>
                         <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                            <span className="material-symbols-outlined text-white/60 text-[16px]">thermostat</span>
                            <span className="text-white/90 text-xs font-mono">72°</span>
                         </div>
                    </div>
                     <div className="px-6 py-5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                             <div className="size-8 rounded-full bg-primary-amber/20 flex items-center justify-center text-primary-amber">
                                 <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                             </div>
                              <div className="flex flex-col">
                                <span className="text-white text-sm font-medium">AkilVila Logic</span>
                                <span className="text-primary-amber text-[10px] uppercase tracking-wider font-bold">Active</span>
                             </div>
                         </div>
                          <div className="relative inline-block w-12 h-7 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary-amber"/>
                            <label className="toggle-label block overflow-hidden h-7 rounded-full bg-primary-amber cursor-pointer"></label>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 divide-x divide-white/5 border-t border-white/5 bg-black/20">
                         {/* Manual Col */}
                         <div className="p-5 flex flex-col gap-3 opacity-40 group hover:opacity-60 transition-opacity cursor-default">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Manual</span>
                                <span className="material-symbols-outlined text-red-400 text-sm">warning</span>
                            </div>
                             <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-white/60 text-[16px]">wb_sunny</span>
                                    <span className="text-white/70 text-xs">Glare conflict</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-white/60 text-[16px]">tune</span>
                                    <span className="text-white/70 text-xs">Constant input</span>
                                </div>
                             </div>
                         </div>
                         {/* Auto Col */}
                         <div className="p-5 flex flex-col gap-3 bg-gradient-to-br from-primary-amber/5 to-transparent relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-20 h-20 bg-primary-amber/10 blur-xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                              <div className="flex justify-between items-start relative z-10">
                                <span className="text-[10px] uppercase tracking-widest text-primary-amber font-bold">Autonomous</span>
                                <span className="material-symbols-outlined text-primary-amber text-sm">check_circle</span>
                            </div>
                            <div className="space-y-2 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-white text-[16px]">shutter_speed</span>
                                    <span className="text-white text-xs font-medium">Solar adaptive</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-white text-[16px]">biotech</span>
                                    <span className="text-white text-xs font-medium">Predictive</span>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>
                 {/* Connection Visuals */}
                <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-white/20"></div>
                    <div className="h-12 w-px bg-gradient-to-b from-white/20 via-white/40 to-primary-amber"></div>
                </div>
                 <div className="relative flex items-center justify-center mt-[-4px]">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] opacity-60 pointer-events-none mix-blend-screen" style={{transform: 'perspective(1000px) rotateX(60deg) scale(1.5)', transformStyle: 'preserve-3d'}}>
                        <div className="w-full h-full bg-primary-amber/20 border-2 border-primary-amber/40 shadow-[0_0_50px_rgba(241,174,39,0.3)] rounded-xl backdrop-blur-sm"></div>
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 divide-x divide-y divide-primary-amber/10"></div>
                     </div>
                     <div className="relative z-10 group cursor-pointer">
                        <div className="absolute -inset-4 bg-primary-amber/20 rounded-full animate-ping opacity-75"></div>
                         <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-primary-amber border-2 border-[#0f0e0c] shadow-[0_0_20px_rgba(241,174,39,0.8)] transition-transform duration-300 group-hover:scale-110">
                            <div className="w-1.5 h-1.5 bg-[#0f0e0c] rounded-full"></div>
                        </div>
                     </div>
                 </div>
            </div>

            <div className="absolute top-[35%] left-[25%] opacity-30 hover:opacity-80 transition-all duration-300 pointer-events-auto cursor-pointer group">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30 backdrop-blur-sm group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all"></div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white hidden group-hover:block transition-all">Dining</span>
                </div>
            </div>
             <div className="absolute top-[45%] right-[20%] opacity-30 hover:opacity-80 transition-all duration-300 pointer-events-auto cursor-pointer group">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30 backdrop-blur-sm group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all"></div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white hidden group-hover:block transition-all">Kitchen</span>
                </div>
            </div>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-10 left-10 z-20 max-w-sm pointer-events-none">
            <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary-amber"></span>
                <span className="text-primary-amber text-xs font-bold uppercase tracking-widest">System Overview</span>
            </div>
            <h1 className="text-white text-3xl font-light tracking-tight mb-3">
                Spatial <span className="font-bold text-white">Context Awareness</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed font-light">
                AkilVila eliminates friction by predicting needs. The system constantly balances manual inputs against autonomous optimization protocols.
            </p>
        </div>

        <div className="absolute bottom-10 right-10 z-20 flex gap-3 pointer-events-auto">
             <button className="size-11 rounded-full glass-card-amber flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-colors border-white/10">
                 <span className="material-symbols-outlined text-[20px]">layers</span>
            </button>
            <div className="h-11 px-5 rounded-full glass-card-amber flex items-center gap-3 text-white/90 border-white/10">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wide">SYSTEM OPTIMAL</span>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ContextScreen;