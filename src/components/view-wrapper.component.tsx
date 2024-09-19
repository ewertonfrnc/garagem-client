import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function ViewWrapper({ children }: Props) {
  return <div className="w-full overflow-auto px-1">{children}</div>;
}
