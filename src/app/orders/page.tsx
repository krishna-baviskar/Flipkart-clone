"use client";

import Link from "next/link";
import Image from "next/image";
import { useOrder } from "@/hooks/use-order";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function OrdersPage() {
  const { orders } = useOrder();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-2xl font-semibold">You have no orders yet</h2>
          <p className="text-muted-foreground mt-2">
            When you place an order, it will appear here.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Order #{order.id.slice(0, 8)}</CardTitle>
                  <CardDescription>
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge variant={order.status === 'Delivered' ? "default" : "secondary"}>{order.status}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                            <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold">{item.product.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-6 bg-muted/50 p-4">
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-lg font-bold">₹{order.total.toFixed(2)}</p>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <Button variant="outline">View Order Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
