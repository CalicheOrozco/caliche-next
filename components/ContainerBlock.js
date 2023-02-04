import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Caliche Orozco | Front-End Developer | Landing Page",
    description:
      "I'm Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally.",
    image: "/avatar.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://calicheorozco.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://calicheorozco.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Caliche Orozco" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full min-h-screen">
        <Navbar />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
      
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G6J4VPVBQV', {
          page_path: window.location.pathname,
          });
        `,
          }}
        />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
