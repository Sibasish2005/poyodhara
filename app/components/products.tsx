"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import productsData from "@/products.json";

interface Product {
  id: number;
  name: string;
  slug: string;
  capacity: string;
  type: string;
  category: string;
  image: string;
  price: string;
  description: string;
  idealFor: string;
  specs: string[];
}

const products: Product[] = productsData;

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Bulk Water", "Bottled Water", "Dispensers & Bulk"];

  const filtered =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="w-full py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-slate-100 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
              The Collection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              Pure Water, <span className="font-semibold text-[#0b5a8e]">Every Size.</span>
            </h2>
          </div>

          {/* Understated Minimalist Category Filter */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm tracking-wide">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`relative pb-1.5 transition-colors ${
                  activeTab === cat
                    ? "text-[#0b5a8e] font-semibold"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {cat === "All" ? "All Products" : cat}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0b5a8e] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - Borderless, Editorial & Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-20">
          {filtered.map((product) => {
            const encodedOrderMsg = encodeURIComponent(
              `Hi Poyodhara, I would like to inquire about ordering ${product.name} (${product.capacity}) for delivery in Agartala.`
            );
            const whatsappUrl = `https://wa.me/919366834064?text=${encodedOrderMsg}`;

            return (
              <article key={product.id} className="group flex flex-col justify-between">
                <div>
                  {/* Clean Product Visual Canvas */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#f7f9fa] overflow-hidden p-6 sm:p-8 flex items-center justify-center transition-all duration-500 group-hover:bg-[#f0f4f8]">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={product.id === 1}
                      />
                    </div>
                  </div>

                  {/* Product Narrative */}
                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 group-hover:text-[#0b5a8e] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 shrink-0">
                        {product.capacity}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                      {product.description}
                    </p>

                    <div className="text-xs font-semibold text-slate-800 mb-4">
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Minimalist Action Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-light">
                    Doorstep supply in Agartala
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b5a8e] hover:text-[#074066] transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Order via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Discretionary Footnote */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p>
            * Prices and container security deposit terms vary with delivery location and order quantity. Final rates confirmed via WhatsApp.
          </p>
          <a
            href="https://wa.me/919366834064?text=Hi%20Poyodhara%2C%20I%20have%20a%20bulk%20or%20office%20order%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-[#0b5a8e] font-medium transition-colors shrink-0"
          >
            Inquire for Office or Bulk Supply →
          </a>
        </div>

      </div>
    </section>
  );
}
