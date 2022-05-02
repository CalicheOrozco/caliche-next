import Cards from "../../components/Cards";
import ContainerBlock from "../../components/ContainerBlock";

import { getAllFilesMetadata } from "../../lib/mdx";

export default function Home({ posts }) {
  return (
    <ContainerBlock title="Blog | Caliche Orozco">
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
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
