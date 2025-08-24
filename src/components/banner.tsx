"use client";

import Image from "next/image";

export function Banner() {
    const bannerImage = "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e5117445d2fc66ca.jpeg?q=80";
    const fallbackBanner = "https://placehold.co/1600x270.png";

    return (
        <Image
          src={bannerImage}
          alt="Promotional banner"
          width={1600}
          height={270}
          className="w-full rounded-md"
          data-ai-hint="shopping sale"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src === bannerImage) {
              target.src = fallbackBanner;
            }
          }}
        />
    )
}
