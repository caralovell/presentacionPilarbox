import ScrollReveal from "./ScrollReveal";
import robotics from "@/assets/robot.png";
import vr from "@/assets/vr.png";
import aroma from "@/assets/mkt.png";
import hologram from "@/assets/holo.png";

const items = [
  { title: "Robótica", img: robotics },
  { title: "Realidad Virtual", img: vr },
  { title: "Mkt Sensorial", img: aroma },
  { title: "Hologramas", img: hologram },
];

const duplicatedItems = [...items, ...items];

const ImmersiveSection = () => (
  <section id="experiencia-inmersiva" className="py-12 md:py-16 bg-background relative overflow-hidden">
    <style>{`
      @keyframes immersive-slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .immersive-scroll-track {
        animation: immersive-slide 25s linear infinite;
      }
      .immersive-scroll-track:hover {
        animation-play-state: paused;
      }
      .immersive-scroll-container {
        mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
      }
    `}</style>

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            07
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">Experiencia Inmersiva</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Tecnologías audiovisuales complementarias que elevan la experiencia sensorial del espectador.
          </p>
        </div>
      </ScrollReveal>

      <div className="immersive-scroll-container w-full max-w-4xl mx-auto overflow-hidden">
        <div className="immersive-scroll-track flex gap-5 w-max">
          {duplicatedItems.map((it, i) => (
            <div
              key={`${it.title}-${i}`}
              className="group relative flex-shrink-0 w-[160px] h-[220px] md:w-[190px] md:h-[260px] rounded-2xl overflow-hidden shadow-xl border border-accent/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl cursor-pointer"
            >
              <img
                src={it.img}
                alt={it.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center">
                <h3 className="text-xs md:text-sm font-bold text-white text-center leading-tight">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImmersiveSection;
