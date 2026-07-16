import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-white hover:shadow-lg",
  secondary:
    "bg-secondary text-black hover:shadow-lg",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
};

const sizes = {
  sm: "py-2 px-4 text-sm rounded-lg",
  md: "py-3 px-6 text-sm rounded-lg",
  pill: "py-3 px-6 text-sm rounded-full",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  slideHover = true,
  to,
  href,
  type = "button",
  ...props
}) => {
  const classes = `relative inline-flex items-center justify-center gap-2 font-semibold overflow-hidden group transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
          slideHover && variant !== "outline"
            ? "group-hover:text-black"
            : ""
        }`}
      >
        {children}
      </span>
      {slideHover && variant !== "outline" && (
        <div
          className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${
            variant === "primary" ? "bg-secondary" : "bg-primary"
          }`}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
