import { ArrowUpRight, MapPin, Phone, Clock } from "lucide-react";

export default function MapLocation() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=West+Pilak,+Jolaibari,+Tripura&t=&z=13&ie=UTF8&iwloc=&output=embed";

  const googleMapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=West+Pilak+Jolaibari+Santirbazar+South+Tripura";

  return (
    <section id="location" className="w-full py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
            Facility & Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.2]">
            Where We Bottle.{" "}
            <span className="font-semibold text-[#0b5a8e]">Where We Supply.</span>
          </h2>
        </div>

        {/* Split Layout: Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0b5a8e]">
                Bottling Unit
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900">
                West Pilak, Jolaibari
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Near Pilak H.S. School, Santirbazar, South Tripura, Tripura.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0b5a8e]">
                Primary Supply Reach
              </span>
              <h3 className="text-base font-medium text-slate-900">
                Agartala & West Tripura
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                Regular daily delivery of 20L jars and packaged water to homes, workplaces, and institutions across Agartala.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Orders & Enquiries: 7:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-4 h-4 text-slate-400" />
                <a href="tel:+919366834064" className="hover:text-[#0b5a8e] transition-colors">
                  +91 9366834064
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b5a8e] hover:text-[#074066] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] text-slate-400 font-light">
                Facility visits by prior appointment
              </span>
            </div>
          </div>

          {/* Right Map Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 relative">
              <iframe
                title="Poyodhara Facility Location - West Pilak, Jolaibari, South Tripura"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Subtle watermark / landmark note */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-slate-700 border border-slate-200 shadow-sm flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0b5a8e] shrink-0" />
                <span className="font-medium truncate">
                  Vicinity: West Pilak, Jolaibari, Santirbazar
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
