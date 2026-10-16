import { Link } from "react-router";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" p-4">
        <Link to="/">
          <button className="bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>
      </div>
      <h1>Thanks for Contacting Us</h1>
    </div>
  );
};

export default About;
