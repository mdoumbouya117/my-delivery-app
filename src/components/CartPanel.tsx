"use client";

import { ReactNode } from "react";
import { Trash2Icon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getCart } from "@/lib/cartStorage";
import { groupBy } from "@/lib/groupBy";
import { formatCurrency } from "@/lib/currency";

const CartPanel = ({ sheetTrigger }: { sheetTrigger: ReactNode }) => {
  const groupedItems = groupBy(getCart());

  return (
    <Sheet>
      <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Order</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          {Object.keys(groupedItems).map((restaurantId) => (
            <AccordionItem value={restaurantId} key={restaurantId}>
              <AccordionTrigger>
                {groupedItems[restaurantId][0].restaurant_name}
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                {groupedItems[restaurantId].map((cart) => (
                  <article className="flex items-start space-x-4" key={cart.id}>
                    <div>
                      <img
                        src={cart.image}
                        alt={cart.name}
                        width="60"
                        height="88"
                        className="flex-none rounded-md bg-slate-100"
                      />
                    </div>
                    <div className="min-w-0 relative flex-auto">
                      <h2 className="font-semibold text-slate-900 truncate pr-20">
                        {cart.name}
                      </h2>
                      <dl className="flex flex-wrap text-sm font-medium">
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                          <dt className="text-sky-500">
                            <span className="sr-only">Price</span>
                          </dt>
                          <dd>{formatCurrency(cart.price)}</dd>
                        </div>
                      </dl>

                      {/* Buttons for Incrementing, Decrementing, and Deleting Quantity */}
                      <div className="flex items-center justify-between space-x-2">
                        <div className="items-center">
                          <button
                            /* onClick={() => decrementQuantity(cart)} */
                            className="px-2 py-1 bg-gray-200 rounded"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 mx-1.5 ring-1 ring-slate-200 rounded">
                            {cart.quantity}
                          </span>
                          <button
                            /* onClick={() => incrementQuantity(cart)} */
                            className="px-2 py-1 bg-gray-200 rounded"
                          >
                            +
                          </button>
                        </div>
                        <Trash2Icon className="px-2 py-1 bg-red-500 text-white rounded" />
                      </div>
                    </div>
                  </article>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="m-auto">
              Submit order
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartPanel;
