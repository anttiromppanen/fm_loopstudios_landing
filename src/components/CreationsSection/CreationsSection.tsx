import CreationItem from "./CreationItem";

function CreationsSection() {
  return (
    <div className="mt-24 md:mt-44">
      <div className="flex w-full justify-center md:justify-between">
        <h3 className="font-josefinSans text-3xl md:text-5xl">OUR CREATIONS</h3>
        <button
          type="button"
          className="
            hidden border-2 border-userVeryDarkGray px-10 tracking-[0.3em]
           hover:bg-black hover:text-white md:block"
        >
          SEE ALL
        </button>
      </div>
      <div
        className="
        mt-14 grid auto-rows-[120px] gap-y-6 md:mt-20 md:auto-rows-[450px] 
        md:grid-cols-2 md:gap-4
        lg:grid-cols-4 lg:gap-7"
      >
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.EARTH}
          text="DEEP EARTH"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.ARCADE}
          text="NIGHT ARCADE"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.SOCCER}
          text="SOCCER TEAM VR"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.GRID}
          text="THE GRID"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.FROM_ABOVE}
          text="FROM UP ABOVE VR"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.POCKET_BOREALIS}
          text="POCKET BOREALIS"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.CURIOSITY}
          text="THE CURIOSITY"
        />
        <CreationItem
          bgVariant={CreationItem.BG_VARIANT.FISHEYE}
          text="MAKE IT FISHEYE"
        />
      </div>
      <div className="mt-8 flex w-full justify-center md:hidden">
        <button
          type="button"
          className="border-2 border-userVeryDarkGray px-10 py-2 tracking-[0.3em] active:bg-black active:text-white"
        >
          SEE ALL
        </button>
      </div>
    </div>
  );
}

export default CreationsSection;
