import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, Sparkles, Navigation, Wifi, Brain, Bot, Wind, Glasses, type LucideIcon } from "lucide-react";
import logopost from "@/assets/logopost-logo.png";

const solutions: { name: string; Icon: LucideIcon }[] = [
  { name: "Digital Signage", Icon: Monitor },
  { name: "Smart Signage", Icon: Sparkles },
  { name: "Digital Wayfinding", Icon: Navigation },
  { name: "IoT", Icon: Wifi },
  { name: "IA", Icon: Brain },
  { name: "Robótica", Icon: Bot },
  { name: "Mkt Sensorial", Icon: Wind },
  { name: "VR / AR", Icon: Glasses },
];

const EcosystemSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [expandProgress, setExpandProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = wrapperHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const raw = scrolled / scrollableDistance;
      const clamped = Math.max(0, Math.min(raw, 1));

      setExpandProgress(Math.min(clamped / 0.6, 1));
      setTextProgress(Math.max(0, Math.min((clamped - 0.5) / 0.3, 1)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const eased =
    expandProgress < 0.5 ? 2 * expandProgress * expandProgress : 1 - Math.pow(-2 * expandProgress + 2, 2) / 2;

  const maxRadius = 42.5;
  const easedRadius = eased * maxRadius;

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "200vh" }}>
      <div id="ecosistema" className="sticky top-0 h-screen bg-background relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Full-screen centered layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Title + description */}
          <div className="text-center max-w-3xl mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">Un ecosistema digital</h2>
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed transition-opacity duration-500"
              style={{ opacity: 0.4 + textProgress * 0.6 }}
            >
              Diseñamos, integramos y gestionamos soluciones digitales para tus espacios — del diseño del espacio a su
              digitalización completa, con la <span className="text-accent font-semibold">inteligencia artificial</span>{" "}
              como eje central que conecta cada tecnología.
            </p>
          </div>

          {/* Orbital diagram */}
          <div className="relative w-[min(70vh,500px)] aspect-square">
            {/* Orbit ring */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-dashed border-accent/20 transition-opacity duration-500"
              style={{ opacity: expandProgress > 0.3 ? (expandProgress - 0.3) / 0.7 : 0 }}
            />

            {/* Center: Logopost */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center shadow-[0_0_40px_hsl(var(--accent)/0.3)] z-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={logopost} alt="Logopost" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            </motion.div>

            {/* Solutions — expand from center */}
            {solutions.map((sol, i) => {
              const angle = (i * 360) / solutions.length - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + easedRadius * Math.cos(rad);
              const y = 50 + easedRadius * Math.sin(rad);

              const stagger = i * 0.03;
              const itemProgress = Math.max(0, Math.min((expandProgress - stagger) / (1 - stagger), 1));

              return (
                <motion.div
                  key={sol.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1.5"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: itemProgress,
                    transform: `translate(-50%, -50%) scale(${0.3 + itemProgress * 0.7})`,
                  }}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border-2 border-accent/40 shadow-xl flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-colors cursor-default overflow-hidden">
                    <sol.Icon className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-foreground text-center max-w-[80px] leading-tight">
                    {sol.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemSection;
