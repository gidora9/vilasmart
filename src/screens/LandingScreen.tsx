import React from 'react';
import { Screen } from '../types';

interface LandingScreenProps {
  onNavigate: (screen: Screen) => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-bg-dark text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/5 bg-bg-dark/80 backdrop-blur-sm px-6 py-4 md:px-10">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary-blue">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AkilVila</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Concept</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Intelligence</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Models</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Contact</a>
          </nav>
          <button onClick={() => onNavigate(Screen.Dashboard)} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary-blue hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Resident Login</span>
          </button>
        </div>
      </header>

      <main className="relative flex flex-1 flex-col items-center justify-center min-h-screen pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-screen"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6x3_47aBtCJGmgXX5kSun7VP8p9VPc00anZWUo5VAkGWlBA4YwtLU_4XfVmLpMocq_EFw9hDraeHLsfqDnI9r3QiQgZjdhLYrtW3OlZ8gNFnymdzcj34dabbFhm5Ji2-b-t-XyHz2whbC9vEdk4QDCJBZitaDM2emsf6Kwz_DuLG1QMCiZ6Gwtr_frR6_YmIu2hgrBWR1sRCc2_ebluYI0Y5Uzre4CcGAA5kh3A7I4v6NI_NyGaQ1wmWCytaM4O9bDz0UthkoDmY")'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/90 via-transparent to-bg-dark/90"></div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" preserveAspectRatio="none">
            <path className="glow-line" d="M20% 70% Q 50% 50% 80% 30%" fill="none" stroke="#195de6" strokeWidth="1"></path>
            <path className="glow-line" d="M30% 80% Q 50% 50% 70% 20%" fill="none" stroke="#195de6" strokeWidth="1"></path>
            <path className="glow-line" d="M10% 40% Q 50% 50% 90% 60%" fill="none" stroke="#195de6" strokeWidth="1"></path>
            <circle className="glow-line" cx="20%" cy="70%" fill="#195de6" r="3"></circle>
            <circle className="glow-line" cx="80%" cy="30%" fill="#195de6" r="3"></circle>
          </svg>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-[960px] px-6 text-center animate-float">
          <div className="mb-8 flex items-center justify-center size-16 rounded-full bg-primary-blue/10 border border-primary-blue/30 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(25,93,230,0.4)]">
            <span className="material-symbols-outlined text-primary-blue text-3xl">psychology</span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-[-0.033em] mb-12 max-w-3xl drop-shadow-2xl">
            The villa behaves correctly <span className="text-white/40">—</span> <br className="hidden md:block"/> without supervision.
          </h1>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button onClick={() => onNavigate(Screen.Dashboard)} className="relative flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 active:bg-white/15 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300">
              <span className="material-symbols-outlined text-primary-blue group-hover:text-blue-300 transition-colors">fingerprint</span>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-0.5">System Ready</span>
                <span className="text-white text-base md:text-lg font-bold leading-none tracking-tight">Stop managing. Start trusting.</span>
              </div>
              <span className="material-symbols-outlined text-white/50 ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-32 left-10 hidden lg:flex flex-col gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark/50 backdrop-blur border border-white/5 w-64 animate-pulse-slow">
            <div className="size-2 rounded-full bg-green-500 shadow-[0_0_10px_2px_rgba(25,93,230,0.6)]"></div>
            <div className="flex flex-col">
              <span className="text-xs text-white/50 uppercase">HVAC & Climate</span>
              <span className="text-sm font-medium">Optimized for dusk</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark/50 backdrop-blur border border-white/5 w-64" style={{ animationDelay: '1.5s' }}>
            <div className="size-2 rounded-full bg-primary-blue shadow-[0_0_10px_2px_rgba(25,93,230,0.6)]"></div>
            <div className="flex flex-col">
              <span className="text-xs text-white/50 uppercase">Security Perimeter</span>
              <span className="text-sm font-medium">Active Monitoring</span>
            </div>
          </div>
        </div>
      </main>

       <footer className="relative z-10 border-t border-white/5 bg-bg-dark w-full">
        <div className="flex justify-center py-10 px-6">
            <div className="flex flex-col w-full max-w-[960px] gap-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-white/90">
                            <span className="material-symbols-outlined text-lg">grid_view</span>
                            <h3 className="text-base font-bold">AkilVila Intelligence</h3>
                        </div>
                        <p className="text-white/40 text-sm">Orchestrating luxury living spaces.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a className="text-white/60 hover:text-primary-blue text-sm font-medium transition-colors" href="#">Privacy Policy</a>
                        <a className="text-white/60 hover:text-primary-blue text-sm font-medium transition-colors" href="#">Terms of Service</a>
                        <a className="text-white/60 hover:text-primary-blue text-sm font-medium transition-colors" href="#">Support</a>
                    </div>
                </div>
                <div className="border-t border-white/5 w-full"></div>
                <p className="text-white/30 text-xs text-center">© 2024 AkilVila Intelligence. All systems nominal.</p>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default LandingScreen;
