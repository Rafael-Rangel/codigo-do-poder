import HeroSection from "@/components/HeroSection";
import BookGallery from "@/components/BookGallery";
import ContentSection from "@/components/ContentSection";
import PurchaseSection from "@/components/PurchaseSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <HeroSection />
      
      <BookGallery />

      <ContentSection 
        title="TENHA SUA MENTE BLINDADA"
        subtitle="O Código do Poder"
        text="Essa coleção reúne os textos mais transformadores e inovadores já criados, projetados para levar você ao próximo nível no desenvolvimento pessoal. Descubra como dominar qualquer situação, fortalecer sua confiança e alcançar o sucesso que sempre esteve ao seu alcance. Está pronto para desvendar os segredos que irão transformar sua vida para sempre?"
        image="/images/livro_01_impenetravel.png"
        buttonVariant="light"
        gradientType="left"
      />

      <ContentSection 
        title="DOMINANDO UM RELACIONAMENTO"
        text="Você já se perguntou o que diferencia as pessoas que conquistam tudo daquelas que sempre ficam para trás? Existe um código, um conjunto de princípios que, quando seguidos, transformam qualquer pessoa comum em alguém extraordinário. Com O Código do Poder, você terá acesso a ensinamentos exclusivos que vão revolucionar sua vida pessoal, profissional e emocional."
        image="/images/book_05.png"
        reverse
        highlight
        buttonVariant="dark"
        gradientType="right"
      />

      <ContentSection 
        title="Hackeando a Mente"
        subtitle="Assuma o controle"
        text="As oportunidades são diariamente perdidas por você, e o fator principal é apenas a sua mente. Indiretamente ela te induz a cometer erros drásticos, te causando transtornos de ANSIEDADE, MEDOS e ANGÚSTIAS. Mas a partir de agora, a sua vida irá mudar completamente, você irá literalmente HACKEAR a sua mente."
        image="/images/livro_02_hackeando.png"
        buttonVariant="light"
        gradientType="circular"
      />

      <ContentSection 
        title="Dominando a Inteligência Emocional"
        subtitle="Controle suas emoções"
        text="A sua vida se trata de sentimentos, emoções e sensações na qual você se deixa levar. Porém você tem um PODER especificamente SEU, onde você pode atribuir o seu interior e o mundo à sua volta. Aprenda de uma vez por todas a magia da INTELIGÊNCIA EMOCIONAL, detenha o seu EGO e ative o modo REVERSE na sua vida."
        image="/images/livro_03_inteligencia_emocional.png"
        reverse
        highlight
        buttonVariant="dark"
        gradientType="left"
      />

      <ContentSection 
        title="Vença suas batalhas internas"
        subtitle="Conflito Interno"
        text="Você sabia que é possível usar tudo que está ao seu redor como combustível para você sempre se favorecer? E se você tivesse o poder de dominar a sua própria mente? Talvez você nunca tenha tido essa experiência ou não sabe como isso é libertador."
        image="/images/livro_04_conflito_interno.png"
        buttonVariant="light"
        gradientType="right"
      />

      <ContentSection 
        title="Torne-se Inabalável"
        subtitle="O lado oculto da mente dominante"
        text="Sua vida possui BARREIRAS enormes, em cima delas existem pessoas, palavras e ações te atacando à todo momento. Você só conseguiria SOBREVIVER à isso quebrando essas barreiras de uma só vez. Faça isso, e se torne totalmente INABALÁVEL, tome o controle de tudo, inclusive dos seus piores INIMIGOS."
        image="/images/livro_05_inabalavel.png"
        reverse
        highlight
        buttonVariant="dark"
        gradientType="circular"
      />

      <ContentSection 
        title="A Arte da Solitude"
        subtitle="Aprenda a estar sozinho"
        text="A solitude não é solidão. É o poder de estar completamente bem consigo mesmo, sem depender de ninguém para ser feliz. Descubra como transformar momentos sozinho em oportunidades de crescimento, autoconhecimento e fortalecimento interior. Domine a arte de estar em paz com sua própria companhia e torne-se verdadeiramente independente emocionalmente."
        image="/images/livro_06_solitude.png"
        buttonVariant="light"
        gradientType="left"
      />

      <ContentSection 
        title="Não aceite menos que isso"
        subtitle="NÃO ACEITE MENOS"
        text="Em hipótese alguma, NUNCA, JAMAIS aceite menos do que os ensinamentos dessa coleção... você irá se surpreender com o poder que tem!"
        image="/images/book_07.png"
        reverse
        highlight
        buttonVariant="dark"
        gradientType="right"
      />

      <PurchaseSection />
    </div>
  );
}
