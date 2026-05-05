import { motion } from "framer-motion";
import { Smartphone, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import NavilensSection from "./NavilensSection";
import iconQr from "@/assets/qr-code-example.png";
import iconNfc from "@/assets/shape-outline.png";
import qrAscires from "@/assets/pilarqr.png";
import nfcWipass from "@/assets/piwi.png";

const nfcUseCases = [
  { icon: CheckCircle2, text: "Check-in automático al llegar al recinto" },
  { icon: MapPin, text: "Puntos de información interactivos en cada planta" },
  { icon: Smartphone, text: "Guía personalizada del usuario por todo el espacio" },
];

const SmartSignageSection = () => (
  <section id="smart-signage" className="py-12 md:py-20 bg-background relative overflow-hidden">
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            02
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Smart Signage</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Convierte cualquier soporte físico en un punto de acceso a contenidos audiovisuales. Un gesto del
            espectador, infinitas piezas que reproducir.
          </p>
        </div>
      </ScrollReveal>

      {/* === QR + NFC side-by-side feature cards === */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* QR Card */}
        <ScrollReveal direction="left">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-8 overflow-hidden transition-colors duration-500"
          >
            {/* Glow */}
            <motion.div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative grid grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={iconQr} alt="QR" className="h-10 object-contain" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Acceso rápido</span>
                    <h3 className="text-2xl font-bold text-foreground">Códigos QR</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Da acceso instantáneo a vídeos, trailers, making-of y contenidos audiovisuales adicionales desde
                  cualquier soporte impreso o pantalla.
                </p>

                <ul className="space-y-2.5">
                {[
                  "Acceso directo al contenido audiovisual",
                  "Vídeos y piezas actualizables en tiempo real",
                  "Compatible con cualquier smartphone",
                ].map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{t}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* QR Image on the right */}
              <div className="relative flex justify-center shrink-0 self-stretch items-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-2xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={qrAscires}
                  alt="qr signage"
                  className="relative w-full max-w-[220px] rounded-2xl shadow-xl object-cover h-full"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* NFC Card */}
        <ScrollReveal direction="right" delay={0.1}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-8 overflow-hidden transition-colors duration-500"
          >
            {/* Glow */}
            <motion.div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <img src={iconNfc} alt="NFC" className="h-14 object-contain" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    Sin apps · Sin cámara
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">Dispositivos NFC</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Activa contenidos audiovisuales con un simple acercamiento del móvil: trailers, fichas, listas de
                reproducción y experiencias phygital sin fricción
              </p>

              {/* NFC image */}
              <div className="relative rounded-2xl overflow-hidden mb-5 shadow-2xl border border-accent/20">
                <motion.img
                  src={nfcWipass}
                  alt="nfc interaction"
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Accesibilidad como subsección */}
      <NavilensSection />
    </div>
  </section>
);

export default SmartSignageSection;
