import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductSeries from "@/components/ProductSeries";
import USP from "@/components/USP";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductSeries />
      <USP />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
