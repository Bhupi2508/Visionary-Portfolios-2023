import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bhupendra Singh - Full Stack Developer</title>
        <meta
          name="description"
          content="I'm Bhupendra Singh, a senior full-stack software developer, JS lover."
        />
        <meta name="language" content="English" />
        <meta name="author" content="Bhupendra Singh" />

        {/* Open Graph / Linkedin / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linkedin.com/in/bhupi2508" />
        <meta property="og:title" content="Bhupendra Singh | Full stack developer" />
        <meta
          property="og:description"
          content="Hello world! I'm Bhupendra Singh, a senior full-stack software developer, JS lover."
        />
        <meta property="og:image" content="https://github.com/Bhupi2508" />
        <meta property="og:image:alt" content="Bhupendra Singh" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.twitter.com/bhupi2508" />
        <meta property="twitter:site" content="@Bhupi2508" />
        <meta
          property="twitter:title"
          content="Bhupendra Singh | Full Stack developer"
        />
        <meta
          property="twitter:description"
          content="Hello world! I'm Bhupendra Singh, a senior full-stack software developer, JS lover."
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
