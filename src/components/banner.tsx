"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bannerImages = [
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e5117445d2fc66ca.jpeg?q=80", alt: "Banner 1", hint: "electronics sale" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/b8da94ea4f2b585c.jpg?q=80", alt: "Banner 2", hint: "mobile phone launch" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8c46a61fac2731d1.jpeg?q=80", alt: "Banner 3", hint: "fashion discount" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d360216434863a8b.jpeg?q=80", alt: "Banner 4", hint: "home appliances" },
]

export function Banner() {
  return (
    <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full"
    >
      <CarouselContent>
        {bannerImages.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[270px] w-full">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="w-full rounded-md object-cover"
                data-ai-hint={banner.hint}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/1600x270.png`;
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50" />
    </Carousel>
  );
}