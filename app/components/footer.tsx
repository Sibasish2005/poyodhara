import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, Truck, Droplets } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
];

const trustHighlights = [
  { icon: Shield, text: "Safe & Hygienic Packaging" },
  { icon: Truck, text: "Reliable Home & Office Delivery" },
  { icon: Droplets, text: "Quality Tested Drinking Water" },
];

const WHATSAPP_URL =
  "https://wa.me/919366834064?text=Hi%20Poyodhara%2C%20I%20would%20like%20to%20order%20drinking%20water.";

export default function Footer() {
  return (
    <footer className="w-full bg-[#062d47] text-white" aria-label="Site Footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Poyodhara Home">
              <Image
                src="/logo.png"
                alt="Poyodhara Logo"
                width={160}
                height={54}
                className="object-contain w-[130px] h-auto sm:w-[150px] mb-3 brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-sky-100/70 font-medium tracking-wide mb-3">
              Premium Drinking Water
            </p>
            <p className="text-xs sm:text-sm text-sky-100/60 leading-relaxed max-w-xs">
              Providing safe, pure, and high-quality drinking water for homes,
              offices, and businesses in Agartala. Trusted for consistency,
              hygiene, and reliable delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-sky-100/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-sky-300 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li>
                <a
                  href="tel:+919366834064"
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-sky-100/60 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0 text-sky-300" />
                  +91 9366834064
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@poyodhara.com"
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-sky-100/60 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0 text-sky-300" />
                  contact@poyodhara.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-sky-100/60">
                <MapPin className="w-4 h-4 shrink-0 text-sky-300 mt-0.5" />
                Agartala, India
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Order Now
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm sm:text-base font-semibold py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] w-full sm:w-auto"
              aria-label="Order on WhatsApp"
            >
              {/* WhatsApp SVG icon */}
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
            <p className="text-[10px] sm:text-xs text-sky-100/40 leading-relaxed">
              Quick response • Easy ordering • Fast delivery
            </p>
          </div>
        </div>

        {/* Trust Highlights */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {trustHighlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 justify-center sm:justify-start"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sky-500/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-sky-300" />
                </div>
                <span className="text-xs sm:text-sm text-sky-100/70">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-sky-100/40 text-center sm:text-left">
            © {new Date().getFullYear()} Poyodhara. All rights reserved.
          </p>
          <Link
            href="/terms-and-conditions"
            className="text-[10px] sm:text-xs text-sky-100/40 hover:text-sky-200 transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <p className="text-[10px] sm:text-xs text-sky-100/30 text-center sm:text-right">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/sibasish-chakraborti-5b55b82b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-100/50 hover:text-sky-200 transition-colors duration-200"
            >
              Sibasish Chakraborti
            </a>
          </p>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Poyodhara",
            description:
              "Premium drinking water delivery service in Agartala, providing safe and pure water for homes, offices, and businesses.",
            telephone: "+919366834064",
            email: "contact@poyodhara.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agartala",
              addressCountry: "IN",
            },
            url: "https://poyodhara.com",
          }),
        }}
      />
    </footer>
  );
}
