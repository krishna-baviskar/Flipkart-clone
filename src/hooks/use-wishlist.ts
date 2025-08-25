"use client";

import { useContext } from "react";
import { WishlistContext, type WishlistContextType } from "@/context/wishlist-provider";

export function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
   if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
