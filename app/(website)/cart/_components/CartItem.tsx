import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, removeItem, setCart } from "@/store/cartSlice";
import { deleteCartItem, getCart } from "@/services/cartService";
import { useAppDispatch } from "@/hooks/reduxHook";
import { toast } from "@/components/ui/toast";

export default  function CartItem({
  item,
}: {
  item: CartItemType;
}) {
const dispatch = useAppDispatch();

const deleteItem = async (productId: string) => {
  try {
    await deleteCartItem(productId);

    const data = await getCart();

    dispatch(
      setCart({
        items: data.cart.items,
        totalPrice: data.cart.totalPrice,
      })
    );

    toast.add({
      description:"Removed successfully"
    });
  } catch (error) {
    console.error("Failed to remove item:", error);

    toast.add({
      description:"Failed to remove item"
    });
  }
};
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#0a1929] sm:flex-row sm:items-center">
      
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:h-28 sm:w-28 dark:bg-[#06111F]">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          sizes="112px"
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-[#06111F] dark:text-white">
          {item.product.name}
        </h2>

        <p className="mt-2 font-semibold text-[#047484]">
          {item.price}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button>
          <Minus size={15} />
        </button>

        <span>{item.quantity}</span>

        <button>
          <Plus size={15} />
        </button>

        <button className="text-red-500" onClick={()=>deleteItem(item?.product?._id)}>
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}