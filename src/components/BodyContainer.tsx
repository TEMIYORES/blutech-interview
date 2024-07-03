import { ReactNode } from "react";

const BodyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="p-10">{children}</div>;
};

export default BodyContainer;
