import { useState } from "react";
import ApiContent from "./ApiContext";

const ApiContentProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState("null");
  return <ApiContent.Provider value={data}>{children}</ApiContent.Provider>;
};
