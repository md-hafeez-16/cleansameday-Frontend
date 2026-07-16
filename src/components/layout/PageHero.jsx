import { Link } from "react-router-dom";

const PageHero = ({
  title,
  breadcrumb,
  image,
  overlay = true,
  children,
}) => {
  const lightText = overlay || !image;

  return (
    <header
      className="relative bg-cover bg-center md:h-60 h-28"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      )}
      {image && overlay && (
        <div className="absolute inset-0 bg-primary/55" />
      )}

      <div
        className={`relative flex flex-col justify-center items-center h-full text-center px-4 ${
          lightText ? "text-white" : "text-gray-900"
        }`}
      >
        <h1 className="md:text-4xl text-2xl md:mb-2 font-bold leading-tight">
          {title}
        </h1>

        {breadcrumb && (
          <nav
            className="text-sm md:text-base font-semibold opacity-90"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">{">>"}</span>
            {breadcrumb.href ? (
              <Link to={breadcrumb.href} className="hover:underline">
                {breadcrumb.label}
              </Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </nav>
        )}

        {children}
      </div>
    </header>
  );
};

export default PageHero;
