"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/hooks/use-wishlist";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast({
        title: "Moved to cart",
        description: `${product.name} has been moved to your cart.`
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ({items.length})</h1>
      {items.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
          <p className="text-muted-foreground mt-2">
            Explore products and add your favorites to your wishlist.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <Card key={product.id} className="overflow-hidden flex flex-col">
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative h-48 w-full bg-white">
                    <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    data-ai-hint="product image"
                    />
                </div>
              </Link>
                <CardHeader className="p-4">
                  <CardTitle className="text-base font-medium h-12 overflow-hidden">
                    <Link href={`/product/${product.id}`} className="hover:text-primary">{product.name}</Link>
                  </CardTitle>
                </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-lg font-bold">₹{product.price.toFixed(2)}</p>
                 <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-semibold bg-green-600 text-white px-2 py-0.5 rounded-sm">{product.rating} ★</span>
                    <span className="text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
                 </div>
              </CardContent>
              <CardFooter className="p-2 border-t flex gap-2">
                <Button variant="outline" size="sm" className="w-full" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4"/>
                    Move to Cart
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-muted-foreground hover:text-destructive"
                >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
