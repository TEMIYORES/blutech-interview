import { createContext, useContext } from "react";
import { ApiContextType } from "../utilities/Types";

/**
 * Create a React context with an optional default value of undefined.
 */
export const ApiContext = createContext<ApiContextType | undefined>(undefined);

/**
 * Custom hook to access the ApiContext.
 *
 * This hook provides the current context value of ApiContext. If used outside
 * of a ApiContext.Provider, it will throw an error to alert the developer.
 *
 * @returns {ApiContextType} The current context value.
 * @throws {Error} If the hook is used outside of a ApiContext.Provider.
 */

export const useApiContext = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApiContext must be used within a ApiContext.Provider");
  }
  return context;
};
