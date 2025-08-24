import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 hover:shadow-lg border-0">
        <Link href={`/product/${product.id}`} className="block text-center p-4">
          <div className="relative h-40 w-40 mx-auto">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              data-ai-hint="product image"
            />
          </div>
        </Link>
      <CardContent className="p-2 flex-grow flex flex-col items-center text-center">
        <Link href={`/product/${product.id}`} className="block">
          <p className="text-sm font-medium leading-snug hover:text-primary transition-colors">
            {product.name}
          </p>
           <p className="text-sm text-green-600 font-semibold mt-1">₹{product.price.toFixed(2)}</p>
           <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        </Link>
      </CardContent>
    </Card>
  );
}
