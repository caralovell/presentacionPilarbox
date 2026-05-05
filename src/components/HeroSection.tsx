import { motion } from "framer-motion";
import LogopostLogo from "./LogopostLogo";
import sonoLogo from "@/assets/pilar.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const HeroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-center px-6">
    {/* Background decorations */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Content — proposal cover */}
    <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl w-full">
      {/* 1. Client logo */}
      <motion.div {...fadeUp(0.1)}>
        <img src={sonoLogo} alt="Sono logo" className="h-20 md:h-24 w-auto" />
      </motion.div>

      {/* 2. Label */}
      <motion.span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70" {...fadeUp(0.25)}>
        Propuesta de
      </motion.span>

      {/* 3. Logopost logo — main anchor */}
      <motion.div {...fadeUp(0.4)}>
        <LogopostLogo className="h-12 md:h-14 w-auto" />
      </motion.div>

      {/* 3.5 Tagline */}
      <motion.div className="flex items-center gap-4 w-full max-w-md" {...fadeUp(0.5)}>
        <span className="h-px flex-1 bg-accent/60" />
        <span className="text-sm uppercase tracking-[0.3em] text-accent font-medium whitespace-nowrap">
          Línea digital
        </span>
        <span className="h-px flex-1 bg-accent/60" />
      </motion.div>

      {/* 4. Proposal info */}
      <motion.div className="flex flex-col items-center gap-1.5 mt-2" {...fadeUp(0.6)}>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Nombre de cliente:</span>{" "}
          <span className="text-foreground/80">Sono Tecnología Audiovisual</span>
          <span className="mx-3 opacity-30">|</span>
          <span className="opacity-60">Fecha:</span> <span className="text-foreground/80">06/05/2026</span>
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Personas de contacto:</span>{" "}
          <span className="text-foreground/80">Julián Marquina y Carlos Martínez</span>
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="opacity-60">Creado por:</span> <span className="text-foreground/80">David Ochoa Tapia</span>
        </p>
        <p className="text-xs text-muted-foreground/60 italic">
          Responsable del Departamento de Tecnología e Innovación
        </p>
      </motion.div>

      {/* 5. Scroll indicator */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
