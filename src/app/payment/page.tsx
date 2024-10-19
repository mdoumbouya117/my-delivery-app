"use client";

import Checkout from "@/components/Checkout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrencyFull } from "@/lib/currency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment() {
  const amount = 13000;

  return (
    <Card className="w-1/2 mx-auto text-center border rounded-md">
      <CardHeader className="mb-10">
        <CardTitle className="text-4xl font-extrabold mb-2">
          Eazy Eats
        </CardTitle>
        <CardDescription className="text-2xl">
          has requested{" "}
          <span className="font-bold">{formatCurrencyFull(amount)}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount,
            currency: "usd",
          }}
        >
          <Checkout amount={amount} />
        </Elements>
      </CardContent>
    </Card>
  );
}
