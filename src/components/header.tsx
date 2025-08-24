"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, MoreVertical, Store, ChevronDown, Heart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useWishlist } from "@/hooks/use-wishlist";

export function Header() {
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-20 items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex flex-col items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products, brands and more"
              className="pl-10 w-full bg-secondary text-foreground rounded-lg h-10"
            />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center gap-2 sm:gap-6">
            <Button variant="ghost" asChild className="hidden md:flex text-base font-medium hover:bg-primary/90 rounded-lg px-4 py-2">
                <Link href="#">
                    <Store className="mr-2 h-5 w-5"/>
                    Become a Seller
                </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className="text-base font-medium hover:bg-primary/90 rounded-lg px-4 py-2">
                    <User className="mr-2 h-5 w-5" />
                    Sign in
                    <ChevronDown className="ml-1 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/signup">New customer? Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/login">My Profile</Link>
                </DropdownMenuItem>
                 <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                    {wishlistItems.length > 0 && (
                        <span className="ml-auto text-xs bg-accent text-accent-foreground rounded-full px-2">
                            {wishlistItems.length}
                        </span>
                    )}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className="text-base font-medium hover:bg-primary/90 rounded-lg px-4 py-2">
              <Link href="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </Button>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/90 rounded-lg">
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Notifications</DropdownMenuItem>
                    <DropdownMenuItem>24x7 Customer Care</DropdownMenuItem>
                    <DropdownMenuItem>Download App</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
