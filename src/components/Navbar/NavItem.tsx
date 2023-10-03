import { ReactNode } from "react";

function NavItem({ children }: { children: ReactNode }) {
  return (
    <li className="group relative">
      {children}
      <div
        className="
            absolute -bottom-3 left-1/2 h-[0.125rem] w-1/2 -translate-x-1/2 scale-x-0
            rounded-full bg-white opacity-0 transition-all duration-300
            group-hover:scale-x-100 group-hover:opacity-100"
      />
    </li>
  );
}

export default NavItem;
