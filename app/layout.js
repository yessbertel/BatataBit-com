// import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <Head>
        
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;