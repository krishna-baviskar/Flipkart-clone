"use client";

import { createContext, useState, type ReactNode } from "react";
import type { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

export interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [items, setItems] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToWishlist = (product: Product) => {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        return prevItems; // Already in wishlist
      }
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((prevItems) => {
        const productToRemove = prevItems.find(item => item.id === productId);
        if (productToRemove) {
             toast({
                title: "Removed from wishlist",
                description: `${productToRemove.name} has been removed from your wishlist.`,
            })
        }
        return prevItems.filter((item) => item.id !== productId)
    });
  };
  
  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ items, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
