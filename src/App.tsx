import React, { useState } from 'react';
import { Screen } from './types';
import Navigation from './components/Navigation';
import HeroScreen from './screens/HeroScreen';
import LogicScreen from './screens/LogicScreen';
import LandingScreen from './screens/LandingScreen';
import DashboardScreen from './screens/DashboardScreen';
import ContextScreen from './screens/ContextScreen';
import OverviewScreen from './screens/OverviewScreen';
import { SpatialScreen } from './screens/SpatialScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Landing);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Landing:
        return <LandingScreen onNavigate={setCurrentScreen} />;
      case Screen.Hero:
        return <HeroScreen />;
      case Screen.Dashboard:
        return <DashboardScreen />;
      case Screen.Logic:
        return <LogicScreen />;
      case Screen.Context:
        return <ContextScreen />;
      case Screen.Overview:
        return <OverviewScreen />;
      case Screen.Spatial:
        return <SpatialScreen />;
      default:
        return <LandingScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {renderScreen()}
      {currentScreen !== Screen.Landing && (
        <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
};

export default App;
