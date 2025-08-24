import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { AiSummary } from "@/components/ai-summary";
import { WishlistButton } from "@/components/wishlist-button";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square relative w-full bg-card rounded-lg overflow-hidden border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            data-ai-hint="product image"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <span>Sold by {product.seller}</span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-3xl font-bold">₹{product.price.toFixed(2)}</p>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          
          <AiSummary productDetails={product.description} />

          <div className="mt-4 flex items-center gap-4">
            <AddToCartButton product={product} showText={true} />
            <WishlistButton product={product} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="font-medium text-foreground">{key}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id}>
                  <div className="flex items-center mb-1">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="ml-2 font-semibold">{review.author}</p>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
