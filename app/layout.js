// import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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