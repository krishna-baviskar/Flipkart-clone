"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function SecondaryBanner() {
  const bannerImage = "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1887&auto=format&fit=crop";

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <Image
        src={bannerImage}
        alt="Secondary Promotional Banner"
        fill
        className="object-cover"
        data-ai-hint="fashion sale"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
        <h2 className="text-3xl md:text-4xl font-bold">Big Fashion Festival</h2>
        <p className="mt-2 text-lg md:text-xl">Up to 70% off on top brands</p>
        <Button asChild className="mt-6" size="lg">
          <Link href="#">Shop Now</Link>
        </Button>
      </div>
    </div>
  );
}
