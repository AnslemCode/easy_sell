import Card from "@/components/Card";
import { createClient } from "@/supabase/client";
import { getImageUrl } from "@/utils";
import { notFound } from "next/navigation";
// import Image from "next/image";

export const revalidate = 3600;

export default async function Home() {
  const supabase = createClient();

  const { data: topProducts, error: topProductsError } = await supabase
    .from("easysell-products")
    .select()
    .eq("boost", true);

  const { data: products, error } = await supabase
    .from("easysell-products")
    .select();

  if (!products) {
    return notFound();
  }

  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16 uppercase">Our top products</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {topProducts ? (
              topProducts.map((product) => (
                <Card
                  key={`${product.name}-${product.id}`}
                  {...product}
                  imageUrl={getImageUrl(product.imageUrl)}
                />
              ))
            ) : (
              <p className="text-xl pt-16 text-gray-800">
                All our products are gone...
              </p>
            )}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16 uppercase">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={`${product.name}-${product.id}`}
              {...product}
              imageUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/storage/${product.imageUrl}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
