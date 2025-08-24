"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, MoreVertical, Store, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { items } = useCart();
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products, brands and more"
              className="pl-10 w-full bg-background text-foreground"
            />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" asChild className="hidden md:flex">
                <Link href="#">
                    <Store className="mr-2"/>
                    Become a Seller
                </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost">
                    <User className="mr-2" />
                    Login
                    <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/signup">New customer? Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/login">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
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
                    <Button variant="ghost" size="icon">
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
