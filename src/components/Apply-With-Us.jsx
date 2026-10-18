import { Link } from "react-router";

const apply_with_us = () => {
  return (
    <div>
      <div className=" p-4">
        <Link to="/">
          <button className="cursor-pointer bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>
      </div>

      {/* Application Page */}
      <section className=" py-16 px-6 lg:px-20 text-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            Let Us Handle Your Scholarship Application
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            We take the stress out of paperwork. Our team will manually submit
            your profile to official scholarship portals flawlessly.
          </p>
          {/* Request Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 max-h-fit">
            <div className="text-xl font-bold text-indigo-500 mb-2">
              Simple Request
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Provide your academic records and documents after sending your
              service payment of just 100 PKR.
            </p>
          </div>
          <br />
          {/* Steps Grid */}
          <div className="flex justify-center items-center gap-4 flex-wrap flex-row ">
            {/* Documents Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 h-full flex flex-col justify-between max-w-85">
              <div>
                <div className="text-xl font-bold text-indigo-500 mb-2">
                  Your Documents
                </div>

                <div className="text-slate-600 text-sm leading-relaxed mb-3">
                  Provide your academic records and documents via email to:{" "}
                  <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRrrrkshmGVhMqHvSPHKXWQflZqjSflmDGdnlQlknrBkJSpdlrSbwQDZFBtkfGGtTLGQCS"
                    target="_blank"
                    className="text-indigo-600 font-semibold hover:underline block mt-1 break-all">
                    rkdeveloper34@gmail.com
                  </a>
                </div>
              </div>
              {/* i@w#b$f%a&g*** */}
              <div className="flex gap-2 text-rose-500 text-[13px] font-semibold">
                Important: Please provide all documents in PDF format as
                mentioned in our "Documents for Apply" section.
              </div>
            </div>

            {/* Important Instructions Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 max-w-85">
              <div className="text-xl font-bold text-indigo-500 mb-4">
                Important Instructions
              </div>
              <ul className="text-slate-600 text-sm space-y-3 list-none">
                <li className="flex gap-2">
                  <span className="font-bold text-indigo-500">1.</span>
                  <span>
                    Send your payment to <br />{" "}
                    <strong className="text-slate-800">+92 309 9620124</strong>{" "}
                    via JazzCash or EasyPaisa.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-indigo-500">2.</span>
                  <span>
                    We will only apply for the specific scholarships you mention
                    in your email.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-indigo-500">3.</span>
                  <span>
                    We will contact you directly through your provided email
                    address.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-indigo-500">4.</span>
                  <span>
                    Please email us your payment screenshot as proof of deposit.
                  </span>
                </li>
                <li className="flex gap-2 text-rose-500 font-medium">
                  <span className="font-bold">•</span>
                  <span>
                    Important: Please do not call the provided payment number.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="mt-12 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRrrrkshmGVhMqHvSPHKXWQflZqjSflmDGdnlQlknrBkJSpdlrSbwQDZFBtkfGGtTLGQCS"
              target="_blank">
              Start Your Application Now
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default apply_with_us;
