import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import AboutUs from "./components/aboutus";
import MapLocation from "./components/mapLocation";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-white w-full min-w-0 text-slate-900 antialiased selection:bg-sky-100 selection:text-[#0b5a8e]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Products />
        <AboutUs />
        <MapLocation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
