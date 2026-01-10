import React from 'react';
import { Video, Thermometer, Lightbulb } from 'lucide-react';

interface HotspotProps {
  top: string;
  left: string;
  label?: string;
  color?: string;
  active?: boolean;
  status?: string;
  locked?: boolean;
  content?: {
    temp: string;
    light: string;
    image: string;
  }
}

export const Hotspot: React.FC<HotspotProps> = ({
  top, left, label, color = "bg-white", active = false, status, locked, content
}) => {
  const [isHovered, setIsHovered] = React.useState(false);


  return (
    <div
      className="absolute group"
      style={{ top, left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center size-8 cursor-pointer">
        {active && (
          <>
            <div className="absolute size-full rounded-full bg-white opacity-20 animate-ping"></div>
            <div className="absolute size-full rounded-full bg-white/10 scale-150"></div>
          </>
        )}
        {!active && (
           <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_2s_ease-in-out_infinite]"></div>
        )}

        <div className={`relative size-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] ${color} ${locked ? 'bg-primary' : ''}`}></div>

        {locked && (
           <div className="absolute -right-1 -top-1 size-3 bg-red-500 rounded-full border-2 border-[#111621] flex items-center justify-center">
             <span className="block size-1 bg-white rounded-full"></span>
           </div>
        )}
      </div>

      {active && content && (
        <React.Fragment>
            <div className="absolute left-4 top-4 w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent rotate-[-45deg] origin-left"></div>
            <div className="absolute left-10 top-[-80px] w-64 glass-panel p-4 rounded-xl shadow-2xl transition-all duration-300 transform z-20 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none">Living Room</h3>
                        <p className="text-primary text-[10px] font-bold mt-1 tracking-wider uppercase">Active Zone</p>
                    </div>
                    <Video className="text-white/60" size={18} />
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Thermometer size={16} />
                            <span>{content.temp}</span>
                        </div>
                        <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-primary"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Lightbulb size={16} />
                            <span>{content.light}</span>
                        </div>
                        <div className="text-[10px] text-white/40 font-medium">Scene: Evening</div>
                    </div>
                </div>
                <div className="mt-3 w-full h-20 rounded-lg bg-cover bg-center opacity-80 border border-white/5" style={{ backgroundImage: `url('${content.image}')` }}></div>
            </div>
        </React.Fragment>
      )}

      {!active && label && (
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 whitespace-nowrap z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="text-white text-xs font-bold">{label}</span>
                {status ? (
                    <span className={`text-[10px] ${status === 'Locked' ? 'text-red-400' : 'text-gray-400'}`}>{status}</span>
                ) : (
                    <span className={`size-1.5 rounded-full ${color}`}></span>
                )}
            </div>
        </div>
      )}
    </div>
  );
};
