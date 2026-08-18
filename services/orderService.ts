import { CartItem } from "@/store/cartSlice";

const NEXT_PUBLIC_PRODUCT_API_URL = process.env.NEXT_PUBLIC_PRODUCT_API_URL;

export async function checkOutForm(
  data: {
    name: string;
    phone: string;
    address: string;
    notes?: string;
  },
  items: CartItem[]
) {
  const res = await fetch(`${NEXT_PUBLIC_PRODUCT_API_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        notes: data.notes,
      },

      items: items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  return res.json();
}

export async function getUserOrder(userOrder:string) {
  const res = await fetch(`${NEXT_PUBLIC_PRODUCT_API_URL}/api/orders/${userOrder}`)
 if (!res.ok) {
    throw new Error("Failed to get ordder ");
  }

  return res.json();
}