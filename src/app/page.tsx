import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import Image from "next/image";
import { CategoryNav } from "@/components/category-nav";

export default function Home() {
  const products: Product[] = getProducts();

  return (
    <div>
      <CategoryNav />
      <div className="container mx-auto px-4 py-4">
        <Image
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b53f2g45435a24.jpg"
          alt="Promotional banner"
          width={1600}
          height={270}
          className="w-full rounded-md"
          data-ai-hint="promotional banner"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <ProductList products={products} />
      </div>
    </div>
  );
}
