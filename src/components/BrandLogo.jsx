import fitnessGymLogo from "../assets/fitness-gym-logo-v2.png";

function BrandLogo({ className = "h-16 w-auto", compact = false }) {
  return (
    <span className={`inline-flex items-center overflow-hidden ${compact ? "h-12 w-12" : ""}`}>
      <img
        src={fitnessGymLogo}
        alt="Fitness Gym"
        className={`${className} object-contain`}
      />
    </span>
  );
}

export default BrandLogo;
