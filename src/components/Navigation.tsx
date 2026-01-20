import React from 'react';
import { Screen } from '../types';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full glass-panel shadow-2xl">
        {Object.values(Screen).map((screen) => (
          <button
            key={screen}
            onClick={() => onNavigate(screen)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              currentScreen === screen
                ? 'bg-white text-bg-dark shadow-lg scale-105 font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {screen}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
