import logo from "../assets/img/logo.png";
import SearchInput from "./SearchInput";
import notification from "../assets/img/notification.png";
import profile from "../assets/img/profile.png";
import arrowdown from "../assets/img/arrow-down.png";
import HeadContainer from "./HeadContainer";

const Header = () => {
  return (
    <div className="bg-headerbg">
      <HeadContainer>
        <div className="grid grid-cols-4 justify-between items-center">
          <div className="py-5 w-fit pr-20 border-r border-[#eeeeee]">
            <img src={logo} alt="logo" width="150px" />
          </div>
          <SearchInput />
          <div className="col-span-2 flex gap-4 justify-end items-center">
            <div className="overflow-hidden w-[34px] cursor-pointer">
              <img src={notification} />
            </div>
            <div className="overflow-hidden w-[34px] cursor-pointer rounded-full">
              <img src={profile} />
            </div>
            <p>Deku</p>
            <div className="overflow-hidden w-[10px] cursor-pointer">
              <img src={arrowdown} />
            </div>
          </div>
        </div>
      </HeadContainer>
    </div>
  );
};
export default Header;
