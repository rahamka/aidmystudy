import { useState } from "react";
import myLogo from "../assets/logo.png";

function Header() {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem("userClick") === "Yes",
  );

  const toggleBurger = () => {
    const nextStatus = !isClicked;
    setIsClicked(nextStatus);
    localStorage.setItem("userClick", nextStatus ? "Yes" : "No");
  };

  return (
    <header className="bg-blue-200 h-14 font-bold flex justify-between pl-2 pr-2 relative">
      <div className="max-[425px]:w-30 w-50 h-full rounded-2xl flex items-center">
        <a href="https://aidmystudy.netlify.app/">
          <img src={myLogo} alt="Logo" />
        </a>
      </div>

      <p
        id="burger-icon"
        onClick={toggleBurger}
        style={{ transition: "transform 0.3s ease" }}
        className={`max-[750px]:block fixed right-4 top-3 z-50 hidden text-3xl cursor-pointer ${
          isClicked ? "rotate-180" : "rotate-0"
        }`}>
        ≡
      </p>

      <nav className="flex items-center justify-center">
        <ul
          className={`
            flex gap-6 items-center transition-all duration-500 ease-in-out
            max-[750px]:flex-col max-[750px]:fixed max-[750px]:top-0 max-[750px]:bg-blue-100 
            max-[750px]:h-screen max-[750px]:w-62.5 max-[750px]:pt-20 
            ${isClicked ? "max-[750px]:right-0" : "max-[750px]:-right-full max-[900px]:text-[14px]"}
          `}>
          <li className="list-none flex gap-6 max-[750px]:flex-col max-[750px]:items-center">
            <a href="#">Documents for Apply</a>
            <a href="#">Foreign Scholarships</a>
            <a href="#">Apply with Us</a>
            <a
              href="#"
              className="bg-sky-700 px-3 py-1 rounded-sm text-white font-semibold">
              Donate Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
