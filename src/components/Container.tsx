import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="mx-auto h-full w-full max-w-[1162px] px-6">{children}</div>
  );
}

export default Container;
