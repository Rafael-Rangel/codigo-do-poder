import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg_desktop.jpg" 
          alt="Estátua Estoica" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-primary text-2xl md:text-3xl font-bold tracking-widest">O CÓDIGO DO <br/><span className="text-4xl md:text-6xl">PODER</span></h2>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
        >
          DESENVOLVA <br/>
          OS CÓDIGOS <br/>
          MENTAIS PARA
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl max-w-3xl text-gray-300 font-light tracking-wide uppercase"
        >
          Dominar a inteligência emocional, ter uma mente blindada, vencer seus conflitos internos, dominar o autoconhecimento, dominar seus relacionamentos, aprender a arte da solitude, ter valor e nunca mais sofrer por ninguém.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-primary text-xl md:text-2xl font-bold tracking-wider">
            ESSA É A COLEÇÃO POR TRÁS DE TUDO ISSO E MUITO MAIS!
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <motion.a 
            href="https://pay.kiwify.com.br/3BAj3Jp?afid=Hvig5Lsq"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-gradient-to-r from-black to-[#2D8A71] text-white text-lg md:text-xl px-10 py-4 rounded-full font-bold uppercase tracking-widest border border-white/10 overflow-hidden group"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 0 40px rgba(45,138,113,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(45,138,113,0.4)",
                "0 0 30px rgba(45,138,113,0.6)",
                "0 0 20px rgba(45,138,113,0.4)"
              ]
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17,
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Efeito de brilho animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            
            {/* Efeito de pulso no hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ 
                scale: 1.2, 
                opacity: [0, 0.5, 0],
                transition: { duration: 1, repeat: Infinity }
              }}
            />
            
            <span className="relative z-10">Quero o Código do Poder!</span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
