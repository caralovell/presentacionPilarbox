import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef } from "react";
import aiAgent from "@/assets/aasistente.png";
import aiAvatar from "@/assets/corpo.png";
import aiAdaptive from "@/assets/adaptable.png";

const blocks = [
  {
    title: "Agente IA",
    img: aiAgent,
    desc: "Asistente conversacional que recomienda contenidos audiovisuales, resuelve dudas y guía al espectador en tiempo real.",
  },
  {
    title: "Avatar IA",
    img: aiAvatar,
    desc: "Presentador virtual humano y empático que narra contenidos por voz y gesto en pantallas y videowalls.",
  },
  {
    title: "IA Adaptable",
    img: aiAdaptive,
    desc: "Motor que aprende del catálogo y la audiencia, adaptando tono, recomendaciones y piezas a cada perfil.",
  },
];

const AiAgentSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x * 15);
      mouseY.set(y * 10);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="inteligencia-artificial" className="py-12 md:py-14 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-3">
              06
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Inteligencia Artificial</h2>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-end gap-5 md:gap-8 py-8">
            {blocks.map((b, i) => {
              const arcOffsets = [-10, -26, -10];
              const rotations = [-5, 0, 5];
              const floatDelay = i * 0.8;

              return (
                <ScrollReveal key={b.title} delay={i * 0.1}>
                  <motion.div
                    className="group relative cursor-pointer"
                    style={{ x: smoothX, y: smoothY }}
                    animate={{
                      y: [arcOffsets[i], arcOffsets[i] - 8, arcOffsets[i]],
                      rotate: rotations[i],
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
                      rotate: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.06, y: arcOffsets[i] - 14, rotate: 0 }}
                  >
                    <div className="relative w-[200px] md:w-[240px] rounded-2xl overflow-hidden shadow-xl border border-border hover:border-accent/50 bg-card transition-colors duration-300">
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={b.img}
                          alt={b.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-bold text-foreground mb-1">{b.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentSection;
