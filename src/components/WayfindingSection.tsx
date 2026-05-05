import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import wayfindingImg from "@/assets/wayfinding.png";
import wayfindingImg2 from "@/assets/wayfinding-2.png";

const bubbles = ["Mapa estático", "Mapa dinámico", "Mapa con IA"];

const WayfindingSection = () => (
  <section id="wayfinding" className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div
      className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Digital Wayfinding</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Navegación inteligente que guía al espectador por salas de proyección, estudios, platós y espacios
            audiovisuales con rutas en tiempo real, localización de salas, butacas, accesos y zonas técnicas paso a
            paso.
          </p>
        </div>
      </ScrollReveal>

      {/* Bubbles */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {bubbles.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 14 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </ScrollReveal>

      {/* Images + button */}
      <ScrollReveal delay={0.15}>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center max-w-5xl mx-auto">
          {/* Left: two images side by side */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={wayfindingImg}
                alt="Mapa interactivo de navegación interior"
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img
                src={wayfindingImg2}
                alt="Navegación digital en espacio interior"
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right: explanatory text + button */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-xs text-center md:text-left">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explora una demo interactiva del mapa de navegación por el espacio audiovisual.
            </p>
            <a
              href="https://digital.logopost.es/pre-corpo/mapa.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative bg-gradient-to-r from-accent to-accent/70 text-accent-foreground px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] hover:scale-[1.03] flex items-center overflow-hidden">
                <span className="mr-7 transition-opacity duration-500 group-hover:opacity-0">Ver mapa</span>
                <span className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-8 place-items-center transition-all duration-500 bg-accent-foreground/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </button>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WayfindingSection;
