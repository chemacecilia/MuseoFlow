import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ScreenType, RouteId, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/museumData';

interface MuseumContextType {
  currentScreen: ScreenType;
  selectedRoute: RouteId;
  language: LanguageCode;
  unlockedStops: number[];
  completedStops: number[];
  stop01Answer: 'A' | 'B' | 'C' | null;
  stop02Answer: 'A' | 'B' | 'C' | null;
  isPotemkinModalOpen: boolean;
  isStop02ReflectionOpen: boolean;
  isQuickMapOpen: boolean;
  goToScreen: (screen: ScreenType) => void;
  goBack: () => void;
  selectRoute: (routeId: RouteId) => void;
  setLanguage: (lang: LanguageCode) => void;
  selectStop01Answer: (answer: 'A' | 'B' | 'C') => void;
  submitStop01: () => void;
  selectStop02Answer: (answer: 'A' | 'B' | 'C') => void;
  submitStop02: () => void;
  openPotemkinModal: () => void;
  closePotemkinModal: () => void;
  openStop02Reflection: () => void;
  closeStop02Reflection: () => void;
  toggleQuickMap: () => void;
  t: (key: string) => string;
}

const MuseumContext = createContext<MuseumContextType | undefined>(undefined);

export const MuseumProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [, setScreenHistory] = useState<ScreenType[]>(['welcome']);
  const [selectedRoute, setSelectedRoute] = useState<RouteId>('conflicto');
  const [language, setLanguageState] = useState<LanguageCode>('ES');
  const [unlockedStops, setUnlockedStops] = useState<number[]>([1]);
  const [completedStops, setCompletedStops] = useState<number[]>([]);
  const [stop01Answer, setStop01Answer] = useState<'A' | 'B' | 'C' | null>(null);
  const [stop02Answer, setStop02Answer] = useState<'A' | 'B' | 'C' | null>(null);

  const [isPotemkinModalOpen, setIsPotemkinModalOpen] = useState(false);
  const [isStop02ReflectionOpen, setIsStop02ReflectionOpen] = useState(false);
  const [isQuickMapOpen, setIsQuickMapOpen] = useState(false);

  const goToScreen = (screen: ScreenType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScreenHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScreenHistory((prev) => {
      if (prev.length <= 1) {
        setCurrentScreen('welcome');
        return ['welcome'];
      }
      const nextHistory = prev.slice(0, -1);
      const prevScreen = nextHistory[nextHistory.length - 1];
      setCurrentScreen(prevScreen);
      return nextHistory;
    });
  };

  const selectRoute = (routeId: RouteId) => {
    setSelectedRoute(routeId);
    goToScreen('route-map');
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const selectStop01Answer = (ans: 'A' | 'B' | 'C') => {
    setStop01Answer(ans);
  };

  const submitStop01 = () => {
    if (!completedStops.includes(1)) {
      setCompletedStops((prev) => [...prev, 1]);
    }
    if (!unlockedStops.includes(2)) {
      setUnlockedStops((prev) => [...prev, 2]);
    }
    goToScreen('stop-01-explanation');
  };

  const selectStop02Answer = (ans: 'A' | 'B' | 'C') => {
    setStop02Answer(ans);
  };

  const submitStop02 = () => {
    if (!completedStops.includes(2)) {
      setCompletedStops((prev) => [...prev, 2]);
    }
    setIsStop02ReflectionOpen(true);
  };

  const openPotemkinModal = () => setIsPotemkinModalOpen(true);
  const closePotemkinModal = () => setIsPotemkinModalOpen(false);

  const openStop02Reflection = () => setIsStop02ReflectionOpen(true);
  const closeStop02Reflection = () => setIsStop02ReflectionOpen(false);

  const toggleQuickMap = () => setIsQuickMapOpen((prev) => !prev);

  const t = (key: string): string => {
    const langDict = TRANSLATIONS[language] || TRANSLATIONS.ES;
    return langDict[key] || TRANSLATIONS.ES[key] || key;
  };

  return (
    <MuseumContext.Provider
      value={{
        currentScreen,
        selectedRoute,
        language,
        unlockedStops,
        completedStops,
        stop01Answer,
        stop02Answer,
        isPotemkinModalOpen,
        isStop02ReflectionOpen,
        isQuickMapOpen,
        goToScreen,
        goBack,
        selectRoute,
        setLanguage,
        selectStop01Answer,
        submitStop01,
        selectStop02Answer,
        submitStop02,
        openPotemkinModal,
        closePotemkinModal,
        openStop02Reflection,
        closeStop02Reflection,
        toggleQuickMap,
        t
      }}
    >
      {children}
    </MuseumContext.Provider>
  );
};

export const useMuseum = () => {
  const context = useContext(MuseumContext);
  if (!context) {
    throw new Error('useMuseum must be used within a MuseumProvider');
  }
  return context;
};
