import React, { createContext, useState, useContext, ReactNode } from 'react';

type PanelType = 'ElementEditor' | 'DatabasePages';
type PanelContextProps = { activePanel: PanelType; setActivePanel: React.Dispatch<React.SetStateAction<PanelType>> };
const PanelContext = createContext<PanelContextProps | undefined>(undefined);

export const PanelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePanel, setActivePanel] = useState<PanelType>('ElementEditor');

  return (
    <PanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </PanelContext.Provider>
  );
};

export const usePanelContext = () => {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error('usePanelContext must be used within a PanelProvider');
  }
  return context;
};
