import { ReactNode } from "react";

enum NavVariant {
  MAIN,
  FOOTER,
}

const variantStyles = {
  MAIN: "hidden gap-x-8 text-lg opacity-90 md:flex",
  FOOTER: "flex flex-col md:flex-row gap-y-5 text-white opacity-90 gap-x-7",
};

const VARIANT_MAPS: Record<NavVariant, string> = {
  [NavVariant.MAIN]: variantStyles.MAIN,
  [NavVariant.FOOTER]: variantStyles.FOOTER,
};

function DesktopNav({
  variant,
  children,
}: {
  variant: NavVariant;
  children: ReactNode;
}) {
  const baseStyles = "text-white opacity-90";

  return (
    <nav>
      <ul className={`${baseStyles} ${VARIANT_MAPS[variant]}`}>{children}</ul>
    </nav>
  );
}

DesktopNav.VARIANT = NavVariant;

export default DesktopNav;
