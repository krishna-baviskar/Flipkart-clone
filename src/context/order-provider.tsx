 "use client";

import { createContext, useState, type ReactNode } from "react";
import type { CartItem, Order } from "@/types";

export interface OrderContextType {
  orders: Order[];
  createOrder: (items: CartItem[], total: number) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (items: CartItem[], total: number) => {
    const newOrder: Order = {
      id: new Date().getTime().toString(), // Simple unique ID
      date: new Date().toISOString(),
      items,
      total,
      status: "Processing",
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
