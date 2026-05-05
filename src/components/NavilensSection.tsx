import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import navilensLogo from "@/assets/navilens-logo.jpg";
import navilensCode from "@/assets/navilens-code.png";
import visualfyLogo from "@/assets/visualfy-logo.png";
import visualfyDevice from "@/assets/visualfy-device.jpg";

const NavilensSection = () => (
  <div className="mt-12 md:mt-16">
    <ScrollReveal>
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">Accesibilidad</h3>
      </div>
    </ScrollReveal>

    <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
      {/* NAVILENS Card */}
      <ScrollReveal direction="left">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-6 overflow-hidden transition-colors duration-500"
        >
          <motion.div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src={navilensLogo} alt="Navilens" className="h-12 object-contain" />
                <span className="text-xs uppercase tracking-[0.15em] text-accent font-bold">Discapacidad visual</span>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Señalética audiovisual con audiodescripción para que las personas con discapacidad visual disfruten
                del contenido.
              </p>
            </div>

            <div className="relative flex justify-center shrink-0">
              <motion.img
                src={navilensCode}
                alt="Código Navilens"
                className="relative w-full max-w-[110px] rounded-2xl shadow-xl object-contain bg-background p-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </ScrollReveal>

      {/* VISUALFY Card */}
      <ScrollReveal direction="right" delay={0.1}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-6 overflow-hidden transition-colors duration-500"
        >
          <motion.div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative grid grid-cols-[1fr_auto] gap-4 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={visualfyLogo} alt="Visualfy" className="h-12 object-contain" />
                <span className="text-xs uppercase tracking-[0.15em] text-accent font-bold">Discapacidad auditiva</span>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Tecnología que traduce el sonido de proyecciones y eventos audiovisuales en señales visuales y
                vibraciones, haciendo el contenido accesible a personas con pérdida auditiva.
              </p>
            </div>

            <div className="relative flex justify-center shrink-0">
              <motion.img
                src={visualfyDevice}
                alt="Dispositivo Visualfy"
                className="relative w-full max-w-[150px] object-contain"
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  </div>
);

export default NavilensSection;
