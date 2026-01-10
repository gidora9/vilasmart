import React from 'react';
import { Thermometer, Lightbulb, Lock, Zap } from 'lucide-react';
import { Hotspot } from '../components/Hotspot';

const IMAGES = {
    SPATIAL_BG: "https://lh3.googleusercontent.com/pw/AP1GczO_l7kH9o5yFjT8_Fj6kK1v6z7_5_7_4kP3_5_8_8_6_7_9_0_1_2_3_4_5_6_7_8_9_0",
    SPATIAL_PREVIEW: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=200&h=100"
};

const SPATIAL_BG_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6x3_47aBtCJGmgXX5kSun7VP8p9VPc00anZWUo5VAkGWlBA4YwtLU_4XfVmLpMocq_EFw9hDraeHLsfqDnI9r3QiQgZjdhLYrtW3OlZ8gNFnymdzcj34dabbFhm5Ji2-b-t-XyHz2whbC9vEdk4QDCJBZitaDM2emsf6Kwz_DuLG1QMCiZ6Gwtr_frR6_YmIu2hgrBWR1sRCc2_ebluYI0Y5Uzre4CcGAA5kh3A7I4v6NI_NyGaQ1wmWCytaM4O9bDz0UthkoDmY";

export const SpatialScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111621] text-white font-display overflow-hidden relative selection:bg-primary selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

      <main className="relative flex-grow flex flex-col items-center justify-center w-full h-screen overflow-hidden">
         <div className="absolute top-24 z-20 flex flex-col items-center text-center max-w-2xl px-6 pointer-events-none animate-float">
            <h1 className="text-white text-4xl md:text-6xl font-light tracking-[-0.03em] leading-tight mb-4 drop-shadow-lg">
                A villa should not <br /><span className="font-bold">need to be managed.</span>
            </h1>
            <h2 className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                AKILVILA IS RESIDENTIAL INTELLIGENCE INFRASTRUCTURE.
            </h2>
         </div>

         <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center pt-20">
            <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video transition-transform duration-700 ease-out hover:scale-[1.02]">
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat opacity-90 drop-shadow-2xl"
                  style={{
                    backgroundImage: `url("${SPATIAL_BG_URL}")`,
                    maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                  }}
                ></div>

                <Hotspot
                  top="45%"
                  left="30%"
                  active={true}
                  content={{
                    temp: "22°C",
                    light: "80%",
                    image: IMAGES.SPATIAL_PREVIEW
                  }}
                />

                <Hotspot
                  top="35%"
                  left="65%"
                  label="Kitchen"
                  color="bg-green-500"
                />

                <Hotspot
                  top="60%"
                  left="80%"
                  label="Master Suite"
                  color="bg-primary"
                />

                <Hotspot
                  top="70%"
                  left="45%"
                  label="Main Entry"
                  color="bg-primary"
                  locked={true}
                  status="Locked"
                />

            </div>
         </div>

         <div className="fixed bottom-24 z-50 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="glass-panel rounded-full p-2 px-4 shadow-2xl flex items-center gap-6">
                <div className="flex bg-white/5 rounded-full p-1">
                    <button className="px-4 py-2 rounded-full bg-white text-[#111621] text-xs font-bold shadow-sm transition-all hover:bg-gray-100">
                        Spatial
                    </button>
                    <button className="px-4 py-2 rounded-full text-white/60 text-xs font-medium hover:text-white transition-colors">
                        Data
                    </button>
                </div>
                <div className="h-6 w-px bg-white/10"></div>

                <div className="flex gap-2">
                    <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                        <Lightbulb className="text-white/80 group-hover:text-white" size={24} />
                        <span className="absolute top-2 right-2 size-1.5 bg-yellow-400 rounded-full"></span>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Lights</span>
                    </button>
                    <button className="group p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all border border-primary/30 relative">
                        <Thermometer className="text-primary group-hover:text-white" size={24} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Climate</span>
                    </button>
                    <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                        <Lock className="text-white/80 group-hover:text-white" size={24} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Security</span>
                    </button>
                    <button className="group p-3 rounded-full hover:bg-white/10 transition-all relative">
                        <Zap className="text-white/80 group-hover:text-white" size={24} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Energy</span>
                    </button>
                </div>
            </div>
         </div>
      </main>
    </div>
  );
};
