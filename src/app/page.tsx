import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import { CategoryNav } from "@/components/category-nav";
import { Banner } from "@/components/banner";

export default function Home() {
  const products: Product[] = getProducts();
  
  return (
    <div>
      <CategoryNav />
      <div className="container mx-auto px-4 py-4">
        <Banner />
      </div>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ProductList products={products} title="Deals of the Day"/>
        <ProductList products={[...products].reverse()} title="Top Picks" />
      </div>
    </div>
  );
}
