"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

export function WishlistButton({ product, className }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation if the button is inside a Link
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      variant="outline"
      className={cn("bg-background/80", className)}
    >
      <Heart
        className={cn(
          "h-5 w-5 transition-colors",
          isWishlisted ? "text-red-500 fill-red-500" : "text-foreground"
        )}
      />
      <span className="sr-only">
        {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      </span>
    </Button>
  );
}
