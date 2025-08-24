"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
        title: "Item removed",
        description: `${productName} removed from cart.`,
    })
  }
  
  const handleClearCart = () => {
    clearCart();
    toast({
        title: "Cart cleared",
        description: "Your shopping cart is now empty.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="flex items-center">
                  <div className="relative h-24 w-24 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      data-ai-hint="product image"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <Link href={`/product/${product.id}`} className="font-semibold hover:text-primary">{product.name}</Link>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-4 flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        updateQuantity(product.id, parseInt(e.target.value))
                      }
                      className="w-20 text-center"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(product.id, product.name)}
                    >
                      <Trash2 className="h-5 w-5 text-destructive" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
             <div className="text-right">
                <Button variant="outline" onClick={handleClearCart}>
                  Clear Cart
                </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
