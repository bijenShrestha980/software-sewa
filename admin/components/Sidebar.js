import { useState } from "react";

// Icons
import {
  BiGroup,
  BiColumns,
  BiIdCard,
  BiChevronDown,
  BiHome,
  BiHomeAlt,
  BiCart,
} from "react-icons/bi";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="side-nav">
      <a href="#" className="intro-x flex items-center pl-5 pt-4">
        <img
          alt="Midone - HTML Admin Template"
          className="w-6"
          src="http://rubick.left4code.com/dist/images/logo.svg"
        />
        <span className="hidden xl:block text-white text-lg ml-3">Admin</span>
      </a>
      <div className="side-nav__devider my-6"></div>
      {/*  */}
      <ul>
        <li>
          <a href="" className="side-menu side-menu--active">
            <div className="side-menu__icon">
              <BiHome className="w-5 h-5" />
            </div>
            <div className="side-menu__title">
              Dashboard
              <div className="side-menu__sub-icon transform rotate-180"></div>
            </div>
          </a>
        </li>
        <li className="side-nav__devider my-6"></li>
        <li>
          <a
            onClick={toggleClass}
            href="#"
            className="side-menu cursor-pointer"
          >
            <div className="side-menu__icon">
              <BiColumns className="w-5 h-5" />
            </div>
            <div className="side-menu__title">
              Pages
              <div className="side-menu__sub-icon ">
                <BiChevronDown className="w-5 h-5" />
              </div>
            </div>
          </a>
          <ul className={isActive ? "side-menu__sub-open" : null}>
            <li>
              <a href="crud-data-list.html" className="side-menu">
                <div className="side-menu__icon">
                  <BiHomeAlt />
                </div>
                <div className="side-menu__title">Home</div>
              </a>
            </li>
            <li>
              <a href="crud-form.html" className="side-menu">
                <div className="side-menu__icon">
                  <BiCart />
                </div>
                <div className="side-menu__title">Product</div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="" className="side-menu">
            <div className="side-menu__icon">
              <BiGroup className="w-5 h-5" />
            </div>
            <div className="side-menu__title">
              Users
              <div className="side-menu__sub-icon "></div>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="side-menu">
            <div className="side-menu__icon">
              <BiIdCard className="w-5 h-5" />
            </div>
            <div className="side-menu__title">
              Profile
              <div className="side-menu__sub-icon "></div>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
