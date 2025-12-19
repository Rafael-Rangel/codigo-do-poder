import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  text: string;
  image?: string;
  reverse?: boolean;
  highlight?: boolean;
  showCta?: boolean;
  buttonVariant?: "dark" | "light";
  gradientType?: "left" | "right" | "circular";
}

export default function ContentSection({ 
  title, 
  subtitle, 
  text, 
  image, 
  reverse, 
  highlight, 
  showCta = true,
  buttonVariant = "dark",
  gradientType = "left"
}: ContentSectionProps) {
  
  const buttonStyles = {
    dark: "bg-gradient-to-r from-black to-[#2D8A71] hover:from-black hover:to-[#236e5a] text-white shadow-[0_0_20px_rgba(45,138,113,0.3)] hover:shadow-[0_0_30px_rgba(45,138,113,0.6)]",
    light: "bg-gradient-to-r from-[#00C4B4] to-[#008F82] hover:from-[#00E0CE] hover:to-[#00A899] text-white shadow-[0_0_20px_rgba(0,196,180,0.4)] hover:shadow-[0_0_30px_rgba(0,196,180,0.7)]"
  };

  const gradientStyles = {
    left: { background: "linear-gradient(to right, rgba(255,255,255,0.05) 0%, transparent 50%)" },
    right: { background: "linear-gradient(to left, rgba(255,255,255,0.05) 0%, transparent 50%)" },
    circular: { background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)" }
  };

  return (
    <section className={cn(
      "w-full py-16 md:py-24 overflow-hidden relative",
      "bg-black"
    )}>
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={gradientStyles[gradientType]}
      />
      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className={cn(
          "flex flex-col gap-12 items-center max-w-7xl mx-auto",
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6 text-left"
          >
            {subtitle && (
              <span className="text-primary text-lg font-bold tracking-widest uppercase">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
              {title}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              {text}
            </p>
            
            {showCta && (
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a
                  href="https://pay.kiwify.com.br/3BAj3Jp?afid=Hvig5Lsq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative inline-block text-lg px-8 py-6 rounded-full uppercase tracking-widest font-bold text-center overflow-hidden group",
                    buttonStyles[buttonVariant]
                  )}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: buttonVariant === "dark" 
                      ? "0 0 40px rgba(45,138,113,0.8)" 
                      : "0 0 40px rgba(0,196,180,0.9)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                >
                  {/* Efeito de brilho animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Pulso contínuo */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: buttonVariant === "dark"
                        ? [
                            "0 0 20px rgba(45,138,113,0.4)",
                            "0 0 30px rgba(45,138,113,0.6)",
                            "0 0 20px rgba(45,138,113,0.4)"
                          ]
                        : [
                            "0 0 20px rgba(0,196,180,0.5)",
                            "0 0 35px rgba(0,196,180,0.8)",
                            "0 0 20px rgba(0,196,180,0.5)"
                          ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10">Quero o Código do Poder!</span>
                </motion.a>
              </motion.div>
            )}
          </motion.div>

          {/* Image Content */}
          {image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full max-w-lg lg:max-w-xl"
            >
              <motion.div 
                className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800 shadow-2xl shadow-primary/10 shadow-[0_0_30px_rgba(255,255,255,0.2)] group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
