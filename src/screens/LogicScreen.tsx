import React from 'react';

const LogicScreen: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-bg-dark font-display antialiased selection:bg-primary-amber/30 selection:text-primary-amber overflow-hidden h-screen w-full relative flex flex-col">
      {/* Navbar */}
      <header className="z-50 flex items-center justify-between whitespace-nowrap px-8 py-5 absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 flex items-center justify-center text-primary-amber">
            <span className="material-symbols-outlined" style={{fontSize: '32px'}}>grid_view</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-bold leading-tight tracking-wide">AKILVILA</h2>
            <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium">Spatial Logic Engine</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-white/70 hover:text-primary-amber transition-colors text-sm font-medium leading-normal" href="#">Zones</a>
            <a className="text-primary-amber text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary-amber" href="#">Logic</a>
            <a className="text-white/70 hover:text-primary-amber transition-colors text-sm font-medium leading-normal" href="#">Experience</a>
            <a className="text-white/70 hover:text-primary-amber transition-colors text-sm font-medium leading-normal" href="#">Contact</a>
          </nav>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-amber hover:bg-amber-400 transition-colors text-[#181611] text-sm font-bold leading-normal tracking-wide">
            <span className="truncate">Connect System</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative w-full h-full">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: "linear-gradient(rgba(26, 24, 20, 0.6), rgba(26, 24, 20, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC8nZFQYDE80k6DAC5ApPjxJ9xCdPHKnialxEQ6RPyendj5yizD2vmheNJAKpEyxYM9F1VRZOCm5Th844us2RLYP7etAmsyVd1-kKxyzM75mkCHe4GoH8CJQwemcgNfmvWPBs6H95kICHOZBqH-VkeI3piE1E6rpevzsM5dEAe0LRuv9WWYBWD9ckyYfvrf71Z_100E_DL8liu-K4wenOAJ-5PbDXjTQxESOPrO9hI0kM8XVjAA1PVFqY1wo11Z8jU-CBWr4I51-E')",
            filter: 'grayscale(80%) contrast(110%) brightness(50%)'
          }}></div>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
          }}></div>
           <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-bg-dark pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/50 pointer-events-none"></div>
        </div>

        {/* UI Overlay */}
        <div className="relative z-10 w-full h-full pointer-events-none flex items-center justify-center">
            <div className="relative flex flex-col items-center pointer-events-auto transform translate-y-12">
                {/* Logic Card */}
                <div className="glass-card-amber rounded-xl p-0 mb-8 max-w-[800px] w-full shadow-2xl overflow-hidden border-t border-white/10 animate-fade-in-up transition-all duration-500 bg-opacity-90">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-black/20">
                        <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-primary-amber text-sm">radar</span>
                             <span className="text-xs font-bold text-white tracking-widest uppercase">Active Zone: Living Room</span>
                        </div>
                         <span className="text-[10px] font-mono text-white/40">ID: LV-01-ZN</span>
                    </div>
                    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {/* Pain */}
                        <div className="flex-1 p-6 bg-gradient-to-br from-white/5 to-transparent relative group">
                            <div className="absolute top-0 right-0 p-4 text-white/10">
                                <span className="material-symbols-outlined text-4xl">warning</span>
                            </div>
                            <h3 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span> Current State (Pain)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-400/60 mt-0.5 text-lg">thermostat_auto</span>
                                    <div>
                                        <p className="text-white/80 text-sm font-medium">Uncoordinated Climate</p>
                                        <p className="text-white/40 text-xs leading-relaxed">HVAC fighting natural thermal gain.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-400/60 mt-0.5 text-lg">light_mode</span>
                                    <div>
                                        <p className="text-white/80 text-sm font-medium">Light Pollution</p>
                                        <p className="text-white/40 text-xs leading-relaxed">Harsh artificial lighting during sunset.</p>
                                    </div>
                                </li>
                                 <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-400/60 mt-0.5 text-lg">touch_app</span>
                                    <div>
                                        <p className="text-white/80 text-sm font-medium">Manual Friction</p>
                                        <p className="text-white/40 text-xs leading-relaxed">Multiple switch adjustments required.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Resolution */}
                         <div className="flex-1 p-6 bg-gradient-to-br from-primary-amber/10 to-transparent relative overflow-hidden">
                             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-amber/20 rounded-full blur-[50px]"></div>
                              <div className="absolute top-0 right-0 p-4 text-primary-amber/20">
                                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                            </div>
                             <h3 className="text-primary-amber text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-amber animate-pulse"></span> AkilVila Logic (Resolution)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-amber mt-0.5 text-lg">nest_farsight_weather</span>
                                    <div>
                                        <p className="text-white text-sm font-bold">Atmospheric Logic</p>
                                        <p className="text-primary-amber/70 text-xs leading-relaxed">Pre-cools based on solar trajectory.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-amber mt-0.5 text-lg">wb_twilight</span>
                                    <div>
                                        <p className="text-white text-sm font-bold">Circadian Orchestration</p>
                                        <p className="text-primary-amber/70 text-xs leading-relaxed">Lighting warms to 2700K as sun sets.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-amber mt-0.5 text-lg">check_circle</span>
                                    <div>
                                        <p className="text-white text-sm font-bold">Autonomous Responsibility</p>
                                        <p className="text-primary-amber/70 text-xs leading-relaxed">System anticipates comfort needs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Connector */}
                <div className="h-16 w-px bg-gradient-to-b from-white/40 to-primary-amber/80"></div>
                <div className="h-8 w-px bg-gradient-to-b from-primary-amber/80 to-transparent border-r border-dashed border-primary-amber/50"></div>

                {/* Hotspot */}
                <div className="relative mt-2">
                     <div className="absolute -inset-8 rounded-full border border-primary-amber/20 opacity-40"></div>
                     <div className="absolute -inset-16 rounded-full border border-primary-amber/10 opacity-20"></div>
                     <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary-amber shadow-[0_0_20px_rgba(241,174,39,0.3)] cursor-pointer hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-[#181611] text-[14px] font-bold">add</span>
                     </div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary-amber/20 blur-[60px] rounded-[100%] pointer-events-none mix-blend-screen z-[-1]"></div>
                     <div className="absolute top-10 w-32 text-center left-1/2 -translate-x-1/2">
                        <span className="text-white/60 text-[10px] tracking-[0.2em] font-medium uppercase">Living Zone</span>
                     </div>
                </div>
            </div>

            {/* Zones */}
             <div className="absolute top-[30%] left-[20%] opacity-40 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer group">
                <div className="w-3 h-3 rounded-full border border-white/50 bg-black/50 backdrop-blur-sm group-hover:bg-primary-amber group-hover:border-primary-amber transition-colors"></div>
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-white/50 tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Kitchen</span>
            </div>
             <div className="absolute top-[40%] right-[25%] opacity-40 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer group">
                <div className="w-3 h-3 rounded-full border border-white/50 bg-black/50 backdrop-blur-sm group-hover:bg-primary-amber group-hover:border-primary-amber transition-colors"></div>
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-white/50 tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Master Suite</span>
            </div>
        </div>

        {/* Bottom UI */}
        <div className="absolute bottom-8 left-8 z-20 max-w-xs pointer-events-none">
            <h1 className="text-white text-3xl font-light tracking-tight mb-2">Interactive<br/><span className="font-bold text-primary-amber">Spatial Logic</span></h1>
            <p className="text-white/60 text-sm leading-relaxed">Explore how AkilVila transforms physical spaces into intelligent environments through proactive logic.</p>
        </div>
         <div className="absolute bottom-8 right-8 z-20 flex gap-2 pointer-events-auto">
            <button className="size-10 rounded-full glass-panel flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors">
                 <span className="material-symbols-outlined">layers</span>
            </button>
             <button className="size-10 rounded-full glass-panel flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors">
                 <span className="material-symbols-outlined">3d_rotation</span>
            </button>
            <div className="h-10 px-4 rounded-full glass-panel flex items-center gap-2 text-white/80">
                 <span className="material-symbols-outlined text-sm">schedule</span>
                 <span className="text-xs font-mono">19:42 PM</span>
            </div>
        </div>

      </main>
    </div>
  );
};

export default LogicScreen;