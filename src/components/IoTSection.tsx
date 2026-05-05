import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Bell, Scale } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import iotTotem from "@/assets/iot.png";

const features = [
  { icon: LayoutDashboard, title: "Dashboards", desc: "Métricas de audiencia y reproducción en una sola vista." },
  { icon: FileText, title: "Informes", desc: "Reportes de visionado en tiempo real e históricos." },
  { icon: Bell, title: "Alertas", desc: "Notificaciones de incidencias en salas y equipos." },
  { icon: Scale, title: "Escalable", desc: "Cientos de pantallas y proyectores en minutos." },
];

const IoTSection = () => (
  <section id="iot" className="py-12 md:py-16 bg-surface relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            05
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Soluciones IoT</h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
        {/* Left: text + 4 cards */}
        <ScrollReveal direction="left">
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Monitoriza tu producción audiovisual en tiempo real:{" "}
            <strong className="text-foreground">capta, analiza y reacciona</strong> ante audiencias, equipos y salas.
            Sensores, dashboards e IA trabajando juntos.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="group p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-0.5">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Right: image */}
        <ScrollReveal direction="right" delay={0.1}>
          <div className="relative max-w-xs mx-auto">
            <motion.div
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.3), transparent 70%)" }}
              animate={{ opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src={iotTotem}
                alt="Dashboard IoT en tiempo real"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default IoTSection;
