"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod"

import { useForm  ,Controller} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { checkOutForm } from "@/services/orderService";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { clearCart } from "@/store/cartSlice";
import { deleteCart } from "@/services/cartService";

export default function OrderForm() {

  const items = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const orderSchema=z.object({
    name:z.string().min(3),
     phone: z.string().min(11, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  notes: z.string().optional(),
  })
    const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      address:"",
      notes:""
    },
  })
const router = useRouter();

async function onSubmit(data: z.infer<typeof orderSchema>) {
  try {
    const res = await checkOutForm(data, items.items);

    if (!res.success) {
      throw new Error("Failed to create order");
    }

    sessionStorage.setItem(
      "lastOrder",
      JSON.stringify(res.order)
    );
localStorage.setItem("order_id", res.order._id);
    await deleteCart()
    dispatch(clearCart());

    form.reset();

    router.push("/order-success");
  } catch (error) {
    console.error("Failed to create order:", error);
  }
}
  return (
    <section className="py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#06111F] dark:text-white">
          Complete Your Order
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Enter your information to complete your order.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
          <div className="mb-7">
            <h2 className="text-xl font-semibold text-[#06111F] dark:text-white">
              Customer Information
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Tell us how we can contact you.
            </p>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
 <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Your name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

            </div>

            {/* Phone */}
            <div className="space-y-2">
 <Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Your phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

            </div>

            {/* Address */}
            <div className="space-y-2">
       <Controller
  name="address"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Your address</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

            </div>

            {/* Notes */}
            <div className="space-y-2">
 <Controller
  name="notes"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>any notes</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

            </div>

            <Button
              type="submit"
              className="h-11 w-full bg-[#047484] text-white hover:bg-[#035f6a]"
            >
              Place Order
            </Button>
          </div>
        </form>

        {/* Summary */}
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
          <h2 className="text-xl font-semibold text-[#06111F] dark:text-white">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Subtotal</span>

              <span className="font-medium text-[#06111F] dark:text-white">
{items?.totalPrice}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Shipping</span>

              <span className="font-medium text-[#047484]">
                Free
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold text-[#06111F] dark:text-white">
                  Total
                </span>

                <span className="text-xl font-bold text-[#047484]">
                  {items?.totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
