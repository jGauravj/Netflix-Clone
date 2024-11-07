import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative">
        <img
          src={hero_banner}
          alt="hero_banner"
          className="w-full hero_banner "
        />
        <div className=" absolute w-full pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt="hero_title"
            className=" w-[90%] max-w-[420px] mb-[30px]"
          />
          <p className="max-w-[700px] text-lg mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-3 mb-[50px]">
            <button className=" gap-2 text-base font-semibold bg-white rounded-md cursor-pointer text-black items-center border-none outline-none py-2 px-5 inline-flex hover:bg-[#ffffffbf] transition-all ease-linear">
              <img src={play_icon} alt="play_icon" className="w-6" /> Play
            </button>
            <button className=" gap-2 text-base font-semibold bg-[#6d6d6eb3] rounded-md cursor-pointer items-center border-none outline-none py-2 px-5 inline-flex hover:bg-[#6d6d6e66] transition-all ease-linear">
              <IoIosInformationCircleOutline size={24} className="text-white" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-[6%]">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Pics for You"}/>

      </div>
    </div>
  );
};

export default Home;
