import { FunctionComponent, PropsWithChildren } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
