import CartItem from "./_components/CartItem";
import CartItems from "./_components/CartItems";
import CartSummary from "./_components/CartSummary";

export default function CartPage() {
    return (
    <section className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#06111F] dark:text-white">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your items before placing your order.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px]">
        <CartItems />

        <CartSummary />
      </div>
    </section>
  );
}