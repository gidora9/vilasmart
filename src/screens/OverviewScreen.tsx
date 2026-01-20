import React from 'react';

const OverviewScreen: React.FC = () => {
  return (
    <div className="bg-bg-dark font-display text-white overflow-hidden h-screen w-full relative flex flex-col">
       <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/5 bg-bg-dark/80 backdrop-blur-md px-6 py-4 md:px-10">
            <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary-blue flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">grid_view</span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-tight">AkilVila</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                <nav className="flex items-center gap-9">
                    <a className="text-white/60 hover:text-white text-sm font-medium transition-colors" href="#">Overview</a>
                    <a className="text-white/60 hover:text-white text-sm font-medium transition-colors" href="#">Floors</a>
                    <a className="text-white/60 hover:text-white text-sm font-medium transition-colors" href="#">Devices</a>
                    <a className="text-white/60 hover:text-white text-sm font-medium transition-colors" href="#">Settings</a>
                </nav>
                <div className="size-9 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10 cursor-pointer">
                    <span className="material-symbols-outlined text-sm text-white/80">person</span>
                </div>
            </div>
        </header>

        <main className="relative flex-1 w-full h-full flex items-end justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                 <div className="w-full h-full bg-cover bg-center opacity-60 mix-blend-lighten scale-95 md:scale-90 transition-transform duration-1000 ease-out"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6x3_47aBtCJGmgXX5kSun7VP8p9VPc00anZWUo5VAkGWlBA4YwtLU_4XfVmLpMocq_EFw9hDraeHLsfqDnI9r3QiQgZjdhLYrtW3OlZ8gNFnymdzcj34dabbFhm5Ji2-b-t-XyHz2whbC9vEdk4QDCJBZitaDM2emsf6Kwz_DuLG1QMCiZ6Gwtr_frR6_YmIu2hgrBWR1sRCc2_ebluYI0Y5Uzre4CcGAA5kh3A7I4v6NI_NyGaQ1wmWCytaM4O9bDz0UthkoDmY")' }}></div>
                 <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundSize: '50px 50px',
                    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
                 }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/80 pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/50 via-transparent to-bg-dark/50 pointer-events-none"></div>
            </div>

            {/* Central Content */}
            <div className="relative z-10 w-full flex flex-col items-center pb-16 md:pb-24 px-6 pointer-events-none">
                <div className="mb-14 text-center max-w-5xl mx-auto pointer-events-auto">
                    <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight drop-shadow-2xl">
                        The villa behaves correctly <span className="text-white/30 italic font-light">—</span> <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">without supervision.</span>
                    </h1>
                </div>
                <div className="pointer-events-auto group">
                     <button className="relative flex items-center gap-5 px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_-10px_rgba(25,93,230,0.25)] transition-all duration-500 hover:scale-105 active:scale-95">
                        <span className="text-lg md:text-xl text-white font-medium tracking-wide font-display">Stop managing. Start trusting.</span>
                        <div className="size-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                             <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                     </button>
                </div>
            </div>

            {/* Floor Selector (Right) */}
            <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-1.5 p-1.5 bg-bg-dark/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
                 <div className="text-[10px] text-center text-white/30 font-bold uppercase tracking-widest py-1 font-display">View</div>
                 {['R', '3', '2', '1', 'G'].map((floor) => (
                    <button key={floor} className={`size-11 rounded-xl flex items-center justify-center transition-all font-serif text-lg ${floor === '2' ? 'text-white bg-white/10 shadow-inner font-bold border border-white/5 ring-1 ring-white/10' : 'text-white/50 hover:text-white hover:bg-white/10 italic'}`}>
                        {floor}
                    </button>
                 ))}
            </div>

            {/* System Status (Left) */}
             <div className="hidden md:flex absolute bottom-8 left-8 z-20 items-end gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-bg-dark/40 border border-white/5 backdrop-blur-md">
                        <div className="flex space-x-1">
                             <div className="size-1 rounded-full bg-primary-blue animate-pulse"></div>
                             <div className="size-1 rounded-full bg-primary-blue animate-pulse delay-75"></div>
                             <div className="size-1 rounded-full bg-primary-blue animate-pulse delay-150"></div>
                        </div>
                        <span className="text-xs text-white/60 font-medium tracking-wide uppercase">System Nominal</span>
                    </div>
                </div>
             </div>
        </main>
    </div>
  );
};

export default OverviewScreen;