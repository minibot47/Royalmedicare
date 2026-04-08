
import Link from "next/link";

const quickLinks = ["Home", "About Us", "Services", "Contact Us"];

const services = [
  "Assisted Living",
  "Healing Therapy",
  "Memory Care",
  "Rejuvenation Ritual",
  "Short-Term Care",
];

export default function Footer() {
  return (
    <footer className="bg-[#273A29] rounded-2xl overflow-hidden pt-10 pb-5 px-5">
      <div className="max-w-[1440px] mx-auto py-12 px-10 flex flex-col gap-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1fr_1.3fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#E2A76F]">
                <img src="/logos/Logo.png" alt="logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-jakarta text-3xl text-white font-semibold">
                Royal <span className="font-light font-serif italic">Medicare</span>.
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed mb-6 max-w-[200px]">
              Compassionate elderly care in Ikorodu, Lagos.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" /> },
                { href: "#", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                { href: "#", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { href: "#", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C97B63] hover:text-[#C97B63] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>


          {/* Get In Touch */}
          <div className="lg:pl-6">
            <h4 className="text-white font-semibold text-2xl mb-5">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3  flex-col">
                <span className="text-lg text-white leading-relaxed">
                  Ikorodu, Lagos <br/> +234707 313 1450

                </span>
              </li>
              <li className="flex items-start gap-3  flex-col">
                <h2 className="text-2xl text-white font-semibold">Email Address</h2>
                <span className="text-lg text-white leading-relaxed">
                  hello@royalmedicare.xyz
                </span>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div className=" lg:pl-6">
            <h4 className="text-white text-2xl font-semibold mb-5">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <h2 className="h-2 w-2 rounded-full bg-[#E2A76F]"></h2>
                  <Link href="#" className="text-lg text-white hover:text-[#C97B63] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter*/}
          <div className="lg:pl-6">
            <h4 className="text-white font-semibold text-2xl mb-5">Newsletter Subscription</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3  flex-col">
                <span className="text-lg text-white leading-relaxed">
                Stay Updated With Health Tips & Services
                </span>
              </li>
              <li className="flex border-[0.1px] border-gray-600 bg-[#273A29] rounded-[8px] items-center justify-between p-1 gap-2">
                <input type="email" placeholder="Enter your mail" className="p-3 bg-transparent w-[85%]  rounded-[8px] outline-none text-white text-lg" />
                <div className=" bg-[#E2A76F] h-full w-[15%] p-2 rounded-[8px]">
                  <img src="/icons/newsletter.svg" alt="newsletter icon" className="w-full h-full p-1"/>
                </div>
              </li>

            </ul>
          </div>


        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#5C4033] flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-sm lg:text-lg text-white text-center sm:text-left">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm lg:text-lg text-white">
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63]" />
            <Link href="#" className="hover:text-[#C97B63] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}