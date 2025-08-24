import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";

export default function Home() {
  const products: Product[] = getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList products={products} />
    </div>
  );
}
