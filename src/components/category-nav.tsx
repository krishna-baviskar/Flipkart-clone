import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Grocery", image: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png" },
  { name: "Mobiles", image: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png" },
  { name: "Fashion", image: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png" },
  { name: "Electronics", image: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png" },
  { name: "Home & Furniture", image: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg" },
  { name: "Appliances", image: "https://rukminim1.flixcart.com/flap/80/80/image/0139228b2f7eb413.jpg" },
  { name: "Travel", image: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png" },
  { name: "Beauty, Toys & More", image: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png" },
  { name: "Two Wheelers", image: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png" },
];

export function CategoryNav() {
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex justify-between items-start py-2 overflow-x-auto">
          {categories.map((category) => (
            <Link href="#" key={category.name} className="flex flex-col items-center justify-start text-center gap-1 p-2 flex-shrink-0 w-24">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                 <Image src={category.image} alt={category.name} width={64} height={64} className="object-contain" data-ai-hint="category icon"/>
              </div>
              <span className="text-xs sm:text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
