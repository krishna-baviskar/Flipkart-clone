import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import { CategoryNav } from "@/components/category-nav";
import { Banner } from "@/components/banner";
import { SecondaryBanner } from "@/components/secondary-banner";

export default function Home() {
  const products: Product[] = getProducts();
  const topPicks = [...products].sort((a, b) => b.rating - a.rating);
  const electronics = products.filter(p => p.category === "Electronics" || p.category === "Mobiles" || p.category === "Gaming");
  const home = products.filter(p => p.category === "Home & Furniture" || p.category === "Home & Garden" || p.category === "Appliances");
  const fashion = products.filter(p => p.category === "Fashion");
  
  return (
    <div className="space-y-4">
      <CategoryNav />
      <div className="container mx-auto px-4">
        <Banner />
      </div>
      <div className="container mx-auto px-4 space-y-8">
        <ProductList products={products} title="Deals of the Day"/>
        <ProductList products={electronics} title="Best of Electronics" />
        <SecondaryBanner />
        <ProductList products={home} title="Top Picks for Your Home" />
        <ProductList products={fashion} title="Top Fashion Picks" />
        <ProductList products={topPicks} title="Top Picks" />
        <ProductList products={[...products].reverse()} title="Recommended for You" />
      </div>
    </div>
  );
}
