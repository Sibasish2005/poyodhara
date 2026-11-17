import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
            Origin & Craft
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.2]">
            Pure Hydration, Bottled with Care in{" "}
            <span className="font-semibold text-[#0b5a8e]">South Tripura.</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Facility Photography (7 cols) */}
          <div className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-sm bg-slate-100">
            <Image
              src="/AboutUs.webp"
              alt="Poyodhara packaging facility in South Tripura"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            <p>
              <strong className="text-slate-900 font-semibold">Poyodhara</strong> was founded on a simple premise: everyone deserves access to clean, safe, and refreshing packaged drinking water.
            </p>
            <p>
              Our primary bottling and packaging unit is located at{" "}
              <strong className="text-slate-900 font-medium">
                West Pilak, Jolaibari (near Pilak H.S. School), Santirbazar, South Tripura
              </strong>
              . Here, incoming source water is carefully treated through multi-barrier sediment filtration, reverse osmosis (RO), and ultraviolet disinfection.
            </p>
            <p>
              Every bottle and 20L jar is filled under strict hygienic conditions and sealed with tamper-evident closures, before being dispatched through our regular distribution routes across <strong className="text-[#0b5a8e] font-medium">Agartala and West Tripura</strong>.
            </p>
          </div>

        </div>

        {/* 3 Editorial Pillars - Line-divided, No Boxy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">01 / LOCATION</span>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Tripura Bottling Base</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              Situated in Jolaibari, Santirbazar, operating dedicated supply lines to homes and workplaces in Agartala.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">02 / HYGIENE</span>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Multi-Barrier Treatment</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              Systematic RO and UV sterilization ensures clear taste and reliable quality in every batch.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">03 / CONVENIENCE</span>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Effortless Ordering</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              No complicated registrations. Connect with our team directly via WhatsApp for scheduled deliveries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
