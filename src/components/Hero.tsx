import { Button } from "@/components/ui/button";
import heroWatch from "@/assets/hero-watch.jpg";

const Hero = () => {
  const handleScroll = () => {
    const productSection = document.getElementById("product-series");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWatch} 
          alt="Verde Tempora Watch" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-verde-cream/90 to-verde-sand/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-verde-charcoal mb-6 leading-tight">
          Verde Tempora
        </h1>
        <div className="w-24 h-0.5 bg-verde-moss mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-verde-charcoal font-light mb-4">
          Gaya Peduli. Waktu Berarti
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Jam tangan ramah lingkungan dengan desain yang tidak lekang waktu.
        </p>
        
        {/* UBAH TOMBOL INI */}
        <Button 
          size="lg" 
          className="bg-verde-moss hover:bg-verde-sage text-verde-cream px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={handleScroll} // <-- Tambahkan onClick di sini
        >
          Lihat Produk
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-verde-moss/50 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;