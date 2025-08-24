"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { Product } from "@/types";
import { ProductCard } from "./product-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        <Button variant="default">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {filteredAndSortedProducts.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredAndSortedProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/5">
                   <div className="p-1 h-full">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
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
