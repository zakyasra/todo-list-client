import "../styles/global.scss";
import Head from "next/head";
import "antd/dist/antd.css";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <div>
        <Head>
          <title>Your Todo List</title>
          <link rel="shortcut icon" href="favicon-logos.svg" />
          {/* bootstrap */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          ></link>
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossOrigin="anonymous"
          ></script>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
      </div>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
        <NextNProgress
          color="#005bab"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <Component {...pageProps} />
      </AnimatePresence>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
