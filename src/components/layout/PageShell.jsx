const PageShell = ({ children, surface = true, className = "" }) => (
  <div
    className={`font-marcellus font-medium max-w-7xl mx-auto ${
      surface ? "bg-surface" : "bg-white"
    } ${className}`}
  >
    {children}
  </div>
);

export default PageShell;
