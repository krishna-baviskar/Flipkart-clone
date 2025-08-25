"use client";

import { useContext } from "react";
import { OrderContext, type OrderContextType } from "@/context/order-provider";

export function useOrder(): OrderContextType {
  const context = useContext(OrderContext);
   if (context === undefined) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
}
