import { Link } from "react-router";
const Donate = () => {
  return (
    <div>
      <div className=" p-4">
        <Link to="/">
          <button className="cursor-pointer bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>

        {/* Donate Us Section */}
        <section className="py-16 px-6 lg:px-20 text-slate-800 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
              Support A Student's Education
            </h2>
            <p className="font-[poppins] text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your donations keep this platform running! We use these funds to
              pay server costs and help completely underprivileged students
              submit their scholarship applications for free.
            </p>

            {/* Donation Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Card 1: Mobile Wallets */}
              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-slate-100 ">
                <div className="text-xl font-bold text-indigo-500 mb-5 flex justify-center items-center gap-2">
                  📱 Mobile Wallets
                </div>
                <div className=" text-slate-600 text-sm">
                  <p>
                    🟢{" "}
                    <strong className="text-slate-800">
                      EasyPaisa / JazzCash:
                    </strong>
                  </p>
                  <p className="bg-slate-50 p-2 rounded font-mono text-indigo-600 font-bold tracking-wide">
                    +92 309 9620124
                  </p>
                  <p className="text-xs text-slate-500">
                    Account Title: Raham Ali
                  </p>
                </div>
              </div>

              {/* Card 2: Share Proof */}
              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold text-indigo-500 mb-4">
                    📩 Share Receipt
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    After sending your donation, please drop a screenshot or
                    transaction ID to our email so we can update our logs and
                    thank you!
                  </p>
                </div>
                <a
                  href="mailto:rkdeveloper34@://gmail.com"
                  className="text-xs font-semibold text-indigo-600 hover:underline block mt-4 break-all">
                  rkdeveloper34@gmail.com
                </a>
              </div>
            </div>

            {/* Note Footer */}
            <p className="mt-12 text-xs text-slate-600 italic">
              Important Notes:
              <br />
              <span>1. </span>Every single penny is strictly utilized for
              structural development and educational support. Thank you for your
              kindness!
              <br />
              <span>2. </span> This is just your support to work on this
              platform, not Zakat !!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;
