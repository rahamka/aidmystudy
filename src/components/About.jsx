import ProfileImg from "../assets/Profile.jpeg";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" p-4">
        <Link to="/">
          <button className="cursor-pointer bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>

        {/* Contact Us */}
        <section className="py-16 px-6 lg:px-20 text-slate-800 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Our Mission */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                About AidMyStudy
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                AidMyStudy is a student-centric platform built to bridge the gap
                between deserving students and global scholarships. Our mission
                is to simplify complex portals so every talented student can
                secure their future without technical stress.
              </p>
            </div>

            {/* Developer Profile Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 max-w-xl mx-auto text-center md:text-left md:flex items-center gap-8">
              {/* Avatar / Placeholder for your picture */}
              <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto md:mx-0 mb-4 md:mb-0 shrink-0">
                <img className="rounded-[10px]" src={ProfileImg} alt="" />
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  Raham Ali
                </h3>
                <p className="text-indigo-500 font-medium text-sm mb-3">
                  Founder & Lead Developer
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  I am a passionate developer working on creating digital
                  solutions that make education accessible. You can connect with
                  me or review my work through my social networks.
                </p>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">
                  <a
                    href="www.linkedin.com/in/raham-kalhoro"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    💼 LinkedIn
                  </a>

                  <a
                    href="https://github.com/rahamka"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    💻 GitHub
                  </a>

                  <a
                    href="https://x.com/RahamKalhoro"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    🐦 Twitter / X
                  </a>

                  <a
                    href="https://wa.me/923099620124"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
