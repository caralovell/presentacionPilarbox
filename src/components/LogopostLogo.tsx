import logoSrc from "@/assets/logopost-logo.png";

const LogopostLogo = ({ className = "", white = false }: { className?: string; white?: boolean }) => (
  <img
    src={logoSrc}
    alt="Logopost"
    className={className}
    style={white ? { filter: "brightness(0) invert(1)" } : undefined}
  />
);

export default LogopostLogo;
