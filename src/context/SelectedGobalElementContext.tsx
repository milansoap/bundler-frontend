import React, { createContext, useContext, useState, ReactNode } from "react";
import { MyElement } from "../models/MyElement";
interface IGlobalElementContext {
  selectedGlobalElement: MyElement | null;
  setSelectedGlobalElement: React.Dispatch<
    React.SetStateAction<MyElement | null>
  >;
}

const GlobalElementContext = createContext<IGlobalElementContext | undefined>(
  undefined
);

export const useGlobalElement = () => {
  const context = useContext(GlobalElementContext);
  if (!context) {
    throw new Error(
      "useGlobalElement must be used within a GlobalElementProvider"
    );
  }
  return context;
};

interface IProviderProps {
  children: ReactNode;
}

export const GlobalElementProvider: React.FC<IProviderProps> = ({
  children,
}) => {
  const [selectedGlobalElement, setSelectedGlobalElement] =
    useState<MyElement | null>(null);

  return (
    <GlobalElementContext.Provider
      value={{ selectedGlobalElement, setSelectedGlobalElement }}
    >
      {children}
    </GlobalElementContext.Provider>
  );
};
