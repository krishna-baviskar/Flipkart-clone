import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import { CategoryNav } from "@/components/category-nav";
import { Banner } from "@/components/banner";
import { SecondaryBanner } from "@/components/secondary-banner";

export default function Home() {
  const products: Product[] = getProducts();
  const topPicks = [...products].sort((a, b) => b.rating - a.rating);
  
  return (
    <div className="space-y-4">
      <CategoryNav />
      <div className="container mx-auto px-4">
        <Banner />
      </div>
      <div className="container mx-auto px-4 space-y-8">
        <ProductList products={products} title="Deals of the Day"/>
        <SecondaryBanner />
        <ProductList products={topPicks} title="Top Picks" />
        <ProductList products={[...products].reverse()} title="Recommended for You" />
      </div>
    </div>
  );
}
