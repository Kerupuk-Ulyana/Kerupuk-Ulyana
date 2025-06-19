import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FixedContact from "../components/FixedContact";
import { ClientOnly } from "vite-react-ssg";

function BaseLayout() {
  return (
    <>
      <Header />
      <Hero />
      <ClientOnly>{() => <Products />}</ClientOnly>
      <About />
      <Contact />
      <Footer />
      <FixedContact />
    </>
  );
}

export default BaseLayout;
