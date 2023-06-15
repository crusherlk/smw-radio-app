import smwImg from "../assets/imgs/smw.jpg";

import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div id="nav" className="h-24 flex justify-center">
      <div className="flex items-center gap-2">
        <img className="h-12" src={smwImg} alt="" />
        <h1 className="text-3xl font-bold">SpecialMusicWorld</h1>
      </div>
    </div>
  );
};
