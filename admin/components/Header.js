import { useState } from "react";
// Icons
import {
  BiMenuAltRight,
  BiHome,
  BiColumns,
  BiChevronDown,
} from "react-icons/bi";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className="mobile-menu md:hidden relative">
      <div className="mobile-menu-bar">
        <a href="#" className="flex mr-auto">
          <img
            alt=""
            className="w-6"
            src="http://rubick.left4code.com/dist/images/logo.svg"
          />
        </a>
        <a onClick={toggleNav} href="#" id="mobile-menu-toggler">
          <BiMenuAltRight className="w-8 h-8 text-white transform" />
        </a>
      </div>
      <ul
        className={
          mobileNav ? "border-t border-white/[0.08] py-5 topNav" : "hidden"
        }
      >
        <li>
          <a href="" className="menu menu--active">
            <div className="menu__icon">
              <BiHome />
            </div>
            <div className="menu__title">Dashboard</div>
          </a>
        </li>
        <li>
          <a onClick={toggleClass} href="#" className="menu">
            <div className="menu__icon">
              <BiColumns />
            </div>
            <div className="menu__title">
              Pages
              <BiChevronDown className="menu__sub-icon " />
            </div>
          </a>
          <ul className={isActive ? "menu__sub-open topNav" : "hidden"}>
            <li>
              <a href="" className="menu menu--active">
                <div className="menu__icon">
                  <i data-lucide="activity"></i>
                </div>
                <div className="menu__title">Side Menu</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
