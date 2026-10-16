import { Link } from "react-router";
function Documents() {
  return (
    <div>
      <div className=" p-4">
        <Link to="/">
          <button className="cursor-pointer bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>
      </div>
      {/* Documents Div */}
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-['Poppins'] text-lg md:text-xl mt-3 text-[#1d4ed8] font-bold  max-w-2xl mx-auto">
          Documents you must have ready to Apply
        </p>
        <ol className="list-decimal list-inside text-green-700 font-semibold">
          <li>Non-criminal record Certificate</li>
          <li>Health Examination Certificate</li>
          <li>Study plan</li>
          <li>Resume/CV: Keep it to 1–2 pages.</li>
          <li>Cover Letter</li>
          <li>Certifications</li>
          <li>
            Transcripts: Official records of your grades from previous
            institutions.
          </li>
          <li>Statement of Purpose (SOP): Your "Why me?" essay.</li>
          <li>
            Letters of Recommendation (LOR): Usually 2–3 from former professors
            or supervisors.
          </li>
          <li>
            Valid Passport: Must usually be valid for at least 6 months beyond
            your stay.
          </li>
          <li>
            Passport-Sized Photos: Most require a white background and specific
            dimensions (e.g., 2x2 inches).
          </li>
          <li>
            Proof of Funds: 3–6 months of bank statements to prove you won't run
            out of cash.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Documents;
