const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = "",
}) => (
  <div
    className={`${center ? "text-center" : ""} mb-8 md:mb-10 ${className}`}
  >
    {eyebrow ? (
      <p className="text-xs md:text-sm uppercase tracking-widest text-secondary font-semibold mb-2">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-2xl md:text-4xl text-transparent font-semibold leading-tight">
      {title}
    </h2>
    {subtitle ? (
      <p
        className={`text-gray-600 text-sm md:text-base mt-3 max-w-2xl ${
          center ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    ) : null}
  </div>
);

export default SectionHeading;
