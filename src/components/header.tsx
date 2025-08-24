"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";

export function Header() {
  const { items } = useCart();
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products, brands and more"
              className="pl-10 w-full bg-background text-foreground"
            />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center gap-4">
             <Button variant="ghost" asChild>
              <Link href="/login">
                <User className="mr-2 h-5 w-5" />
                Login
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
