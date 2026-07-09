import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/ui/Hero";
import Features from "../../components/ui/Features";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;