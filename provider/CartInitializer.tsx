"use client";

import { useEffect } from "react";
import { getCart } from "@/services/cartService";
import { setCart } from "@/store/cartSlice";
import { useAppDispatch } from "@/hooks/reduxHook";

export default function CartInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await getCart();

        dispatch(
          setCart({
            items: data.cart.items,
            totalPrice: data.cart.totalPrice,
          })
        );
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    };

    loadCart();
  }, [dispatch]);

  return null;
}