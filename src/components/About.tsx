import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Truck, Recycle } from "lucide-react";

const About = () => {
  const features = [
    { icon: Leaf, text: "Zero-Plastic Packaging" },
    { icon: Users, text: "Local, Ethical Production" },
    { icon: Truck, text: "Carbon-Minimized Shipping" },
    { icon: Recycle, text: "Trade Trash for Discount" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-verde-cream to-verde-sand">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-verde-charcoal mb-8">
            Dibuat Dengan Tujuan
          </h2>
          <div className="w-16 h-0.5 bg-verde-moss mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-verde-charcoal leading-relaxed max-w-4xl mx-auto mb-12 font-light">
            Verde Tempora bukan cuma aksesoris. Ini simbol gaya hidup yang lebih sadar.
            Jam tangan ini dirancang dari limbah terpilah: kayu lapuk, ban dalam sepeda, pecahan keramik, hingga kaca bekas.
            Kami olah kembali jadi produk berkualitas tahan lama, unik, dan penuh cerita.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-verde-moss/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-verde-moss" />
                </div>
                <p className="text-verde-charcoal font-medium leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;