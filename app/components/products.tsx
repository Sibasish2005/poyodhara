import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productsData from "@/products.json";

interface Product {
  id: number;
  name: string;
  slug: string;
  capacity: string;
  type: string;
  image: string;
  description: string;
  category: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const products: Product[] = productsData;

export default function Products() {
  return (
    <section
      id="products"
      className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-sky-50/50"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <Badge variant="secondary" className="mb-3 text-[#0b5a8e] bg-sky-100 border-sky-200">
            Our Range
          </Badge>
          <h2
            id="products-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b5a8e] mb-3 sm:mb-4"
          >
            Premium Drinking Water
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Pure, refreshing water available in multiple sizes to suit every need — from travel-friendly bottles to bulk storage containers.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {products.map((product) => (
            <article key={product.id} aria-label={product.seo.title}>
              <Card className="group h-full overflow-hidden border-sky-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 bg-white">
                {/* Product Image */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.seo.description}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <Badge className="bg-[#0b5a8e] text-white text-[10px] sm:text-xs hover:bg-[#084163]">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg text-[#0b5a8e]">
                      {product.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px] sm:text-xs text-sky-700 border-sky-200 shrink-0">
                      {product.capacity}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {product.description}
                  </CardDescription>

                  {/* SEO Keywords as hidden structured data */}
                  <meta itemProp="name" content={product.name} />
                  <meta itemProp="description" content={product.seo.description} />
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Poyodhara Products",
            description: "Premium drinking water products from Poyodhara",
            numberOfItems: products.length,
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                description: product.seo.description,
                image: product.image,
                category: product.category,
                brand: {
                  "@type": "Brand",
                  name: "Poyodhara",
                },
              },
            })),
          }),
        }}
      />
    </section>
  );
}
