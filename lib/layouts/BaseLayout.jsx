import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FixedContact from "../components/FixedContact";

function BaseLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <FixedContact />
    </>
  );
}

export default BaseLayout;
