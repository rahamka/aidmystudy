import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router";

const Contact = () => {
  // Formspree Hook with your unique Form ID "mgaojpoa"
  const [state, handleSubmit] = useForm("mgaojpoa");

  return (
    <div>
      {/* Top Navigation - This will ALWAYS remain visible */}
      <div className="p-4">
        <Link to="/">
          <button className="cursor-pointer bg-sky-700 hover:bg-[#1b98db] px-3 py-1 rounded-sm text-white font-semibold select-none">
            Back to Home
          </button>
        </Link>
      </div>

      <section className="py-16 px-6 lg:px-20 text-slate-800">
        <div className="max-w-3xl mx-auto">
          {/* Condition: Agar message successfully send ho jaye */}
          {state.succeeded ? (
            <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm text-center my-12">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-2">
                Message Sent!
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thank you for reaching out. We have received your message and
                will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <>
              {/* Header Content */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                  Contact Us
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Have any questions or need help with your scholarship
                  application? Drop us a message below, and we will get back to
                  you as soon as possible.
                </p>
              </div>

              {/* Clean Contact Form connected with Formspree */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-xl mx-auto">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-slate-800"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-xs text-rose-500 mt-1 block"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-slate-800"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-rose-500 mt-1 block"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-slate-800 resize-none"
                    required></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-rose-500 mt-1 block"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2">
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
