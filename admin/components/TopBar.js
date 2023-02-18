// Icons
import { useState } from "react";
import { BiBell, BiSearch, BiCreditCard, BiUserCircle } from "react-icons/bi";

const TopBar = () => {
  const [isActive, setActive] = useState(false);
  const [isOn, setOn] = useState(false);

  const toggleNotification = () => {
    setActive(!isActive);
  };
  const toggleUser = () => {
    setOn(!isOn);
  };
  return (
    <div className="top-bar">
      {/* <!-- BEGIN: Breadcrumb --> */}
      <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Application</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Dashboard
          </li>
        </ol>
      </nav>
      {/* <!-- END: Breadcrumb -->
                <!-- BEGIN: Search --> */}
      <div className="intro-x relative mr-3 sm:mr-6">
        <div className="search hidden sm:block">
          <input
            type="text"
            className="search__input form-control border-transparent"
            placeholder="Search..."
          />
          <BiSearch className="search__icon dark:text-slate-500" />
        </div>
        <a className="notification sm:hidden" href="#">
          <BiBell className="notification__icon dark:text-slate-500" />
        </a>
        <div className="search-result">
          <div className="search-result__content">
            <div className="search-result__content__title">Pages</div>
            <div className="mb-5">
              <a href="#" className="flex items-center">
                <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                  <BiBell className="w-4 h-4" />
                </div>
                <div className="ml-3">Mail Settings</div>
              </a>
              <a href="#" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                  <BiUserCircle className="w-4 h-4" />
                </div>
                <div className="ml-3">Users & Permissions</div>
              </a>
              <a href="#" className="flex items-center mt-2">
                <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                  <BiCreditCard className="w-4 h-4" />
                </div>
                <div className="ml-3">Transactions Report</div>
              </a>
            </div>
            <div className="search-result__content__title">Users</div>
            <div className="mb-5">
              <a href="#" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt=""
                    className="rounded-full"
                    src="/images/profile-5.jpg"
                  />
                </div>
                <div className="ml-3">Angelina Jolie</div>
                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                  angelinajolie@left4code.com
                </div>
              </a>
            </div>
            <div className="search-result__content__title">Products</div>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt=""
                  className="rounded-full"
                  src="/images/preview-6.jpg"
                />
              </div>
              <div className="ml-3">Apple MacBook Pro 13</div>
              <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                PC &amp; Laptop
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- END: Search -->
      <!-- BEGIN: Notifications --> */}
      <div className="intro-x dropdown mr-auto sm:mr-6">
        <div
          className="dropdown-toggle notification notification--bullet cursor-pointer"
          role="button"
          aria-expanded="true"
          onClick={toggleNotification}
        >
          <BiBell className="notification__icon dark:text-slate-500" />
        </div>
        <div
          className={
            isActive
              ? "notification-content pt-2 dropdown-menu show notification"
              : `null notification-content pt-2 dropdown-menu`
          }
        >
          <div className="notification-content__box dropdown-content">
            <div className="notification-content__title">Notifications</div>
            <div className="cursor-pointer relative flex items-center ">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt=""
                  className="rounded-full"
                  src="/images/profile-5.jpg"
                />
                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="" className="font-medium truncate mr-5">
                    Angelina Jolie
                  </a>
                  <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                    06:05 AM
                  </div>
                </div>
                <div className="w-full truncate text-slate-500 mt-0.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500
                </div>
              </div>
            </div>
            <div className="cursor-pointer relative flex items-center mt-5">
              <div className="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt=""
                  className="rounded-full"
                  src="/images/profile-3.jpg"
                />
                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
              </div>
              <div className="ml-2 overflow-hidden">
                <div className="flex items-center">
                  <a href="" className="font-medium truncate mr-5">
                    Denzel Washington
                  </a>
                  <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                    01:10 PM
                  </div>
                </div>
                <div className="w-full truncate text-slate-500 mt-0.5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END: Notifications -->
      <!-- BEGIN: Account Menu --> */}
      <div className="intro-x dropdown w-8 h-8">
        <div
          className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
          role="button"
          aria-expanded="false"
          data-tw-toggle="dropdown"
          onClick={toggleUser}
        >
          <img alt="" src="/images/profile-10.jpg" />
        </div>
        <div
          className={
            isOn ? "dropdown-menu w-56 show user" : `null dropdown-menu w-56`
          }
        >
          <ul className="dropdown-content bg-primary text-white">
            <li className="p-2">
              <div className="font-medium">Angelina Jolie</div>
              <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                DevOps Engineer
              </div>
            </li>
            <li>
              <hr className="dropdown-divider border-white/[0.08]" />
            </li>
            <li>
              <a href="#" className="dropdown-item hover:bg-white/5">
                <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item hover:bg-white/5">
                <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item hover:bg-white/5">
                <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset
                Password
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item hover:bg-white/5">
                <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help
              </a>
            </li>
            <li>
              <hr className="dropdown-divider border-white/[0.08]" />
            </li>
            <li>
              <a href="#" className="dropdown-item hover:bg-white/5">
                <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i>{" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- END: Account Menu --> */}
    </div>
  );
};

export default TopBar;
