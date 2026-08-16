import { Product } from "@/lib/ProductType";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-4">
        {products?.map((product)=><ProductCard key={product?._id} product={product}/>)}
    </div>
  )
}
