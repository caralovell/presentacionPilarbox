import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  className?: string;
  placeholderClass: string;
  alt: string;
  aspectRatio?: string;
  size?: "sm" | "md" | "lg" | "icon";
}

const ImagePlaceholder = ({
  className = "",
  placeholderClass,
  alt,
  aspectRatio = "4/3",
  size = "md",
}: ImagePlaceholderProps) => {
  const sizeStyles = {
    icon: "w-10 h-10",
    sm: "w-full max-w-[200px]",
    md: "w-full max-w-md",
    lg: "w-full max-w-lg",
  };

  return (
    <motion.div
      className={`${placeholderClass} ${sizeStyles[size]} rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 flex flex-col items-center justify-center gap-2 text-muted-foreground overflow-hidden ${className}`}
      style={size !== "icon" ? { aspectRatio } : undefined}
      whileHover={{ scale: 1.03 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.3 },
      }}
      role="img"
      aria-label={alt}
    >
      <svg
        className="w-8 h-8 text-accent/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
        />
      </svg>
      <span className="text-xs font-bold text-accent/50 uppercase tracking-wider text-center px-2">
        {alt}
      </span>
    </motion.div>
  );
};

export default ImagePlaceholder;
