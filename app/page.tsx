import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-white w-full min-w-0">
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Footer />
    </div>
  );
}
