import { ReactNode } from "react";

const BodyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="py-10 pl-10 pr-5">{children}</div>;
};

export default BodyContainer;
