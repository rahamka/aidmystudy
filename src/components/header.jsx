import myLogo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-blue-200 h-14 font-bold flex justify-between pl-2 pr-2 ">
      <div className="w-50 h-full rounded-2xl flex items-center">
        <a href="https://aidmystudy.netlify.app/">
          <img className="bg-transparent" src={myLogo} alt="" />
        </a>
      </div>

      <div className="flex items-center ">
        <li className="list-none flex gap-6 max-md:hidden ">
          <a href="#">Documents for Apply</a>
          {/* <a href="#">UniInfo</a> */}
          <a href="#">Foreign Scholarships</a>
          <a href="#">Contact Us</a>
          <a
            href="#"
            className="bg-sky-700 pl-1 pr-1 rounded-sm text-white font-semibold ">
            Donate Me
          </a>
        </li>
      </div>
    </header>
  );
}

export default Header;
