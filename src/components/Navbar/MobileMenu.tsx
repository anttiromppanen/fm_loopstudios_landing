import { Dispatch, SetStateAction } from "react";
import logo from "../../assets/images/logo.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import Container from "../Container";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileMenu({ open, setOpen }: Props) {
  return (
    <div
      className={`fixed top-0 z-50 h-full w-full bg-black transition-all duration-300 ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <Container>
        <div className="mt-10 flex w-full justify-between">
          <img src={logo} alt="Logo" />
          <button type="button" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <nav className="mt-40">
          <ul className="flex flex-col justify-center gap-y-6 font-josefinSans text-3xl">
            <li>
              <button type="button">ABOUT</button>
            </li>
            <li>
              <button type="button">CAREERS</button>
            </li>
            <li>
              <button type="button">EVENTS</button>
            </li>
            <li>
              <button type="button">PRODUCTS</button>
            </li>
            <li>
              <button type="button">SUPPORT</button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default MobileMenu;
