import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    name: "QuantumCore Laptop Pro",
    description: "Experience unparalleled performance with the QuantumCore Laptop Pro. Featuring the latest generation processor, a stunning 4K display, and a sleek, lightweight design, it's the perfect tool for professionals and creatives alike. With all-day battery life, you can work from anywhere without compromise.",
    price: 94990.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format=fit=crop",
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
    price: 2499.00,
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/x/z/fire-pods-aura-fire-boltt-original-imagrhu5kjxzrfen.jpeg?q=70",
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
    price: 14999.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format=fit=crop",
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
    price: 5499.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/multi-device-keyboard/u/m/a/k500-usb-keyboard-zebion-original-imah4ym7mhjaeagz.jpeg?q=70",
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
    price: 34999.00,
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
    price: 4999.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/rucksack/x/e/l/-original-imah2snzfbpy3s4j.jpeg?q=70",
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
    price: 5999.00,
    rating: 4.5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-treatment/i/z/p/400-amla-reetha-shikakai-bhringraj-hibiscus-brahmi-henna-and-original-imagh59vgumpvhcw.jpeg?q=70",
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
    price: 1299.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format=fit=crop",
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
  {
    id: "9",
    name: "StellarFit Smartwatch 5",
    description: "Track your fitness, stay connected, and monitor your health with the StellarFit Smartwatch 5. Featuring a vibrant AMOLED display, advanced health sensors, and a long-lasting battery.",
    price: 18999.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format=fit=crop",
    category: "Electronics",
    specifications: {
      "Display": "1.4\" Super AMOLED",
      "Sensors": "Heart Rate, SpO2, ECG, GPS",
      "Battery Life": "Up to 3 days",
      "Water Resistance": "5ATM",
    },
    reviews: [
      { id: "r9-1", author: "Leo M.", rating: 5, comment: "Amazing watch! The health tracking is top-notch and it looks great." },
    ],
    seller: "StellarTech",
  },
  {
    id: "10",
    name: "SkyExplorer Drone",
    description: "Capture breathtaking aerial shots with the SkyExplorer Drone. Equipped with a 4K camera, 3-axis gimbal, and intelligent flight modes. It's foldable, portable, and easy for beginners to fly.",
    price: 29999.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/drone/m/h/q/40-24-1-4k-wifi-dual-camera-drone-for-adults-kids-with-2-original-imagrfa6esxteknr.jpeg?q=70",
    category: "Electronics",
    specifications: {
      "Camera": "4K UHD @ 30fps",
      "Flight Time": "30 minutes",
      "Range": "5 km",
      "Weight": "570g",
    },
    reviews: [
      { id: "r10-1", author: "Nina R.", rating: 5, comment: "The video quality is stunning. So stable and easy to control." },
    ],
    seller: "AeroVision",
  },
  {
    id: "11",
    name: "FusionBlend Blender",
    description: "Unleash your culinary creativity with the FusionBlend Blender. Its powerful 1500W motor can handle anything from smoothies and soups to nut butters. Features multiple pre-programmed settings for perfect results every time.",
    price: 8999.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-blender/o/4/2/-original-imagx3au8krbannd.jpeg?q=70",
    category: "Appliances",
    specifications: {
      "Power": "1500W",
      "Capacity": "2L BPA-Free Jar",
      "Speeds": "10-speed variable control",
      "Programs": "Smoothie, Soup, Ice Crush",
    },
    reviews: [
      { id: "r11-1", author: "Sam T.", rating: 5, comment: "This blender is a beast! It makes the smoothest smoothies I've ever had." },
    ],
    seller: "KitchenPro",
  },
  {
    id: "12",
    name: "GlowUp Skincare Set",
    description: "Achieve radiant skin with the GlowUp Skincare Set. This curated collection includes a gentle cleanser, a hydrating serum, and a nourishing moisturizer, all made with natural, cruelty-free ingredients.",
    price: 2499.00,
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/5/1/u/-original-imahek2pffph7kqk.jpeg?q=70",
    category: "Beauty",
    specifications: {
      "Includes": "Cleanser, Serum, Moisturizer",
      "Key Ingredients": "Hyaluronic Acid, Vitamin C, Green Tea",
      "Skin Type": "All",
      "Cruelty-Free": "Yes",
    },
    reviews: [
      { id: "r12-1", author: "Chloe B.", rating: 5, comment: "My skin has never felt so soft and looked so bright. Highly recommend!" },
      { id: "r12-2", author: "Mark F.", rating: 4, comment: "Good products, but the moisturizer is a bit light for my very dry skin." },
    ],
    seller: "LumiBeauty",
  },
  {
    id: "13",
    name: "Classic Crew-Neck T-Shirt",
    description: "A timeless staple for any wardrobe. This classic crew-neck t-shirt is made from 100% premium cotton for a soft and comfortable feel. Perfect for layering or wearing on its own.",
    price: 799.00,
    rating: 4.5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/m/e/l-or10-technosport-original-imagnbpydgffr6x7.jpeg?q=70",
    category: "Fashion",
    specifications: {
      "Material": "100% Cotton",
      "Fit": "Regular",
      "Sleeves": "Short Sleeve",
      "Neck": "Crew-Neck"
    },
    reviews: [
        { id: "r13-1", author: "Jessica P.", rating: 5, comment: "Super soft and fits perfectly. I bought it in three colors!" }
    ],
    seller: "UrbanWear"
  },
  {
    id: "14",
    name: "Men's Slim-Fit Jeans",
    description: "Look sharp and feel comfortable in these modern slim-fit jeans. Made with a hint of stretch for all-day comfort and a full range of motion. A versatile addition to your casual wardrobe.",
    price: 1899.00,
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/l/x/28-flipkart-302-coystore-original-imaheqgyym8rhvyw.jpeg?q=70",
    category: "Fashion",
    specifications: {
      "Material": "98% Cotton, 2% Elastane",
      "Fit": "Slim",
      "Rise": "Mid-Rise",
      "Care": "Machine Wash"
    },
    reviews: [
        { id: "r14-1", author: "Daniel K.", rating: 5, comment: "Great fit and very comfortable. They look more expensive than they are." }
    ],
    seller: "DenimCo"
  },
  {
    id: "15",
    name: "Nebula Smartphone X1",
    description: "Discover the future of mobile with the Nebula Smartphone X1. It features a stunning edge-to-edge display, a pro-grade camera system, and lightning-fast 5G capabilities, all powered by the next-gen Nebula chipset.",
    price: 64999.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/n/u/nord-ce5-5g-cph2717-oneplus-original-imaheywzahvkwqkh.jpeg?q=70",
    category: "Mobiles",
    specifications: {
      "Display": "6.7\" Dynamic AMOLED 2X",
      "Camera": "108MP Wide, 12MP Ultrawide, 10MP Telephoto",
      "Processor": "Nebula Fusion A17",
      "Battery": "5000mAh",
      "Storage": "256GB"
    },
    reviews: [
        { id: "r15-1", author: "Sophia T.", rating: 5, comment: "The camera on this phone is absolutely breathtaking. And it's so fast!" }
    ],
    seller: "StellarTech"
  },
  {
    id: "16",
    name: "The Midnight Library",
    description: "A novel by Matt Haig, The Midnight Library is a captivating story about life, death, and the choices we make. It's a heartwarming and thought-provoking read that will stay with you long after you finish.",
    price: 349.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/m/6/a/the-midnight-library-original-imahatj9yhdy9vg4.jpeg?q=70",
    category: "Books",
    specifications: {
      "Author": "Matt Haig",
      "Genre": "Fantasy Fiction",
      "Pages": "304",
      "Binding": "Paperback"
    },
    reviews: [
        { id: "r16-1", author: "Bookworm22", rating: 5, comment: "One of the best books I've read this year. So imaginative and beautiful." }
    ],
    seller: "PageTurners"
  },
  {
    id: "17",
    name: "AeroGlide Running Shoes",
    description: "Experience feather-light runs with the AeroGlide Running Shoes. Designed for both speed and comfort, they feature a responsive foam sole and a breathable mesh upper to keep your feet cool and supported over any distance.",
    price: 3499.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/c/7/-original-imahbwg7fm76fdjd.jpeg?q=70",
    category: "Fashion",
    specifications: {
      "Type": "Running Shoes",
      "Sole": "Responsive Foam",
      "Upper": "Breathable Mesh",
      "Best for": "Road Running"
    },
    reviews: [
        { id: "r17-1", author: "Runner123", rating: 5, comment: "Incredibly comfortable and light. Feels like running on clouds." }
    ],
    seller: "FitStride"
  },
  {
    id: "18",
    name: "PureAir Smart Air Purifier",
    description: "Breathe cleaner air with the PureAir Smart Air Purifier. It features a 3-stage filtration system that captures 99.97% of airborne particles, including dust, pollen, and smoke. Monitor and control air quality from your smartphone.",
    price: 11999.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-purifier/1/s/l/21-5-air-touch-v1-21-5-1-5-honeywell-original-imah6gyzjxc8rgnz.jpeg?q=70",
    category: "Appliances",
    specifications: {
      "Filtration": "HEPA H13 Filter",
      "Coverage Area": "Up to 400 sq. ft.",
      "Smart Features": "App Control, Auto Mode",
      "Noise Level": "24dB (Sleep Mode)"
    },
    reviews: [
      { id: "r18-1", author: "HealthyHome", rating: 5, comment: "Noticeable difference in air quality. The auto mode is fantastic." }
    ],
    seller: "HomeBrew"
  },
  {
    id: "19",
    name: "Digital Artist Pro Tablet",
    description: "Unleash your creativity with the Digital Artist Pro Tablet. With a large, high-resolution screen and a pressure-sensitive pen, it provides a natural drawing experience. Perfect for digital painting, photo editing, and graphic design.",
    price: 24990.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/h/c/p/sm-x210nzaeins-samsung-original-imah25guzjbw9wzh.jpeg?q=70",
    category: "Electronics",
    specifications: {
      "Active Area": "13.3 inches",
      "Resolution": "2560 x 1600",
      "Pen Pressure": "8192 Levels",
      "Compatibility": "Windows, macOS"
    },
    reviews: [
        { id: "r19-1", author: "ArtDiva", rating: 5, comment: "This tablet is a game-changer for my workflow. The pen feels amazing." }
    ],
    seller: "TechNexa"
  },
  {
    id: "20",
    name: "Minimalist Modern Bookshelf",
    description: "Display your favorite books and decor on this minimalist modern bookshelf. Its clean lines and open-shelf design add a touch of sophistication to any room. Made from durable, sustainably sourced wood.",
    price: 6999.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/book-shelf/j/v/9/30-stainless-steel-54-0-3-4l-metal-bookshelf-powerest-56-slate-4-original-imah8ew5vfxggfgz.jpeg?q=70",
    category: "Home & Furniture",
    specifications: {
      "Material": "Solid Oak",
      "Dimensions": "70\" x 30\" x 12\"",
      "Shelves": "5",
      "Assembly": "Required"
    },
    reviews: [
        { id: "r20-1", author: "DesignLover", rating: 5, comment: "Looks stunning in my living room. Very sturdy and high-quality." }
    ],
    seller: "SleepWell Co."
  },
  {
    id: "21",
    name: "HydraBoost Face Serum",
    description: "Intensely hydrate and plump your skin with our HydraBoost Face Serum, packed with hyaluronic acid and vitamin B5. This lightweight formula absorbs quickly, leaving your skin feeling soft, smooth, and revitalized.",
    price: 1499.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format=fit=crop",
    category: "Beauty",
    specifications: {
      "Volume": "30ml",
      "Key Ingredients": "Hyaluronic Acid, Vitamin B5",
      "Skin Type": "All",
      "Paraben-Free": "Yes",
    },
    reviews: [
        { id: "r21-1", author: "SkincareAddict", rating: 5, comment: "My skin drinks this up! It feels so hydrated and looks dewy." }
    ],
    seller: "LumiBeauty"
  },
  {
    id: "22",
    name: "SunGuard Mineral Sunscreen SPF 50",
    description: "Protect your skin from harmful UV rays with our SunGuard Mineral Sunscreen. This broad-spectrum SPF 50 formula is lightweight, non-greasy, and blends effortlessly into the skin without leaving a white cast.",
    price: 899.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunscreen/4/t/d/50-lightweight-gel-sunscreen-no-white-cast-for-men-women-55-original-imahezf456uhegpt.jpeg?q=70",
    category: "Beauty",
    specifications: {
      "SPF": "50",
      "Type": "Mineral (Zinc Oxide)",
      "Volume": "100ml",
      "Water Resistant": "80 minutes",
    },
    reviews: [
        { id: "r22-1", author: "BeachLover", rating: 5, comment: "Finally, a mineral sunscreen that doesn't make me look like a ghost!" }
    ],
    seller: "LumiBeauty"
  },
  {
    id: "23",
    name: "Artisan Roast Organic Coffee Beans",
    description: "Start your day with the rich, aromatic flavor of our Artisan Roast Coffee Beans. Sourced from fair-trade farms in Colombia, these organic arabica beans are medium-roasted to perfection for a smooth, balanced cup.",
    price: 499.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/3/z/o/50-100-arabica-instant-coffee-hot-cold-coffee-instant-coffee-original-imaheqkrfymgtqdb.jpeg?q=70",
    category: "Grocery",
    specifications: {
      "Weight": "340g",
      "Roast": "Medium",
      "Origin": "Colombia",
      "Certification": "Organic, Fair Trade",
    },
    reviews: [
        { id: "r23-1", author: "CoffeeSnob", rating: 5, comment: "Absolutely delicious. Smooth, not bitter, with lovely chocolatey notes." }
    ],
    seller: "FreshMart"
  },
  {
    id: "24",
    name: "Organic Almond Milk",
    description: "A creamy and delicious dairy-free alternative. Our organic almond milk is made with simple ingredients and is unsweetened, making it a versatile choice for your cereal, coffee, or smoothies.",
    price: 249.00,
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/milk/d/b/e/180-almond-milk-packed-with-essential-nutrients-vitamins-tin-original-imahbgxwgqfhgsfz.jpeg?q=70",
    category: "Grocery",
    specifications: {
      "Volume": "1L",
      "Ingredients": "Filtered Water, Organic Almonds",
      "Features": "Unsweetened, Dairy-Free, Vegan",
      "Organic": "Yes",
    },
    reviews: [
      { id: "r24-1", author: "HealthyEater", rating: 5, comment: "My go-to almond milk. Tastes clean and has no weird ingredients." },
      { id: "r24-2", author: "SmoothieKing", rating: 4, comment: "Good for smoothies, but a little thin for my coffee." },
    ],
    seller: "FreshMart"
  },
  {
    id: "25",
    name: "SonicWave Soundbar",
    description: "Elevate your home theater experience with the SonicWave Soundbar. With Dolby Atmos support and a wireless subwoofer, it delivers immersive, room-filling sound.",
    price: 14999.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format=fit=crop",
    category: "Electronics",
    specifications: {
      "Channels": "3.1.2",
      "Connectivity": "HDMI eARC, Bluetooth",
      "Power": "400W",
      "Features": "Dolby Atmos, Wireless Subwoofer",
    },
    reviews: [
      { id: "r25-1", author: "Cinephile", rating: 5, comment: "The sound is incredible for the price. Movies feel so much more immersive." }
    ],
    seller: "AudioPhile Inc."
  },
  {
    id: "26",
    name: "Chrono Gaming Mouse",
    description: "Get precision and speed with the Chrono Gaming Mouse. Featuring an 18,000 DPI sensor, programmable buttons, and an ergonomic design for long gaming sessions.",
    price: 2999.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/v/v/j/rgb-led-lightweight-and-ergonomic-design-dpi-upto-3600-flipkart-original-imahywqgej6yzuh7.jpeg?q=70",
    category: "Gaming",
    specifications: {
      "DPI": "18,000",
      "Buttons": "8 programmable",
      "Weight": "97g",
      "Lighting": "RGB",
    },
    reviews: [
      { id: "r26-1", author: "ProGamerX", rating: 5, comment: "Super accurate and comfortable. The software is easy to use for macros." }
    ],
    seller: "GameGear"
  },
  {
    id: "27",
    name: "ErgoFlow Office Chair",
    description: "Stay comfortable and productive with the ErgoFlow Office Chair. Its ergonomic design provides excellent lumbar support, and the breathable mesh back keeps you cool all day.",
    price: 12999.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format=fit=crop",
    category: "Home & Furniture",
    specifications: {
      "Material": "Mesh back, fabric seat",
      "Adjustments": "Height, Tilt, Armrests",
      "Weight Capacity": "120kg",
      "Feature": "Lumbar Support"
    },
    reviews: [
        { id: "r27-1", author: "WFHWarrior", rating: 5, comment: "My back is thanking me. So much better than my old chair." }
    ],
    seller: "SleepWell Co."
  },
  {
    id: "28",
    name: "AquaPure Smart Water Pitcher",
    description: "Enjoy pure, fresh-tasting water with the AquaPure Smart Water Pitcher. It removes contaminants and tracks filter life with a handy LED indicator, ensuring you always have the best quality water.",
    price: 2999.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/r/q/q/dellpure-zinc-copper-9-stage-purification-water-purifier-with-original-imah6xhhjxunhwky.jpeg?q=70",
    category: "Appliances",
    specifications: {
      "Capacity": "10-Cup",
      "Filter Life": "40 Gallons",
      "Removes": "Chlorine, lead, mercury",
      "Feature": "LED Filter Indicator",
    },
    reviews: [
      { id: "r28-1", author: "HydroHomie", rating: 5, comment: "Water tastes great and the reminder light is super helpful." }
    ],
    seller: "HomeBrew"
  },
  {
    id: "29",
    name: "DynaLift Dumbbell Set",
    description: "Build strength at home with the DynaLift Adjustable Dumbbell Set. Easily switch from 2.5kg to 24kg with a simple dial, replacing an entire rack of weights. Perfect for a wide range of exercises.",
    price: 15999.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format=fit=crop",
    category: "Fitness",
    specifications: {
      "Weight Range": "2.5kg - 24kg",
      "Mechanism": "Dial System",
      "Includes": "2 dumbbells, 2 trays",
      "Material": "Steel, Durable Molding"
    },
    reviews: [
      { id: "r29-1", author: "HomeGymHero", rating: 5, comment: "These are amazing. So easy to switch weights and they save so much space." }
    ],
    seller: "ZenFlow"
  },
  {
    id: "31",
    name: "Atomic Habits",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear. This book offers a practical framework for improving every day.",
    price: 499.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format=fit=crop",
    category: "Books",
    specifications: {
      "Author": "James Clear",
      "Genre": "Self-Help",
      "Pages": "320",
      "Binding": "Hardcover"
    },
    reviews: [
      { id: "r31-1", author: "GrowthMindset", rating: 5, comment: "Life-changing book. The strategies are simple and effective." }
    ],
    seller: "PageTurners"
  },
  {
    id: "32",
    name: "To Kill a Mockingbird",
    description: "Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.",
    price: 299.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/f/7/c/to-kill-a-mockingbird-novel-original-imah7tsms62zbv93.jpeg?q=70",
    category: "Books",
    specifications: {
      "Author": "Harper Lee",
      "Genre": "Classic Fiction",
      "Pages": "324",
      "Binding": "Paperback"
    },
    reviews: [
      { id: "r32-1", author: "ClassicReader", rating: 5, comment: "A timeless classic that everyone should read. Beautifully written." }
    ],
    seller: "PageTurners"
  },
  {
    id: "39",
    name: "Pixel 8a Smartphone",
    description: "The Pixel 8a is a powerful and affordable smartphone from Google, featuring an amazing camera, a vibrant display, and all-day battery life. It's the smart choice for smart photos and helpful features.",
    price: 45999.00,
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/8/d/pixel-8a-ga04988-in-google-original-imahyn3mskjbwphw.jpeg?q=70",
    category: "Mobiles",
    specifications: {
      "Display": "6.1-inch Actua display",
      "Processor": "Google Tensor G3",
      "Camera": "64 MP Main, 13 MP Ultrawide",
      "Battery": "4492 mAh",
      "Storage": "128GB"
    },
    reviews: [
        { id: "r39-1", author: "AndroidFan", rating: 5, comment: "The camera is pure magic. Best phone I've ever owned at this price point." }
    ],
    seller: "StellarTech"
  },
  {
    id: "40",
    name: "ShieldPro Phone Case",
    description: "Protect your investment with the ShieldPro Phone Case. This dual-layer case provides military-grade drop protection without adding excessive bulk. The textured grip ensures your phone stays securely in your hand.",
    price: 1299.00,
    rating: 4.8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cases-covers/back-cover/m/4/h/zap-mag-ss235g-black-zapcase-original-imah5q4srhdevrtc.jpeg?q=70",
    category: "Mobiles",
    specifications: {
      "Material": "TPU & Polycarbonate",
      "Compatibility": "Fits Nebula X1, Pixel 8a",
      "Drop Protection": "10 ft",
      "Feature": "Enhanced Grip"
    },
    reviews: [
        { id: "r40-1", author: "ButterFingers", rating: 5, comment: "Already dropped my phone twice and this case saved it. Solid protection." }
    ],
    seller: "MobileGuard"
  },
  {
    id: "41",
    name: "CrystalClear Screen Protector",
    description: "Keep your screen pristine with the CrystalClear Screen Protector. Made from ultra-tough tempered glass, it resists scratches and impacts while maintaining perfect touch sensitivity and clarity. Easy, bubble-free installation.",
    price: 599.00,
    rating: 4.9,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/screen-guard/edge-to-edge-tempered-glass/g/f/d/eit-02-g14-5g-eitansha-creation-original-imah6mv8feznvb4d.jpeg?q=70",
    category: "Mobiles",
    specifications: {
      "Material": "9H Tempered Glass",
      "Compatibility": "Fits Nebula X1, Pixel 8a",
      "Hardness": "9H",
      "Includes": "2-Pack, installation kit"
    },
    reviews: [
        { id: "r41-1", author: "ScreenSaver", rating: 5, comment: "Goes on super easy and you can't even tell it's there. A must-have accessory." }
    ],
    seller: "MobileGuard"
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

    

    