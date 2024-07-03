import { ReactNode } from "react";

const HeadContainer = ({ children }: { children: ReactNode }) => {
  return <div className="px-5">{children}</div>;
};

export default HeadContainer;
