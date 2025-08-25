."use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const bannerImages = [
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e5117445d2fc66ca.jpeg?q=80", alt: "Banner 1", hint: "electronics sale" },
   { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/2f933017cefe86ac.jpeg?q=80", alt: "Banner 2", hint: "mobile phone launch" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80", alt: "Banner 3", hint: "fashion discount" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a5a7228004d1191f.jpg?q=80", alt: "Banner 4", hint: "home appliances" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e5117445d2fc66ca.jpeg?q=80", alt: "Banner 5", hint: "travel booking" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80", alt: "Banner 6", hint: "grocery deals" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/2f933017cefe86ac.jpeg?q=80", alt: "Banner 7", hint: "special offer" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80", alt: "Banner 8", hint: "new offer" },
]

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerImages.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="relative h-28 sm:h-40 md:h-[270px] w-full">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="w-full rounded-md object-cover"
                data-ai-hint={banner.hint}
                sizes="(max-width: 768px) 100vw, 1620px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/1620x270.png`;
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 h-8 w-8 sm:left-4" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 h-8 w-8 sm:right-4" />
    </Carousel>
  );
}
