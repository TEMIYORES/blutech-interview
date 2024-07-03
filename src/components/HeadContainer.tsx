import { ReactNode } from "react";

const HeadContainer = ({ children }: { children: ReactNode }) => {
  return <div className="pl-5 pr-10">{children}</div>;
};

export default HeadContainer;
