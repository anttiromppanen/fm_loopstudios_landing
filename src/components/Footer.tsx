import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import DesktopNav from "./Navbar/DesktopNav";
import NavItem from "./Navbar/NavItem";

function Footer() {
  return (
    <div
      className="
      mt-24 w-full bg-black py-14 md:mt-44 md:py-11"
    >
      <div className="mx-auto flex max-w-[1162px] flex-col px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="logo"
              className="mb-8 h-[32px] w-[192px] md:mb-6"
            />
            <DesktopNav variant={DesktopNav.VARIANT.FOOTER}>
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
          </div>
        </div>
        <div>
          <ul className="mb-4 mt-10 flex items-center justify-center gap-x-5 md:mt-0 md:justify-end">
            <NavItem>
              <img
                src={facebookIcon}
                alt="Facebook"
                className="cursor-pointer"
              />
            </NavItem>
            <NavItem>
              <img
                src={twitterIcon}
                alt="Facebook"
                className="cursor-pointer"
              />
            </NavItem>
            <NavItem>
              <img
                src={pinterestIcon}
                alt="Facebook"
                className="cursor-pointer"
              />
            </NavItem>
            <NavItem>
              <img
                src={instagramIcon}
                alt="Facebook"
                className="cursor-pointer"
              />
            </NavItem>
          </ul>
          <p className="text-center text-userVeryDarkGray">
            ©2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
