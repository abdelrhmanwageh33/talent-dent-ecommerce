import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
} from "lucide-react";

export default function page() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#06111F]">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#f3fbfc] to-white px-4 py-12 dark:border-gray-800 dark:from-[#071c29] dark:to-[#06111F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-[#047484]">
              Contact Us
            </span>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              We&apos;d Love to{" "}
              <span className="text-[#047484]">Hear From You</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400">
              Have a question about our products or need help with your
              order? Our team is here to help you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Left Side */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              Whether you have a question about a product, an order, or
              anything else, feel free to reach out to us.
            </p>

            {/* Contact Cards */}
            <div className="mt-7 space-y-4">

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#b7e5e9] dark:border-gray-700 dark:bg-[#0b1825]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8f7f8] text-[#047484]">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    +20 100 000 0000
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Available during working hours
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#b7e5e9] dark:border-gray-700 dark:bg-[#0b1825]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8f7f8] text-[#047484]">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    info@talentdent.com
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    We&apos;ll reply as soon as possible
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#b7e5e9] dark:border-gray-700 dark:bg-[#0b1825]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8f7f8] text-[#047484]">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Cairo, Egypt
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Visit us at our store
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#b7e5e9] dark:border-gray-700 dark:bg-[#0b1825]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8f7f8] text-[#047484]">
                  <Clock size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Working Hours
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Saturday - Thursday
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-[#0b1825]">

              <div className="mb-7">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Fill out the form below and we&apos;ll get back to you.
                </p>
              </div>

              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#047484] focus:ring-1 focus:ring-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#047484] focus:ring-1 focus:ring-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#047484] focus:ring-1 focus:ring-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What can we help you with?"
                    className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#047484] focus:ring-1 focus:ring-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#047484] focus:ring-1 focus:ring-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#047484] px-6 text-sm font-medium text-white transition hover:bg-[#036471] sm:w-auto"
                >
                  <Send size={17} />
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#047484] px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Need Help Choosing the Right Product?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Our team can help you find the right dental supplies for your
            clinic and answer any questions you may have.
          </p>

          <button
            type="button"
            className="mt-5 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-[#047484] transition hover:bg-gray-100"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </main>
  );
}