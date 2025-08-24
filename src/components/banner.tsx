"use client";

import Image from "next/image";

export function Banner() {
    const bannerImage = "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop";
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
