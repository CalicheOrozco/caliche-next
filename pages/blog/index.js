import Cards from "../../components/Cards";
import ContainerBlock from "../../components/ContainerBlock";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"

import { getAllFilesMetadata } from "../../lib/mdx";

export default function Home({ posts }) {
  return (
    <ContainerBlock 
    title="Blog | Caliche Orozco"
    description="Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative bg-cover bg-center  flex-grow flex items-center justify-center">
        <section className="h-full py-5">
        <div className="flex gap-14 flex-wrap justify-center ">
          {posts.map((post) => (
            <Cards
              key={post.slug}
              title={post.title}
              subtitle={post.subtitle}
              link={`blog/${post.slug}`}
              date={post.date}
              image={`/blog/${post.image}`}
            />
          ))}
        </div>
      </section>
        </div>
        <Footer />
      </div>
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
