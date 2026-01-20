import React from 'react';

const DashboardScreen: React.FC = () => {
  return (
    <div className="bg-bg-dark text-white overflow-hidden h-screen w-full relative">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0" style={{
         backgroundImage: 'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
         backgroundSize: '40px 40px',
         opacity: 0.2
      }}></div>

      {/* Top Bar */}
      <div className="fixed top-8 left-8 z-50">
        <h1 className="text-2xl font-light tracking-tight text-white/90">AkilVila<span className="text-primary-blue">.</span></h1>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Intelligence Infrastructure</p>
      </div>

      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
         <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">search</span>
         </button>
         <div className="h-8 w-8 rounded-full bg-white/10 overflow-hidden border border-white/10">
            <img alt="Profile" className="h-full w-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdmxapxcXEfvCCdyvZGjOaF_UaLozODW7hBN2oLaUP72Na6e2UXklr2gFGg_csQ6yhU3A8qSM4DiC2eCT5phOGZ765HxH-PFOMMZatDBeYhStpvbs_G3pNHu9k6vrnvbym1Kim8Hc4vpANUF1v-rog5kmpcZJsZ_OuyefF1wuuSEjcy6lMurrUgZevT-r6a3F9hEwEH5ZQz9Ggl7FNoOBz8c5lupvdmYo6_AlQPv0o1KuNDOAzqKf602TdBndAiNjI82dXAn4aYQ"/>
         </div>
      </div>

      {/* Left Sidebar */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 w-64 flex flex-col gap-4">
        <div className="glass-panel rounded-2xl p-5 shadow-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">Device Groups</h2>
            <div className="space-y-2">
                 <button className="w-full flex items-center gap-4 p-3 rounded-xl bg-white/10 border border-white/5 transition-all group">
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-all">
                        <span className="material-symbols-outlined">thermometer</span>
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-medium text-white">Climate</p>
                        <p className="text-[10px] text-blue-300">22°C • Cooling</p>
                    </div>
                </button>
                <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white">Lighting</p>
                        <p className="text-[10px] text-gray-500 group-hover:text-gray-400">12 Active</p>
                    </div>
                </button>
                <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                     <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">lock</span>
                    </div>
                     <div className="text-left">
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white">Security</p>
                        <p className="text-[10px] text-green-400">Armed Home</p>
                    </div>
                </button>
                 <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                     <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">graphic_eq</span>
                    </div>
                     <div className="text-left">
                        <p className="text-sm font-medium text-gray-300 group-hover:text-white">Audio</p>
                        <p className="text-[10px] text-gray-500 group-hover:text-gray-400">Idle</p>
                    </div>
                </button>
            </div>
        </div>
      </aside>

      {/* Right Sidebar */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-40 w-64 flex flex-col gap-4">
        <div className="glass-panel rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                 <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Zones</h2>
                 <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60">3 Active</span>
            </div>
            <nav className="space-y-1">
                <a className="block px-4 py-3 rounded-lg bg-white/5 text-sm font-medium text-white border-l-2 border-primary-blue" href="#">Living Space</a>
                <a className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium text-gray-400 hover:text-white border-l-2 border-transparent transition-colors" href="#">Master Suite</a>
                <a className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium text-gray-400 hover:text-white border-l-2 border-transparent transition-colors" href="#">Entrance Hall</a>
                <a className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium text-gray-400 hover:text-white border-l-2 border-transparent transition-colors" href="#">Kitchen & Dining</a>
                <a className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium text-gray-400 hover:text-white border-l-2 border-transparent transition-colors" href="#">Outdoor Deck</a>
            </nav>
        </div>
      </aside>

      {/* Main Map */}
      <main className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full max-w-[1600px] flex items-center justify-center">
            <div className="relative w-[80%] max-w-6xl aspect-video transition-transform duration-1000 ease-out transform scale-95 hover:scale-100">
                <div className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-2xl opacity-90" style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCIa4PlT-4d9IxtQ4E_XZlfHbwg-8aaFEE5diswQWMG4ASh7YrYo7_PugC_4xCvB5UzteSJwf_-3IhQYXkIb6CPdLujwFvnEQ56qruIGn43E5GKl5Qs5apSPsJJpYHdH3RfWN9f88BfjW1mmwCpIykUVTbX6-6piWWBMcTRWibcE0dhRbxlX9eg_I9397B48WWhmjwlxHynZ4O11moz4eFJIJziL_QG1JJxM6K_UuXBujN-HePjBD6ppgXPwv1_CjHSQ47KmzcRYo")',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
                }}></div>

                {/* Map Hotspots */}
                <div className="absolute top-[48%] left-[32%] group z-10">
                    <div className="relative flex items-center justify-center size-10 cursor-pointer">
                        <div className="absolute size-full rounded-full bg-white/20 animate-pulse"></div>
                        <div className="relative size-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-100 transition-all duration-300 scale-100 origin-bottom">
                         <div className="glass-panel rounded-xl p-3 min-w-[180px]">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Living Room</span>
                                <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            </div>
                            <div className="mt-2 flex items-center gap-3">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400">Temp</span>
                                    <span className="text-sm font-medium">21.5°</span>
                                </div>
                                <div className="w-px h-6 bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400">Light</span>
                                    <span className="text-sm font-medium">60%</span>
                                </div>
                            </div>
                         </div>
                         <div className="w-3 h-3 bg-panel-dark border-r border-b border-white/5 absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                    </div>
                </div>

                <div className="absolute bottom-[35%] left-[48%] group z-10">
                     <div className="relative flex items-center justify-center size-8 cursor-pointer hover:scale-110 transition-transform">
                        <div className="absolute size-full rounded-full bg-primary-blue/20"></div>
                        <div className="relative size-2.5 bg-primary-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    </div>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <div className="glass-panel px-3 py-1.5 rounded text-xs font-medium text-white whitespace-nowrap">
                            Main Entrance
                        </div>
                    </div>
                </div>

                <div className="absolute top-[40%] right-[38%] group z-10">
                     <div className="relative flex items-center justify-center size-8 cursor-pointer hover:scale-110 transition-transform">
                        <div className="absolute size-full rounded-full bg-white/10"></div>
                        <div className="relative size-2.5 bg-white/60 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
                    </div>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <div className="glass-panel px-3 py-1.5 rounded text-xs font-medium text-white whitespace-nowrap">
                            Master Suite
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </main>

      {/* Bottom Controls */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel rounded-full p-2 pl-3 pr-3 flex items-center gap-1 shadow-2xl">
            <div className="flex bg-white/5 rounded-full p-1 mr-4">
                <button className="px-5 py-2 rounded-full bg-white text-bg-dark text-xs font-bold shadow-sm hover:bg-gray-200 transition-colors">Spatial</button>
                <button className="px-5 py-2 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-colors">Data</button>
            </div>
             <div className="h-8 w-px bg-white/10 mr-2"></div>
             <button className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors relative group">
                <span className="material-symbols-outlined text-[20px]">light_mode</span>
                 <span className="absolute -top-1 right-0 size-2 bg-yellow-400 rounded-full border-2 border-bg-dark"></span>
             </button>
             <button className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors relative group">
                <span className="material-symbols-outlined text-[20px]">thermostat</span>
             </button>
              <button className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors relative group">
                <span className="material-symbols-outlined text-[20px]">shield</span>
             </button>
             <div className="h-8 w-px bg-white/10 mx-2"></div>
             <button className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors relative group">
                <span className="material-symbols-outlined text-[20px]">layers</span>
             </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;