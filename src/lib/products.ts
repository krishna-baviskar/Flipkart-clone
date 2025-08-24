import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    name: "QuantumCore Laptop Pro",
    description: "Experience unparalleled performance with the QuantumCore Laptop Pro. Featuring the latest generation processor, a stunning 4K display, and a sleek, lightweight design, it's the perfect tool for professionals and creatives alike. With all-day battery life, you can work from anywhere without compromise.",
    price: 149999.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    category: "Electronics",
    specifications: {
      "Processor": "16-Core QuantumFusion",
      "Display": "15.6\" 4K UHD OLED",
      "RAM": "32GB DDR5",
      "Storage": "2TB NVMe SSD",
      "Graphics": "NVIDIA RTX 5070",
      "OS": "Windows 12 Pro",
    },
    reviews: [
      { id: "r1-1", author: "Alex D.", rating: 5, comment: "Incredibly fast and the screen is gorgeous. Best laptop I've ever owned." },
      { id: "r1-2", author: "Jane S.", rating: 4, comment: "Great performance, but it can get a bit warm under heavy load." },
    ],
    seller: "TechNexa",
  },
  {
    id: "2",
    name: "AuraSound Wireless Earbuds",
    description: "Immerse yourself in crystal-clear audio with AuraSound Wireless Earbuds. Featuring active noise cancellation, a comfortable ergonomic fit, and seamless Bluetooth 5.3 connectivity. Enjoy up to 30 hours of playtime with the compact charging case.",
    price: 12999.00,
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70",
    category: "Electronics",
    specifications: {
      "Connectivity": "Bluetooth 5.3",
      "Playtime": "8 hours (30 hours with case)",
      "Features": "Active Noise Cancellation, Transparency Mode",
      "Water Resistance": "IPX5",
    },
    reviews: [
      { id: "r2-1", author: "Mike P.", rating: 5, comment: "The noise cancellation is a game-changer for my commute." },
      { id: "r2-2", author: "Sarah K.", rating: 4, comment: "Sound quality is excellent, but the fit took some getting used to." },
    ],
    seller: "AudioPhile Inc.",
  },
  {
    id: "3",
    name: "Eco-Comfort Memory Foam Mattress",
    description: "Upgrade your sleep with the Eco-Comfort Memory Foam Mattress. Made from sustainable, plant-based materials, this mattress provides optimal support and pressure relief. The breathable cover keeps you cool all night long. Comes with a 100-night trial.",
    price: 7990.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    category: "Home & Furniture",
    specifications: {
      "Size": "Queen",
      "Material": "Plant-based memory foam",
      "Firmness": "Medium-Firm",
      "Trial": "100 Nights",
      "Warranty": "10 Years",
    },
    reviews: [
      { id: "r3-1", author: "Emily R.", rating: 5, comment: "I've never slept better. It's the perfect balance of soft and supportive." },
      { id: "r3-2", author: "David L.", rating: 5, comment: "Worth every penny. My back pain has significantly improved." },
    ],
    seller: "SleepWell Co.",
  },
  {
    id: "4",
    name: "Gamer's Edge Mechanical Keyboard",
    description: "Dominate the competition with the Gamer's Edge Mechanical Keyboard. Featuring customizable RGB lighting, ultra-responsive mechanical switches, and a durable aluminum frame. Programmable macro keys give you the ultimate advantage in any game.",
    price: 15999.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/multi-device-keyboard/8/r/v/els-wk-710-elista-original-imagrzrxhya5ycyz.jpeg?q=70",
    category: "Gaming",
    specifications: {
      "Switches": "Red Mechanical",
      "Backlight": "Full RGB (16.8 million colors)",
      "Layout": "Full-size",
      "Connectivity": "Wired USB-C",
    },
    reviews: [
      { id: "r4-1", author: "Kevin 'K-Dawg' G.", rating: 5, comment: "The response time is insane. The RGB effects are sick." },
    ],
    seller: "GameGear",
  },
  {
    id: "5",
    name: "Barista Pro Espresso Machine",
    description: "Become your own barista with the Barista Pro Espresso Machine. This semi-automatic machine gives you hands-on control over your coffee, from grind size to milk texture. The built-in conical burr grinder delivers the perfect amount of coffee on demand.",
    price: 69995.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-maker/y/c/b/2-in-1-coffee-maker-20-bar-espresso-machine-capsules-coffee-original-imahdqfgv7txzy9w.jpeg?q=70",
    category: "Appliances",
    specifications: {
      "Type": "Semi-Automatic Espresso Machine",
      "Grinder": "Integrated Conical Burr Grinder",
      "Water Tank": "2L",
      "Heating System": "ThermoJet",
    },
    reviews: [
      { id: "r5-1", author: "Olivia C.", rating: 5, comment: "Makes cafe-quality lattes at home. I love it!" },
      { id: "r5-2", author: "Ben A.", rating: 4, comment: "There's a learning curve, but the results are fantastic." },
    ],
    seller: "HomeBrew",
  },
  {
    id: "6",
    name: "Nomad's Trail Hiking Backpack",
    description: "Conquer any trail with the Nomad's Trail Hiking Backpack. With a 65L capacity, adjustable torso length, and multiple compartments, it's designed for multi-day treks. The integrated rain cover and hydration reservoir compatibility make it ready for any adventure.",
    price: 22000.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587537965646-930c2e37d59b?q=80&w=1974&auto=format&fit=crop",
    category: "Sports & Outdoors",
    specifications: {
      "Capacity": "65 Liters",
      "Material": "Ripstop Nylon",
      "Weight": "2.1 kg",
      "Features": "Integrated Raincover, Hydration Compatible",
    },
    reviews: [
        { id: "r6-1", author: "Chris W.", rating: 5, comment: "Took this on a 5-day hike. It was comfortable and held everything I needed." },
    ],
    seller: "Outdoor Ventures",
  },
    {
    id: "7",
    name: "SmartGarden Indoor Herb Kit",
    description: "Grow fresh herbs year-round with the SmartGarden Indoor Herb Kit. This self-watering, automated LED-lit system makes it easy for anyone to have a green thumb. Includes a starter kit with basil, mint, and parsley seeds.",
    price: 8999.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594269806334-d13c5836a463?q=80&w=1974&auto=format&fit=crop",
    category: "Home & Garden",
    specifications: {
      "Capacity": "3 pods",
      "Lighting": "Full-spectrum LED",
      "Features": "Self-watering, automated lights",
    },
    reviews: [
      { id: "r7-1", author: "Grace P.", rating: 5, comment: "So easy to use and I love having fresh herbs for cooking!" },
      { id: "r7-2", author: "Tom H.", rating: 4, comment: "Works well, though a bit smaller than I expected." },
    ],
    seller: "UrbanGrow",
  },
  {
    id: "8",
    name: "FlexiFit Yoga Mat Pro",
    description: "Find your flow with the FlexiFit Yoga Mat Pro. Made with non-toxic, eco-friendly materials, it provides superior grip and cushioning. The alignment lines help you perfect your poses. Lightweight and easy to carry.",
    price: 7900.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    category: "Fitness",
    specifications: {
      "Material": "Eco-friendly TPE",
      "Dimensions": "72\" x 26\"",
      "Thickness": "6mm",
      "Features": "Alignment lines, non-slip surface",
    },
    reviews: [
      { id: "r8-1", author: "Isabelle Y.", rating: 5, comment: "Best yoga mat I've ever used. The grip is incredible." },
    ],
    seller: "ZenFlow",
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
