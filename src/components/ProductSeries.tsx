import { Card, CardContent } from "@/components/ui/card";
import verdeS from "@/assets/verde-s.jpg";
import verdeNuart from "@/assets/verde-nuart.jpg";
import verdeGreen from "@/assets/verde-green.jpg";

const ProductSeries = () => {
  const products = [
    {
      name: "Verde Tempora S",
      material: "Recycled bike inner tubes",
      style: "Urban, outdoor, water-resistant",
      price: "Rp350.000",
      image: verdeS,
      accent: "verde-clay",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "Verde Tempora Nuart",
      material: "Broken ceramics & porcelain mixed with eco-resin",
      style: "Artistic, exclusive, one-of-a-kind",
      price: "Rp970.000",
      image: verdeNuart,
      accent: "verde-sage",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "Verde Tempora Green",
      material: "Leather alternative from fruit pulp, pineapple leaves, and banana fibers",
      style: "Fully vegan, breathable, stylish",
      price: "Rp110.000",
      image: verdeGreen,
      accent: "verde-moss",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="product-series" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-verde-charcoal">
            Product Series
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="bg-verde-cream border-verde-sage/20 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500">
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Beli ${product.name}`}
              >
                <div className="overflow-hidden rounded-t-lg aspect-square relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-verde-charcoal mb-3">
                  {product.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-verde-sage uppercase tracking-wider">Material</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {product.material}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-verde-sage uppercase tracking-wider">Style</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {product.style}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-semibold text-verde-clay">
                    {product.price}
                  </span>
                  <div className={`w-3 h-3 rounded-full bg-${product.accent}`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSeries;