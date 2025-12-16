import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const books = [
  { id: 1, title: "Impenetrável", image: "/images/livro_01_impenetravel.png" },
  { id: 2, title: "Hackeando a Mente", image: "/images/livro_02_hackeando.png" },
  { id: 3, title: "Inteligência Emocional", image: "/images/livro_03_inteligencia_emocional.png" },
  { id: 4, title: "Conflito Interno", image: "/images/livro_04_conflito_interno.png" },
  { id: 5, title: "Inabalável", image: "/images/livro_05_inabalavel.png" },
  { id: 6, title: "Solitude", image: "/images/livro_06_solitude.png" },
  { id: 7, title: "A Ordem Natural", image: "/images/book_07.png" },
];

export default function BookGallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const findScrollContainer = () => {
      if (!carouselRef.current) return null;
      return carouselRef.current.querySelector('[data-slot="carousel-content"]') as HTMLElement;
    };

    const startContinuousScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const scroll = () => {
        const container = findScrollContainer();
        if (!container) {
          animationFrameRef.current = requestAnimationFrame(scroll);
          return;
        }

        const scrollSpeed = 0.8; // pixels por frame
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll <= 0) {
          // Ainda não está pronto, tentar novamente
          animationFrameRef.current = requestAnimationFrame(scroll);
          return;
        }

        if (currentScroll >= maxScroll - 10) {
          // Reset para o início quando chegar ao fim
          container.scrollLeft = 0;
        } else {
          // Scroll contínuo
          container.scrollLeft += scrollSpeed;
        }

        animationFrameRef.current = requestAnimationFrame(scroll);
      };

      // Aguardar um pouco para garantir que está pronto
      const timeoutId = setTimeout(() => {
        animationFrameRef.current = requestAnimationFrame(scroll);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    };

    const cleanup = startContinuousScroll();
    return cleanup;
  }, []);

  // Duplicar os livros para criar loop infinito visual
  const duplicatedBooks = [...books, ...books, ...books];

  return (
    <section className="w-full py-12 bg-black text-white overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedBooks.map((book, index) => (
                <CarouselItem key={`${book.id}-${index}`} className="pl-2 md:pl-4 basis-[52%] md:basis-[26%]">
                  <motion.div 
                    className="p-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="flex aspect-[2/3] items-center justify-center p-0 overflow-hidden rounded-lg group relative cursor-pointer">
                        <motion.img 
                          src={book.image} 
                          alt={book.title} 
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                          className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg"
                          whileHover={{ borderColor: "rgba(0, 196, 180, 0.5)" }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                          <p className="text-white text-sm font-bold uppercase tracking-wider text-center">
                            {book.title}
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-black/50 border-primary text-primary hover:bg-primary hover:text-black" />
            <CarouselNext className="hidden md:flex bg-black/50 border-primary text-primary hover:bg-primary hover:text-black" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
