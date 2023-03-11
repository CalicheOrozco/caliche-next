import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <ContainerBlock
      title="Caliche Orozco | Front-End Developer | Landing Page"
      description="Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative bg-cover bg-center  flex-grow flex items-center justify-center">
          <Hero />
        </div>
        <Footer />
      </div>
    </ContainerBlock>
  );
}
