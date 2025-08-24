"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { Product } from "@/types";
import { ProductCard } from "./product-card";
import { ProductListControls } from "./product-list-controls";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const searchParams = useSearchParams();

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    const query = searchParams.get("q")?.toLowerCase();
    const sort = searchParams.get("sort");

    if (query) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "relevance":
      default:
        // Default order, or can be improved with a relevance score
        break;
    }

    return result;
  }, [products, searchParams]);

  return (
     <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Deals of the Day</CardTitle>
        <Button variant="primary">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredAndSortedProducts.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        ) : (
            <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground">
                Try adjusting your search or filters.
            </p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
