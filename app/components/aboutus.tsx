import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Shield, Truck, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Droplets,
    title: "Pure Water",
    desc: "Advanced filtration for every drop",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Strict quality control standards",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    desc: "From source to your doorstep",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Eco-friendly processes at every step",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <Badge variant="secondary" className="mb-3 text-[#0b5a8e] bg-sky-100 border-sky-200">
            Who We Are
          </Badge>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b5a8e] mb-3 sm:mb-4"
          >
            About Poyodhara
          </h2>
        </div>

        {/* Main Content: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-10 sm:mb-14 md:mb-16">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-1">
            <Image
              src="/AboutUs.png"
              alt="Poyodhara - Premium drinking water purification and bottling facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b5a8e]/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 sm:gap-5 order-2">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              At <strong className="text-[#0b5a8e] font-semibold">Poyodhara</strong>, we are committed to delivering safe, pure, and high-quality drinking water that supports healthier lives every day. Our mission is simple — to ensure that every drop you consume meets the highest standards of cleanliness, taste, and reliability.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              We offer a wide range of packaged drinking water solutions, from convenient 500ml bottles to large 20-liter jars and containers, designed to meet the needs of homes, offices, and businesses. Whether it&apos;s daily hydration or bulk supply, our products are crafted to provide consistent quality you can trust.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Our purification process combines advanced filtration and strict quality control measures to ensure that every bottle and container maintains purity from source to delivery. We prioritize hygiene, safety, and sustainability at every step.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              At Poyodhara, we believe that access to clean drinking water is essential — not a luxury. That&apos;s why we continuously work to improve our processes, expand our reach, and serve our customers better.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0b5a8e] mt-2 italic">
              &ldquo;Drink the Difference. Experience Purity.&rdquo;
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-sky-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-sky-50/50"
            >
              <CardContent className="flex flex-col items-center text-center gap-2 sm:gap-3 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b5a8e]" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#0b5a8e]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Poyodhara",
            description:
              "Poyodhara delivers safe, pure, and high-quality drinking water in multiple sizes for homes, offices, and businesses.",
            url: "https://poyodhara.com",
            brand: {
              "@type": "Brand",
              name: "Poyodhara",
              slogan: "Drink the Difference. Experience Purity.",
            },
          }),
        }}
      />
    </section>
  );
}
