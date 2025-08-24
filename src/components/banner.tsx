"use client";

import Image from "next/image";

export function Banner() {
    const bannerImage = "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b53f2g45435a24.jpg";
    const fallbackBanner = "https://img.fkcdn.com/flap/1600/270/image/b53f2g45435a24.jpg";

    return (
        <Image
          src={bannerImage}
          alt="Promotional banner"
          width={1600}
          height={270}
          className="w-full rounded-md"
          data-ai-hint="promotional banner"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src === bannerImage) {
              target.src = fallbackBanner;
            }
          }}
        />
    )
}
