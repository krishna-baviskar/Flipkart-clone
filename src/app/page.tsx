import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types";
import { CategoryNav } from "@/components/category-nav";
import { Banner } from "@/components/banner";
import { SecondaryBanner } from "@/components/secondary-banner";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductListSkeleton() {
  return <Skeleton className="h-[350px] w-full" />;
}


export default function Home() {
  const products: Product[] = getProducts();
  const topPicks = [...products].sort((a, b) => b.rating - a.rating);
  const electronics = products.filter(p => p.category === "Electronics");
  const gaming = products.filter(p => p.category === "Gaming");
  const mobiles = products.filter(p => p.category === "Mobiles");
  const appliances = products.filter(p => p.category === "Appliances");
  const home = products.filter(p => p.category === "Home & Furniture" || p.category === "Home & Garden");
  const fashion = products.filter(p => p.category === "Fashion");
  const fitness = products.filter(p => p.category === "Fitness" || p.category === "Sports & Outdoors");
  const books = products.filter(p => p.category === "Books");
  const beauty = products.filter(p => p.category === "Beauty");
  const grocery = products.filter(p => p.category === "Grocery");
  
  return (
    <div className="space-y-4">
      <CategoryNav />
      <div className="container mx-auto px-4">
        <Banner />
      </div>
      <div className="container mx-auto px-4 space-y-8">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={products} title="Deals of the Day"/>
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={electronics} title="Best of Electronics" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={mobiles} title="Mobiles & Accessories" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={gaming} title="Top Picks in Gaming" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={appliances} title="TVs & Appliances" />
        </Suspense>
        <SecondaryBanner />
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={home} title="Top Picks for Your Home" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={fashion} title="Top Fashion Picks" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={beauty} title="Beauty, Food, Toys & more" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={grocery} title="Top Picks in Grocery" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={fitness} title="Sports & Fitness" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={books} title="Bestselling Books" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={topPicks} title="Top Picks" />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={[...products].reverse()} title="Recommended for You" />
        </Suspense>
      </div>
    </div>
  );
}
