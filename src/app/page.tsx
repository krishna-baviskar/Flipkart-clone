import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import Image from "next/image";

export default function Home() {
  const products: Product[] = getProducts();

  return (
    <div>
        <div className="container mx-auto px-4 py-4">
            <Image 
                src="https://placehold.co/1200x300/f0f0f0/f0f0f0" 
                alt="Promotional banner"
                width={1200}
                height={300}
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
