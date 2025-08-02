import { Heart, Package, Users, TreePine, Recycle } from "lucide-react";

const USP = () => {
  const points = [
    {
      icon: Heart,
      title: "Estetika Elegan & Abadi",
      description: "Desain klasik yang melampaui tren"
    },
    {
      icon: Package,
      title: "Kemasan Bebas Plastik",
      description: "Hanya menggunakan kemasan kertas daur ulang"
    },
    {
      icon: Users,
      title: "Dibuat Secara Lokal oleh Pengrajin Terampil",
      description: "Mendukung komunitas pengrajin lokal"
    },
    {
      icon: TreePine,
      title: "Berkontribusi pada Pengurangan Limbah",
      description: "Setiap pembelian memberikan dampak"
    },
    {
      icon: Recycle,
      title: "Bergabung dengan Program 'Verde Trash",
      description: "Ubah limbah menjadi keuntungan"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-verde-sand to-verde-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-verde-charcoal mb-8">
            Kenapa Harus Pilih Jam Tangan Kami
          </h2>
          <div className="w-16 h-0.5 bg-verde-moss mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-verde-moss rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-verde-cream" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-verde-charcoal mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USP;