import smwImg from "../assets/imgs/smw.jpg";

import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 h-24 flex justify-center"
    >
      <div className="flex items-center gap-2">
        <img className="h-12" src={smwImg} alt="" />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide">
          SpecialMusicWorld
        </h1>
      </div>
    </div>
  );
};
