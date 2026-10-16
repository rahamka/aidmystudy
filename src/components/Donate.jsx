import { Link } from "react-router";
const Donate = () => {
  return (
    <div>
      <div className=" p-4">
        <Link to="/">
          <button className="bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>
      </div>
      <h1>Donate Us</h1>
    </div>
  );
};

export default Donate;
