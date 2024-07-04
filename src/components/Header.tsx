import logo from "../assets/img/logo.png";
import SearchInput from "./SearchInput";
import notificationIcon from "../assets/img/notification.png";
import profileIcon from "../assets/img/profile.png";
import arrowDownIcon from "../assets/img/arrow-down.png";
import HeadContainer from "./HeadContainer";

/**
 * Header component that displays the logo, search input, and user notifications/profile.
 *
 * This component arranges the header elements in a grid layout and provides a structure
 * for the header section of the application.
 *
 * @returns {JSX.Element} The rendered header component.
 */

const Header = (): JSX.Element => {
  return (
    <div className="bg-headerbg">
      <HeadContainer>
        <div className="grid grid-cols-4 justify-between items-center">
          <div className="py-5 w-fit pr-20 border-r border-[#eeeeee]">
            <img src={logo} alt="Logo" width="150px" />
          </div>
          <SearchInput />
          <div className="col-span-2 flex gap-4 justify-end items-center">
            <div className="overflow-hidden w-[34px] cursor-pointer">
              <img src={notificationIcon} alt="Notifications" />
            </div>
            <div className="overflow-hidden w-[34px] cursor-pointer rounded-full">
              <img src={profileIcon} alt="Profile" />
            </div>
            <p>Deku</p>
            <div className="overflow-hidden w-[10px] cursor-pointer">
              <img src={arrowDownIcon} alt="Arrow Down" />
            </div>
          </div>
        </div>
      </HeadContainer>
    </div>
  );
};

export default Header;
