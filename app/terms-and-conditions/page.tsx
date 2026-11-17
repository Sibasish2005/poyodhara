import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - Poyodhara Drinking Water",
  description:
    "Terms and conditions for ordering packaged drinking water and 20L water jars from Poyodhara in Tripura.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="bg-[#051421] text-white py-12 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-2">
            Effective Date: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </div>
      </header>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 text-xs sm:text-sm text-slate-600 leading-relaxed font-light space-y-8">
        
        <p className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
          Welcome to <strong className="text-[#0b5a8e]">Poyodhara</strong>. These Terms & Conditions govern the supply, delivery, and purchase of packaged drinking water, 20L bulk water jars, 20L tap containers, and related products provided by Poyodhara in Tripura, India. By requesting an order, accepting delivery, or using our website, you agree to be bound by these terms.
        </p>

        {/* Section 1 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            1. Nature of Service & Orders
          </h2>
          <p>
            Poyodhara supplies packaged drinking water in retail bottles and commercial/domestic 20L containers. Orders are placed and confirmed directly via telephone or WhatsApp. No binding agreement is created until Poyodhara or its authorized distribution representative explicitly confirms the order quantity, delivery address, and scheduled dispatch window.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            2. Pricing, Deposits & Invoices
          </h2>
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>
              All prices shown on promotional materials or this website are indicative and subject to change without prior notice based on delivery distance, logistics, and order quantities.
            </li>
            <li>
              The final payable amount, applicable delivery surcharges (such as multi-story walk-up delivery fees if applicable), and container security deposits will be communicated at the time of order confirmation.
            </li>
            <li>
              Payments must be settled upon delivery via Cash on Delivery (COD), UPI, or previously agreed commercial credit arrangements.
            </li>
          </ul>
        </section>

        {/* Section 3 - Critical for 20L Water Jars */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            3. Reusable 20L Water Jars & Container Ownership
          </h2>
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>
              Unless explicitly purchased outright under a written invoice, all 20-litre water jars, containers, and dispenser taps remain the exclusive property of Poyodhara.
            </li>
            <li>
              Customers holding reusable jars under a deposit scheme are responsible for maintaining the container in clean, undamaged condition. Jars that are damaged, burnt, punctured, painted, or exposed to toxic chemicals will forfeit the deposit.
            </li>
            <li>
              <strong>Strict Prohibition:</strong> Customers are strictly prohibited from filling Poyodhara jars with non-potable liquids, borewell raw water, kerosene, oil, chemicals, or third-party unverified liquids. Poyodhara disclaims any liability arising from such unauthorized misuse.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            4. Delivery Schedules & Force Majeure
          </h2>
          <p>
            While Poyodhara strives for prompt same-day or scheduled delivery across Agartala and surrounding Tripura regions, stated delivery timeframes (e.g. 2–4 hours) are estimates. Poyodhara shall not be held liable for delayed deliveries caused by heavy monsoon rains, flood conditions, traffic jams, vehicle breakdowns, road blockages, strikes, civic unrest, or events beyond our reasonable control (Force Majeure).
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            5. Inspection, Acceptance & Returns
          </h2>
          <p>
            Customers are advised to inspect the sealed cap and container integrity at the time of physical delivery. If any bottle or jar exhibits leakage, broken tamper-proof sealing, or defect, it must be reported to the delivery personnel immediately for replacement. Once accepted, water products are non-returnable due to hygiene and safety regulations.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            6. Limitation of Liability & Warranty Disclaimer
          </h2>
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>
              Poyodhara warrants that its packaged drinking water is treated and filled in accordance with standard hygiene practices.
            </li>
            <li>
              To the maximum extent permitted by applicable Indian law, Poyodhara shall not be liable for any indirect, special, incidental, or consequential damages resulting from improper storage, prolonged exposure to direct sunlight by the customer, or storage in unhygienic customer premises.
            </li>
            <li>
              In all circumstances, our maximum aggregate liability for any claim shall not exceed the invoice amount paid by the customer for the specific product in dispute.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            7. Manufacturing Facility & Physical Visits
          </h2>
          <p>
            The bottling and packaging facility at West Pilak, Jolaibari, near Pilak H.S. School, Santirbazar, South Tripura is a private manufacturing facility. The location displayed on the website map is an approximate regional vicinity provided for informational orientation. Unauthorized physical entry, trespassing, or unscheduled visits without prior administrative clearance are strictly prohibited.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            8. Website Content & Representational Disclaimers
          </h2>
          <p>
            All photographs, product mockups, bottle silhouettes, and graphic presentations on this website are for representational and illustrative purposes only. Actual bottle shapes, embossed labels, and caps may vary slightly across production batches.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-2.5">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            9. Governing Law & Dispute Jurisdiction
          </h2>
          <p>
            These Terms & Conditions, and all transactions relating to Poyodhara products, shall be governed by and construed in accordance with the laws of India. Any legal dispute, claim, or difference arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Tripura, India</strong>.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-2.5 pt-4 border-t border-slate-200">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            10. Contact Information
          </h2>
          <p>
            For any queries, commercial contracts, or clarifications regarding these terms:
          </p>
          <div className="space-y-1 text-slate-700">
            <p><strong>Poyodhara Drinking Water</strong></p>
            <p>Unit Location: West Pilak, Jolaibari, Santirbazar, South Tripura, Tripura, India</p>
            <p>Customer Helpline: <a href="tel:+919366834064" className="text-[#0b5a8e] hover:underline">+91 9366834064</a></p>
            <p>Email: <a href="mailto:contact@poyodhara.com" className="text-[#0b5a8e] hover:underline">contact@poyodhara.com</a></p>
          </div>
        </section>

      </main>
    </div>
  );
}
