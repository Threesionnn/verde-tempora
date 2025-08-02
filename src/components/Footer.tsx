import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MessageCircle, Mail, Leaf } from "lucide-react";

const Footer = () => {
  const socialLinks = [
      { 
        name: 'Instagram', 
        icon: <Instagram className="w-6 h-6" />, 
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      { 
        name: 'Facebook', 
        icon: <MessageCircle className="w-6 h-6" />, 
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      { 
        name: 'Youtube', 
        icon: <Mail className="w-6 h-6" />, 
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ];

  return (
    <footer className="bg-verde-charcoal text-verde-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-verde-moss" />
              <h3 className="font-serif text-2xl font-semibold">Verde Tempora</h3>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-verde-moss hover:text-verde-sage transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-semibold mb-4">Gabung Buletin Eco-Rewards Kami</h4>
            <p className="text-verde-sand mb-4 text-sm">
              Dapatkan informasi terbaru eksklusif dan raih eco-rewards atas pilihan berkelanjutan Anda.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-verde-sage/20 border-verde-sage/30 text-verde-cream placeholder:text-verde-sand"
              />
              <Button className="bg-verde-moss hover:bg-verde-sage">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-verde-sage/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-verde-sand text-sm">
            © 2025 Verde Tempora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-verde-sand hover:text-verde-cream transition-colors">
              Kontak Kami
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-verde-sand hover:text-verde-cream transition-colors">
              Kebijakan Privasi
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-verde-sand hover:text-verde-cream transition-colors">
              Verde Trash Program
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;