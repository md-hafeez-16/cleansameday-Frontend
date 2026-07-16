import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";

const socialLinks = [
  {
    href: "https://x.com/samedayclean0",
    label: "Twitter / X",
    icon: RiTwitterXFill,
  },
  {
    href: "https://www.instagram.com/samedaycleaning_dubai/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/share/1AfRGEsnaK/",
    label: "Facebook",
    icon: MdFacebook,
  },
  {
    href: "https://www.tiktok.com/@sameday.cleaning?_t=ZS-8zBz5ypz8l6&_r=1",
    label: "TikTok",
    icon: IoLogoTiktok,
  },
];

const Header = () => (
  <div className="bg-primary font-marcellus max-w-7xl mx-auto">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-white py-3 md:py-3.5 text-xs md:text-sm px-4 md:px-6">
      <div className="text-center md:text-left">
        Call us:{" "}
        <a href="tel:+971549936911" className="hover:text-secondary transition-colors">
          +971 549 936911
        </a>
        <span className="hidden sm:inline"> | </span>
        <a
          href="mailto:info@cleansameday.com"
          className="block sm:inline hover:text-secondary transition-colors"
        >
          info@cleansameday.com
        </a>
      </div>

      <p className="flex items-center justify-center md:justify-end gap-2">
        <span className="text-white/80">Follow us:</span>
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-secondary hover:text-white transition-colors"
          >
            <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </a>
        ))}
      </p>
    </div>
  </div>
);

export default Header;
