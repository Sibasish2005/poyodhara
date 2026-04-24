import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - Poyodhara",
  description:
    "Read the terms and conditions for ordering premium drinking water from Poyodhara in Agartala.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#062d47] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-sky-200 hover:text-white transition-colors mb-4 sm:mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-sky-100/60 mt-2">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
          Welcome to <strong className="text-[#0b5a8e]">Poyodhara</strong>. By
          placing an order with us, you agree to the following terms:
        </p>

        {/* Section 1 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            1. Orders & Delivery
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>
              Delivery times may vary depending on location and availability.
            </li>
            <li>
              Orders are confirmed via <strong>WhatsApp or phone</strong>.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            2. Product Availability
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>
              All products (500ml, 1L, 2L bottles, 20L jars, containers) are
              subject to availability.
            </li>
            <li>
              In case of unavailability, we will inform you and suggest
              alternatives.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            3. Pricing
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>Prices are subject to change without prior notice.</li>
            <li>
              Final price will be confirmed at the time of order.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            4. Payments
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>
              Payments can be made via{" "}
              <strong>cash, UPI, or other accepted methods</strong> at the time
              of delivery or as agreed.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            5. Returns & Replacements
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>
              Returns are only accepted if the product is{" "}
              <strong>damaged, leaking, or incorrect</strong> at the time of
              delivery.
            </li>
            <li>
              Any issues must be reported immediately upon delivery.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            6. Usage
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 pl-1">
            <li>
              Our products are intended for{" "}
              <strong>drinking purposes only</strong>.
            </li>
            <li>
              Proper storage is recommended to maintain quality.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-[#0b5a8e] mb-3">
            7. Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
            For any queries or orders, contact us at:
          </p>
          <div className="flex flex-col gap-2 text-sm sm:text-base text-gray-600">
            <a
              href="tel:+919366834064"
              className="hover:text-[#0b5a8e] transition-colors"
            >
              📞 +91 9366834064
            </a>
            <span>💬 WhatsApp available on the same number</span>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 italic">
            <strong className="text-gray-600">Poyodhara</strong> reserves the
            right to update these terms at any time without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
}
