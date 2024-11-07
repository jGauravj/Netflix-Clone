import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between fixed py-5 px-[6%] text-sm text-[#e5e5e5] bg-gradient-to-r from-black/70 to-transparent z-20 ">
      <div className="flex items-center gap-[50px]">
        <img src={logo} alt="logo" className="w-[90px]" />
        <ul className="flex gap-5 ">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">TV Shows</li>
          <li className=" cursor-pointer">Movies</li>
          <li className=" cursor-pointer">New & Popular</li>
          <li className=" cursor-pointer">My List</li>
          <li className=" cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <img src={search_icon} alt="search_icon" className="w-5 cursor-pointer" />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className="w-5 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer relative group">
          <img src={profile_img} alt="profile-img" className=" rounded-md w-9" />
          <img src={caret_icon} alt="caret_icon" />
          <div className=" absolute right-0 top-full w-max bg-[#191919] py-4 px-5 mt-0.5 rounded-md  z-10 hidden group-hover:block transition-all ease-in-out duration-500">
            <p className=" text-sm cursor-pointer hover:underline">Sign Out</p>
          </div>
        </div>
      </div>
    </nav>  
  );
};

export default Navbar;
