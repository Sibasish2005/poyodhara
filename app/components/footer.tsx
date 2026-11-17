import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Facility Location", href: "#location" },
  { name: "FAQ", href: "#faq" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const productSizes = [
  "20L Drinking Water Jar",
  "20L Water Container with Tap",
  "2L Bottled Drinking Water",
  "1L Bottled Drinking Water",
  "500ml Bottled Drinking Water",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#051421] text-white py-16 sm:py-20 px-5 sm:px-8 md:px-12 border-t border-white/5" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Brand & Action Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <Link href="/" aria-label="Poyodhara Homepage" className="inline-block mb-4">
              <Image
                src="/logo.webp"
                alt="Poyodhara"
                width={140}
                height={46}
                className="object-contain w-[125px] brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              Best water bottled business and 20L jar delivery in Agartala, Tripura. Bottled at our facility in South Tripura with daily scheduled routes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="tel:+919366834064"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Hotline: +91 9366834064
            </a>
            <a
              href="https://wa.me/919366834064?text=Hi%20Poyodhara%2C%20I%20would%20like%20to%20order%20drinking%20water."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full transition-colors"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 sm:py-16 text-xs text-slate-400 font-light border-b border-white/10">
          
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block mb-4">
              Unit Location
            </span>
            <p className="leading-relaxed text-slate-300">
              West Pilak, Jolaibari<br />
              Near Pilak H.S. School<br />
              Santirbazar, South Tripura<br />
              Tripura, India
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block mb-4">
              Supply Reach
            </span>
            <p className="leading-relaxed">
              Agartala & West Tripura<br />
              Residential, Office & Event Supply<br />
              Operating Hours: 7:00 AM – 9:00 PM
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block mb-4">
              Products
            </span>
            <ul className="space-y-2">
              {productSizes.map((name) => (
                <li key={name}>
                  <Link href="#products" className="hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400 leading-relaxed font-light">
          <p className="max-w-2xl">
            Disclaimer: All images, specifications, and prices are indicative and for representational purposes. Exact delivery schedules, bottle designs, container deposit terms, and final rates are confirmed directly upon placing an inquiry via WhatsApp or phone.
          </p>
          <div className="flex items-center gap-4 text-slate-400 shrink-0">
            <span>© {new Date().getFullYear()} Poyodhara • Best Water Bottled Business in Agartala, Tripura</span>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/sibasish-chakraborti-5b55b82b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              Developed by Sibasish Chakraborti
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
