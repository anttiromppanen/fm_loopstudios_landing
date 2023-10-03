import { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import DesktopNav from "./DesktopNav";
import NavItem from "./NavItem";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-wrap justify-between text-white">
      <img src={logo} alt="Logo" className="max-h-fit max-w-fit" />
      <DesktopNav variant={DesktopNav.VARIANT.MAIN}>
        <NavItem>
          <button type="button">About</button>
        </NavItem>
        <NavItem>
          <button type="button">Careers</button>
        </NavItem>
        <NavItem>
          <button type="button">Events</button>
        </NavItem>
        <NavItem>
          <button type="button">Products</button>
        </NavItem>
        <NavItem>
          <button type="button">Support</button>
        </NavItem>
      </DesktopNav>
      <button type="button" onClick={() => setOpen(true)} className="md:hidden">
        <img src={hamburgerIcon} alt="Hamburger menu" />
      </button>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Navbar;
