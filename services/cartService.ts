import { getGuestId } from "@/lib/guestId";

const API_URL = process.env.NEXT_PUBLIC_PRODUCT_API_URL;

// GET ALL CART
export async function getCart() {
  const guestId = getGuestId();

  const res = await fetch(
    `${API_URL}/api/cart/${guestId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cart");
  }

  return res.json();
}

// ADD ITEM
export async function addToCart({
  guestId,
  productId,
  quantity,
}: {
  guestId: string;
  productId: string;
  quantity: number;
}) {
  const res = await fetch(`${API_URL}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      guestId,
      productId,
      quantity,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to add product to cart");
  }

  return res.json();
}

// DELETE ITEM
export async function deleteCartItem(productId: string) {
  const guestId = getGuestId();

  const res = await fetch(
    `${API_URL}/api/cart/${guestId}/${productId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete cart item");
  }

  return res.json();
}

// DELETE ALL CART
export async function deleteCart() {
  const guestId = getGuestId();

  const res = await fetch(
    `${API_URL}/api/cart/${guestId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete cart");
  }

  return res.json();
}