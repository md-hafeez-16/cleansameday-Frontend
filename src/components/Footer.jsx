import { Link } from "react-router-dom";
import { IoLogoTiktok } from "react-icons/io5";
import logo from "../assets/images/Samedayfinal.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Services", path: "/service" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact-us" },
];

const socialLinks = [
  {
    href: "https://x.com/samedayclean0",
    label: "X / Twitter",
    className: "bg-[#33CCFF] hover:bg-[#33CCFF]/80",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11.3214 8.93654L16.4919 3.05554H15.2667L10.7772 8.16193L7.1914 3.05554H3.05566L8.47803 10.7773L3.05566 16.9444H4.28097L9.022 11.5519L12.8088 16.9444H16.9446L11.3211 8.93654H11.3214ZM9.64322 10.8453L9.09382 10.0764L4.72246 3.95809H6.60445L10.1322 8.89578L10.6816 9.66469L15.2672 16.0829H13.3852L9.64322 10.8456V10.8453Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/samedaycleaning_dubai/",
    label: "Instagram",
    className: "bg-gradient-to-br from-[#FE983D] to-[#FE2181] hover:opacity-90",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="white">
        <path d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/1AfRGEsnaK/",
    label: "Facebook",
    className: "bg-[#337FFF] hover:bg-[#337FFF]/80",
    icon: (
      <svg className="w-4 h-4 text-white" viewBox="0 0 8 14" fill="currentColor">
        <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@sameday.cleaning?_t=ZS-8zBz5ypz8l6&_r=1",
    label: "TikTok",
    className: "bg-black hover:bg-[#FF0050]",
    icon: <IoLogoTiktok className="w-4 h-4 text-white" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <footer className="w-full bg-primary font-marcellus max-w-7xl mx-auto mt-auto">
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
          <Link
            to="/"
            className="inline-block bg-white rounded-xl p-3 shadow-md mx-auto lg:mx-0"
          >
            <img
              src={logo}
              alt="Clean Same Day logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">
            Professional cleaning services for homes and businesses across Dubai.
          </p>
          <div className="flex gap-2.5 mt-4 justify-center lg:justify-start">
            {socialLinks.map(({ href, label, className, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${className}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center lg:text-left">
          <h4 className="text-base font-semibold text-white mb-3">Get In Touch</h4>
          <ul className="text-white/85 text-sm space-y-2">
            <li>
              <a href="mailto:info@cleansameday.com" className="hover:text-secondary transition-colors">
                info@cleansameday.com
              </a>
            </li>
            <li>
              <a href="tel:+971549936911" className="hover:text-secondary transition-colors">
                +971 549 936911
              </a>
            </li>
            <li className="text-white/70 leading-relaxed">
              F1-127, Hor Al Anz, Dubai, UAE
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="text-center lg:text-left">
          <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
          <ul className="text-white/85 text-sm space-y-2">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-secondary transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center lg:text-left">
          <h4 className="text-base font-semibold text-white mb-3">Newsletter</h4>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 max-w-xs mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Your email here..."
              className="flex-1 h-10 text-sm border border-white/20 bg-white/10 text-white placeholder:text-white/50 rounded-lg px-3.5 focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button
              type="button"
              className="h-10 px-5 bg-secondary text-primary text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-7 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/75">
        <p className="text-center sm:text-left">
          © {year} Same Day Cleaning Services. All rights reserved.{" "}
          <span className="text-white/50 hidden sm:inline">|</span>{" "}
          Designed & Developed by{" "}
          <a
            href="https://pushpulltechnologys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-medium"
          >
            PushPull Technologys
          </a>
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/terms" className="hover:text-secondary transition-colors">
              Terms
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-secondary transition-colors">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/helpcenter" className="hover:text-secondary transition-colors">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
