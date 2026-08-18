export async function getProducts(
  page: number = 1,
  limit: number = 12,
  category?: string
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (category) {
    params.set("category", category);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/products?${params.toString()}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
export async function getAllCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/categories`,

    {
      cache: "force-cache",
    }

  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getSpecificProduct(slugProduct: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/api/products/${slugProduct}`,
    {
      cache: "force-cache"
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch products");

  }
  return res.json()

}