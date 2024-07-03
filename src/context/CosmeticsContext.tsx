import { createContext, useContext } from "react";
import { CosmeticsContextType } from "../utilities/Types";

export const CosmeticsContext = createContext<CosmeticsContextType | undefined>(
  undefined
);

export const useCosmeticsContext = (): CosmeticsContextType => {
  const context = useContext(CosmeticsContext);
  if (context === undefined) {
    throw new Error(
      "useCosmeticsContext must be used within a UseCosmeticsProvider"
    );
  }
  return context;
};
