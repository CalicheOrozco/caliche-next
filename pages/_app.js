import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/lenguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
