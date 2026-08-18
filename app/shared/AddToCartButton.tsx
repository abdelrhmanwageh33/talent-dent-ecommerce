"use client";

import { toast } from "@/components/ui/toast";
import { useAppDispatch } from "@/hooks/reduxHook";
import { getGuestId } from "@/lib/guestId";
import { addToCart, getCart } from "@/services/cartService";
import { setCart } from "@/store/cartSlice";

export default function AddToCartButton({
  productId,
}: {
  productId: string;
}) {
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    
    try {
      // Add product
      await addToCart({
        guestId: getGuestId(),
        productId,
        quantity: 1,
      });

      // Get updated cart
      const data = await getCart();

      // Update Redux
      dispatch(
        setCart({
          items: data.cart.items,
          totalPrice: data.cart.totalPrice,
        })
      );
       toast.add({
  title: "Event created",
  description: "products added susccfuly",
})
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.add({
          title: "Event created",
  description: "Failed to add product",
      })
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="rounded-lg bg-[#047484] px-6 py-3 font-medium text-white transition hover:bg-[#035f6a]"
    >
      Add to Cart
    </button>
  );
}