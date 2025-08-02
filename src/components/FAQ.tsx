import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Kenapa harus memilih Verde Tempora, bukan jam konvensional?",
      answer: "Karena ini lebih dari sekedar jam ini adalah pernyataan gaya hidup. Verde Tempora menawarkan keindahan, fungsi, dan kontribusi nyata pada lingkungan."
    },
    {
      question: "Apakah produk ini benar-benar berdampak pada lingkungan?",
      answer: "Ya. Dari casing, kaca, sampai strap semuanya mengurangi beban limbah. Bahkan konsumen dilibatkan dalam proses daur ulang melalui insentif voucher."
    },
    {
      question: "Apa jaminan kualitas jika semuanya dari limbah?",
      answer: "Semua material sudah melalui proses pemurnian, resin non-toxic, dan pemilihan limbah berkualitas. Bahkan kaca dan stainless steel daur ulang sudah setara produk baru."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-verde-charcoal mb-8">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-16 h-0.5 bg-verde-moss mx-auto"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-verde-moss rounded-full flex items-center justify-center mt-1">
                    <span className="text-verde-cream font-semibold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-verde-charcoal mb-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-verde-sage flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;