"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Package,
  Phone,
  MapPin,
} from "lucide-react";

import { getUserOrder } from "@/services/orderService";
import { getGuestId } from "@/lib/guestId";

interface OrderProduct {
  _id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  stock: number;
  active: boolean;
}

interface OrderItem {
  product: OrderProduct;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  orderNumber: string;

  customer: {
    name: string;
    phone: string;
    address: string;
    notes?: string;
  };

  items: OrderItem[];

  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getOrder() {
    try {
      setLoading(true);

      const res = await getUserOrder(getGuestId());

      console.log("ORDER RESPONSE:", res);

      setOrder(res.order);
    } catch (error) {
      console.error("Failed to get order:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrder();
  }, []);

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Loading your order...
        </p>
      </main>
    );
  }

  // Error / no order
  if (error || !order) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-[#06111F] dark:text-white">
            Order not found
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We couldn't find your order.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      {/* =========================
          Success Header
      ========================== */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#047484]/10">
          <CheckCircle2
            size={36}
            className="text-[#047484]"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#06111F] dark:text-white">
          Order Confirmed!
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Thank you for your order. Our team will contact you
          shortly to confirm your order.
        </p>

        <div className="mt-5 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-[#06111F] dark:bg-[#0a1929] dark:text-white">
          Order #{order.orderNumber}
        </div>
      </div>

      {/* =========================
          Main Content
      ========================== */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        {/* =========================
            Products
        ========================== */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
          <div className="mb-6 flex items-center gap-3">
            <Package
              size={22}
              className="text-[#047484]"
            />

            <div>
              <h2 className="font-semibold text-[#06111F] dark:text-white">
                Order Items
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {order.items.length}{" "}
                {order.items.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {order?.items?.map((item) => (
              <div
                key={item.product?._id}
                className="flex gap-4 rounded-xl border border-gray-100 p-3 dark:border-gray-800"
              >
                {/* Image */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50 dark:bg-[#06111F]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <h3 className="line-clamp-2 text-sm font-medium text-[#06111F] dark:text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-[#047484]">
                    {item.price * item.quantity} EGP
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            Right Side
        ========================== */}
        <div className="space-y-6">
          {/* =========================
              Customer Information
          ========================== */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
            <h2 className="mb-5 font-semibold text-[#06111F] dark:text-white">
              Delivery Information
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <p className="text-xs text-gray-400">
                  Customer
                </p>

                <p className="mt-1 text-sm font-medium text-[#06111F] dark:text-white">
                  {order.customer.name}
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#047484]"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#06111F] dark:text-gray-200">
                    {order.customer.phone}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#047484]"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#06111F] dark:text-gray-200">
                    {order.customer.address}
                  </p>
                </div>
              </div>

              {/* Notes */}
              {order.customer.notes && (
                <div className="rounded-lg bg-gray-50 p-3 dark:bg-[#06111F]">
                  <p className="text-xs text-gray-400">
                    Notes
                  </p>

                  <p className="mt-1 text-sm text-[#06111F] dark:text-gray-200">
                    {order.customer.notes}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* =========================
              Order Summary
          ========================== */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
            <h2 className="mb-5 font-semibold text-[#06111F] dark:text-white">
              Order Summary
            </h2>

            <div className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>

                <span className="font-medium text-[#06111F] dark:text-white">
                  {order.totalPrice} EGP
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>

                <span className="font-medium text-[#047484]">
                  Free
                </span>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#06111F] dark:text-white">
                    Total
                  </span>

                  <span className="text-xl font-bold text-[#047484]">
                    {order.totalPrice} EGP
                  </span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-5 flex items-center justify-between rounded-lg bg-amber-50 px-4 py-3 dark:bg-amber-950/20">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Status
              </span>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold capitalize text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                {order.status}
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}