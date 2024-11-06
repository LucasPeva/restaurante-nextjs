import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Nossa história'}
          mainHeader={'Sobre nós'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Bem-vindo à Pizzaria Don Fulano, onde a paixão pela pizza se encontra com a tradição familiar! Localizada no coração da cidade, nossa pizzaria é um verdadeiro refúgio para os amantes de uma boa massa e ingredientes frescos.
          </p>
          <p>A Don Fulano foi fundada em 2020 por Fulano de Tal, um apaixonado por gastronomia que decidiu compartilhar suas receitas familiares com a comunidade. Desde o início, nosso objetivo tem sido oferecer uma experiência culinária autêntica, combinando receitas tradicionais italianas com toques inovadores que refletem o paladar brasileiro.</p>
          <p>Cada pizza é feita com massa artesanal, preparada diariamente e assada em forno a lenha para garantir aquele sabor inconfundível. Utilizamos apenas ingredientes frescos e de alta qualidade, desde os tomates suculentos até os queijos selecionados.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'A gente não morde'}
          mainHeader={'Entre em contato'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:1278434197">
            12 7843 4197
          </a>
        </div>
      </section>
    </>
  )
}
