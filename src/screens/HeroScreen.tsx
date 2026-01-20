import React from 'react';

const HeroScreen: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-bg-charcoal text-[#111318] dark:text-white overflow-hidden min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto cursor-pointer">
          <div className="size-6 text-white">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">AkilVila</h2>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <button className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/10">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <div className="size-10 rounded-full bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center overflow-hidden">
            <img alt="User Avatar" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdmxapxcXEfvCCdyvZGjOaF_UaLozODW7hBN2oLaUP72Na6e2UXklr2gFGg_csQ6yhU3A8qSM4DiC2eCT5phOGZ765HxH-PFOMMZatDBeYhStpvbs_G3pNHu9k6vrnvbym1Kim8Hc4vpANUF1v-rog5kmpcZJsZ_OuyefF1wuuSEjcy6lMurrUgZevT-r6a3F9hEwEH5ZQz9Ggl7FNoOBz8c5lupvdmYo6_AlQPv0o1KuNDOAzqKf602TdBndAiNjI82dXAn4aYQ"/>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-grow flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        {/* Typography Overlay */}
        <div className="absolute top-24 z-20 flex flex-col items-center text-center max-w-2xl px-6 pointer-events-none animate-float">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-[-0.03em] leading-tight mb-4 drop-shadow-lg">
            A villa should not <br/><span className="font-bold">need to be managed.</span>
          </h1>
          <h2 className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
            AKILVILA IS RESIDENTIAL INTELLIGENCE INFRASTRUCTURE.
          </h2>
        </div>

        {/* 3D Spatial Map Container */}
        <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center pt-20">
          <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video transition-transform duration-700 ease-out hover:scale-[1.02]">
            <div className="w-full h-full bg-contain bg-center bg-no-repeat opacity-90 drop-shadow-2xl"
                 style={{
                   backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCIa4PlT-4d9IxtQ4E_XZlfHbwg-8aaFEE5diswQWMG4ASh7YrYo7_PugC_4xCvB5UzteSJwf_-3IhQYXkIb6CPdLujwFvnEQ56qruIGn43E5GKl5Qs5apSPsJJpYHdH3RfWN9f88BfjW1mmwCpIykUVTbX6-6piWWBMcTRWibcE0dhRbxlX9eg_I9397B48WWhmjwlxHynZ4O11moz4eFJIJziL_QG1JJxM6K_UuXBujN-HePjBD6ppgXPwv1_CjHSQ47KmzcRYo")',
                   maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                 }}>
            </div>

            {/* Hotspots */}
            <div className="absolute top-[45%] left-[30%] group">
              <div className="relative flex items-center justify-center size-8 cursor-pointer">
                <div className="absolute size-full rounded-full bg-white opacity-20 animate-ping"></div>
                <div className="absolute size-full rounded-full bg-white/10 scale-150"></div>
                <div className="relative size-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>

              <div className="absolute left-4 top-4 w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent rotate-[-45deg] origin-left"></div>

              <div className="absolute left-10 top-[-80px] w-64 glass-panel p-4 rounded-xl shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">Living Room</h3>
                    <p className="text-primary-blue text-xs font-semibold mt-1 tracking-wider uppercase">Active Zone</p>
                  </div>
                  <span className="material-symbols-outlined text-white/60 text-lg">videocam</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="material-symbols-outlined text-[18px]">thermometer</span>
                      <span>22°C</span>
                    </div>
                    <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-primary-blue"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                      <span>80%</span>
                    </div>
                    <div className="text-xs text-white/40">Scene: Evening</div>
                  </div>
                </div>
                <div className="mt-3 w-full h-20 rounded-lg bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6jojha2vhY_1FRd6_NgZVuG_8K3B6y8AvkCMK9YFnyHQyTcC7KeVuTu3iADauvJNhPruhx8TWlh5-0nh8rJhkJrPhmpFuDS4qpmxHZqcebBFcM08jL6gaLqe8AsU_O1weKmngfzRUdRa3lJgn-kM0tgp_fkICGkoNYh71aABzK5UySJa-VvyHIjC3ywfPmjl7-HhGyh_lZmyUNjRdHbFT7ObFB8E1MTtqq5PyYrxfCftzI6rT7JhhU0Y_8EbtehfBqPIkhM0-qFs')"}}></div>
              </div>
            </div>

            <div className="absolute top-[35%] right-[35%] group">
                <div className="relative flex items-center justify-center size-6 cursor-pointer hover:scale-110 transition-transform">
                    <div className="absolute inset-0 border border-white/30 rounded-full animate-ripple"></div>
                    <div className="relative size-2 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                        <span className="text-white text-xs font-bold">Kitchen</span>
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[40%] right-[20%] group">
                <div className="relative flex items-center justify-center size-6 cursor-pointer hover:scale-110 transition-transform">
                    <div className="absolute inset-0 border border-white/30 rounded-full animate-ripple" style={{animationDelay: '0.5s'}}></div>
                    <div className="relative size-2 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                </div>
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                        <span className="text-white text-xs font-bold">Master Suite</span>
                        <span className="size-1.5 rounded-full bg-primary-blue"></span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[30%] left-[45%] group">
                <div className="relative flex items-center justify-center size-6 cursor-pointer hover:scale-110 transition-transform">
                    <div className="relative size-2 bg-primary-blue rounded-full shadow-[0_0_12px_rgba(25,93,230,0.8)]"></div>
                </div>
                 <div className="absolute -right-2 -top-2 size-3 bg-red-500 rounded-full border-2 border-[#111621] flex items-center justify-center">
                    <span className="block size-1 bg-white rounded-full"></span>
                </div>
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                        <span className="text-white text-xs font-bold">Main Entry</span>
                        <span className="text-[10px] text-red-400">Locked</span>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="absolute bottom-12 z-50">
          <div className="glass-panel rounded-full p-2 px-4 shadow-2xl flex items-center gap-6">
            <div className="flex bg-white/5 rounded-full p-1">
              <button className="px-4 py-2 rounded-full bg-white text-bg-charcoal text-xs font-bold shadow-sm transition-all hover:bg-gray-100">Spatial</button>
              <button className="px-4 py-2 rounded-full text-white/60 text-xs font-medium hover:text-white transition-colors">Data</button>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex gap-2">
              <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                <span className="material-symbols-outlined text-white/80 group-hover:text-white text-[24px]">lightbulb</span>
                <span className="absolute top-2 right-2 size-1.5 bg-yellow-400 rounded-full"></span>
              </button>
              <button className="group p-3 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 transition-all border border-primary-blue/30 relative">
                <span className="material-symbols-outlined text-primary-blue group-hover:text-white text-[24px]">thermometer</span>
              </button>
              <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                <span className="material-symbols-outlined text-white/80 group-hover:text-white text-[24px]">lock</span>
              </button>
              <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                 <span className="material-symbols-outlined text-white/80 group-hover:text-white text-[24px]">bolt</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroScreen;