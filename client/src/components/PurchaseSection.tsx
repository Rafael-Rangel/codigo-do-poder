import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Lock, MousePointerClick } from "lucide-react";

export default function PurchaseSection() {
  return (
    <>
      <style>{`
        .purchase-button {
          padding: 32px 0;
          font-size: 22px;
        }
        @media (min-width: 768px) {
          .purchase-button {
            padding: 48px 0;
            font-size: 36px;
          }
        }
      `}</style>
      <section className="w-full py-20 bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
          <h3 className="text-xl md:text-2xl font-serif italic text-gray-300">Per Lavita &nbsp;&nbsp;•&nbsp;&nbsp; O clã dos lobos</h3>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-4xl mt-8"
        >
          <Card className="bg-gradient-to-br from-zinc-900/90 via-black to-zinc-900/90 border border-primary/20 shadow-2xl shadow-primary/10">
            <CardContent className="p-8 md:p-12 flex flex-col items-center gap-8">
              {/* Pricing */}
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                  <span className="text-gray-500">PREÇO PROMOCIONAL DE</span>
                  <span className="text-red-600 line-through decoration-2">R$ 297,00</span>
                </div>
                
                <span className="text-2xl font-bold text-white tracking-widest">POR APENAS</span>
                
                <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(0,196,180,0.5)]">
                  12X DE R$ 20,37
                </h2>
              </div>

              {/* Main CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full"
              >
                <motion.a
                  href="https://pay.kiwify.com.br/3BAj3Jp?afid=Hvig5Lsq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full bg-gradient-to-r from-black to-[#2D8A71] text-white font-black rounded-full uppercase tracking-wide text-center overflow-hidden group purchase-button"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 70px rgba(45,138,113,1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(45,138,113,0.6)",
                      "0 0 60px rgba(45,138,113,0.8)",
                      "0 0 40px rgba(45,138,113,0.6)"
                    ]
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    boxShadow: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {/* Efeito de brilho animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  {/* Efeito de pulso no hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.6, 0],
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Efeito de brilho pulsante */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      background: [
                        "radial-gradient(circle at 50% 50%, rgba(45,138,113,0) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 50%, rgba(45,138,113,0.3) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 50%, rgba(45,138,113,0) 0%, transparent 70%)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    SIM, QUERO O CÓDIGO!
                    <MousePointerClick className="w-6 h-6 md:w-7 md:h-7" />
                  </span>
                </motion.a>
                
                <div className="flex flex-col items-center mt-4 gap-1 text-[25px] font-bold tracking-wider text-gray-300">
                  <span>ZERO RISCO...</span>
                  <span>GARANTIA TOTAL DE 7 DIAS</span>
                </div>
              </motion.div>

              {/* Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <img 
                  src="/images/garantia_7_dias.png" 
                  alt="Garantia de 7 Dias" 
                  className="w-48 md:w-64 drop-shadow-2xl"
                />
              </motion.div>

              {/* Guarantee Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="w-full text-center space-y-4 mt-4"
              >
                <h4 className="text-xl font-bold text-white">7 Dias de Garantia Incondicional</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Confiamos no poder da nossa palavra. Tudo isso que falamos não é conversa de vendedor, por isso lhe oferecemos 7 dias de garantia. Nós confiamos em nossas palavras, assim como você também irá confiar. Se você seguir o método, praticar os exercícios e em 7 dias achar que não teve nenhuma evolução ou que o curso não é para você, é só mandar um e-mail e devolvemos todo o seu investimento sem fazer perguntas.
                </p>
              </motion.div>

              {/* Security Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="w-full mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-12 h-12 text-green-500" />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-green-500">COMPRA SEGURA</span>
                      <span className="text-lg font-bold text-white">SITE PROTEGIDO</span>
                      <span className="text-[10px] text-gray-400">CERTIFICADO SSL</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img src="/images/google_safe.jpg" alt="Google Safe Browsing" className="h-12 object-contain rounded" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Lock className="w-8 h-8 text-gray-400" />
                    <span className="text-xl font-bold text-gray-300">SiteLock</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
    </>
  );
}
