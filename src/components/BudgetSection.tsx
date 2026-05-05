import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import LogopostLogo from "./LogopostLogo";
import asciresLogo from "@/assets/ascires-logo.png";

const ASCIRES_LOGO = asciresLogo;
const BUDGET_URL = "https://2ff6xv.share-eu1.hsforms.com/2vIt10PA2SWyd24cddBHzfg";

const BudgetSection = () => (
  <section className="py-10 md:py-14 bg-foreground relative overflow-hidden">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 leading-tight">
          ¿Quieres digitalizar tu espacio?
        </h2>
        <p className="text-primary-foreground/70 text-base max-w-lg mx-auto mb-6">
          Solicita tu presupuesto personalizado y descubre cómo la tecnología puede mejorar la experiencia.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <a href={BUDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
          <button className="group relative bg-gradient-to-r from-accent to-accent/70 text-accent-foreground px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] hover:scale-[1.03] flex items-center overflow-hidden">
            <span className="mr-7 transition-opacity duration-500 group-hover:opacity-0">Solicitar Presupuesto</span>
            <span className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-8 place-items-center transition-all duration-500 bg-accent-foreground/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
              <ArrowRight size={14} strokeWidth={2} />
            </span>
          </button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default BudgetSection;
