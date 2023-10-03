enum BgVariants {
  EARTH,
  ARCADE,
  SOCCER,
  GRID,
  FROM_ABOVE,
  POCKET_BOREALIS,
  CURIOSITY,
  FISHEYE,
}

const variantStyles = {
  EARTH: "bg-userCreations1MobileBg md:bg-userCreations1DesktopBg",
  ARCADE: "bg-userCreations2MobileBg md:bg-userCreations2DesktopBg",
  SOCCER: "bg-userCreations3MobileBg md:bg-userCreations3DesktopBg",
  GRID: "bg-userCreations4MobileBg md:bg-userCreations4DesktopBg",
  FROM_ABOVE: "bg-userCreations5MobileBg md:bg-userCreations5DesktopBg",
  POCKET_BOREALIS: "bg-userCreations6MobileBg md:bg-userCreations6DesktopBg",
  CURIOSITY: "bg-userCreations7MobileBg md:bg-userCreations7DesktopBg",
  FISHEYE: "bg-userCreations8MobileBg md:bg-userCreations8DesktopBg",
};

const VARIANT_MAPS: Record<BgVariants, string> = {
  [BgVariants.EARTH]: variantStyles.EARTH,
  [BgVariants.ARCADE]: variantStyles.ARCADE,
  [BgVariants.SOCCER]: variantStyles.SOCCER,
  [BgVariants.GRID]: variantStyles.GRID,
  [BgVariants.FROM_ABOVE]: variantStyles.FROM_ABOVE,
  [BgVariants.POCKET_BOREALIS]: variantStyles.POCKET_BOREALIS,
  [BgVariants.CURIOSITY]: variantStyles.CURIOSITY,
  [BgVariants.FISHEYE]: variantStyles.FISHEYE,
};

interface Props {
  bgVariant: BgVariants;
  text: string;
}

function CreationItem({ bgVariant, text }: Props) {
  const baseStyles = "relative bg-cover bg-no-repeat cursor-pointer group";
  const finalStyles = `${baseStyles} ${VARIANT_MAPS[bgVariant]}`;

  return (
    <div className={finalStyles}>
      <div
        className="
          absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black to-transparent 
          opacity-70 group-hover:bg-white group-hover:bg-none group-hover:opacity-60
          md:bg-gradient-to-t"
      />
      <p
        className="
        absolute bottom-5 left-6 w-[40%] font-josefinSans text-2xl leading-6 text-white
        group-hover:font-bold group-hover:text-black md:text-3xl lg:bottom-8 lg:left-10 lg:w-2/3"
      >
        {text}
      </p>
    </div>
  );
}

CreationItem.BG_VARIANT = BgVariants;

export default CreationItem;
