import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import PagesService from "../services/PagesService"; // Assuming you have a service to fetch pages
import { MyElement } from "../models/MyElement";
import { useCurrentPage } from "./CurrentPageProvider";

interface ElementsContextProps {
  currentPageElements: MyElement[] | null;
  setCurrentPageElements: React.Dispatch<
    React.SetStateAction<MyElement[] | null>
  >;
}

export const ElementsContext = createContext<ElementsContextProps | undefined>(
  undefined
);

export const ElementsProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const [currentPageElements, setCurrentPageElements] = useState<
    MyElement[] | null
  >(null);
  const { pageId } = useCurrentPage(); // Import this hook from wherever it lives

  useEffect(() => {
    const fetchElements = async () => {
      if (pageId !== null) {
        const elements = await PagesService.getElementsByPageId(pageId);
        setCurrentPageElements(elements);
      }
    };
    fetchElements();
  }, [pageId]);

  return (
    <ElementsContext.Provider
      value={{ currentPageElements, setCurrentPageElements }}
    >
      {children}
    </ElementsContext.Provider>
  );
};

export const useElementsContext = () => {
  const context = useContext(ElementsContext);
  if (!context) {
    throw new Error("useElementsContext must be used within ElementsProvider");
  }
  return context;
};
