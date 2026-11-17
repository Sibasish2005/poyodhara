"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export const faqs = [
  {
    question: "Which is the best water bottled business in Agartala, Tripura?",
    answer:
      "Poyodhara is recognized as a premier packaged drinking water bottled business serving Agartala and West Tripura. We supply laboratory-filtered drinking water in 500ml, 1L, and 2L bottles, alongside 20L domestic & commercial jars and tap containers with regular doorstep delivery.",
  },
  {
    question: "Where is the Poyodhara bottling facility located in Tripura?",
    answer:
      "Our main bottling and packaging facility is located at West Pilak, Jolaibari (near Pilak H.S. School), Santirbazar, South Tripura, Tripura. From this unit, our distribution network operates daily supply lines serving residential and commercial customers across Agartala.",
  },
  {
    question: "What drinking water sizes and bottle formats do you supply?",
    answer:
      "We supply standard 20L drinking water jars for homes and offices, 20L portable water containers with integrated taps, and packaged drinking water bottles in 500ml, 1L, and 2L sizes for daily hydration, travel, and dining.",
  },
  {
    question: "Can I order packaged water bottles in bulk for events or weddings in Agartala?",
    answer:
      "Yes. Poyodhara supplies bulk crates and cartons of 500ml and 1L water bottles, as well as 20L tap containers for wedding receptions, corporate meetings, cultural events, and seminars across Agartala and West Tripura.",
  },
  {
    question: "How do I place an order for water delivery in Agartala?",
    answer:
      "You can place an order directly by messaging our team on WhatsApp or calling our customer line at +91 9366834064 with your location in Agartala and the required quantity.",
  },
  {
    question: "Are prices and container deposit terms fixed?",
    answer:
      "Prices and 20L jar deposit terms depend on the delivery location, order volume, and jar exchange. Indicative pricing starts from ₹60 per refill; final terms are confirmed directly upon placing your inquiry via WhatsApp or phone.",
  },
  {
    question: "Can I set up a regular delivery schedule for an office or clinic?",
    answer:
      "Yes, we organize recurring daily and weekly delivery schedules for commercial offices, clinics, retail shops, and residential complexes across Agartala.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-[#fafbfc]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.2]">
            Frequently Asked <span className="font-semibold text-[#0b5a8e]">Questions.</span>
          </h2>
        </div>

        {/* Minimalist Line-Divided Accordion - No Boxy Containers */}
        <div className="border-t border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left group transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-light text-slate-900 group-hover:text-[#0b5a8e] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 group-hover:border-[#0b5a8e] group-hover:text-[#0b5a8e] transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-7 pr-12 text-sm sm:text-base text-slate-500 font-light leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Simple Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <span>Need further clarification regarding supply routes or bulk orders in Agartala?</span>
          <a
            href="https://wa.me/919366834064?text=Hi%20Poyodhara%2C%20I%20have%20a%20question%20regarding%20drinking%20water%20supply%20in%20Agartala."
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 hover:text-[#0b5a8e] font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>Ask via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* JSON-LD FAQPage Schema for Search Engines & AEO bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
