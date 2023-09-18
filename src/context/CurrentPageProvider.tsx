import React, { ReactNode, createContext, useContext, useState } from "react";

interface CurrentPageContextProps {
  pageId: number | null;
  setPageId: (pageId: number) => void;
}

export const CurrentPageContext = createContext<
  CurrentPageContextProps | undefined
>(undefined);

export const useCurrentPage = () => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }
  return context as CurrentPageContextProps;
};

interface CurrentPageProviderProps {
  children: ReactNode;
}

export const CurrentPageProvider: React.FC<CurrentPageProviderProps> = ({
  children,
}) => {
  const [pageId, setPageId] = useState<number | null>(null);

  return (
    <CurrentPageContext.Provider value={{ pageId, setPageId }}>
      {children}
    </CurrentPageContext.Provider>
  );
};
