"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  showText?: boolean;
}

export function AddToCartButton({ product, quantity = 1, showText = false }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (showText) {
      return (
        <Button onClick={handleAddToCart} size="lg">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      )
  }

  return (
    <Button onClick={handleAddToCart} size="icon" variant="outline">
      <ShoppingCart className="h-5 w-5" />
      <span className="sr-only">Add to cart</span>
    </Button>
  );
}
