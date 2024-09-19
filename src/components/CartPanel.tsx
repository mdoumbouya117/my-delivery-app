import { ReactNode } from "react";
import Image from "next/image";
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
import { groupBy } from "@/lib/groupBy";
import { formatCurrencyFull } from "@/lib/currency";
import { useCart } from "@/contexts/CartContext";
import { imageLoader } from "@/lib/imageLoader";

const CartPanel = ({ sheetTrigger }: { sheetTrigger: ReactNode }) => {
  const {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    getTotalPrice,
    cartItems,
  } = useCart();
  const groupedItems = groupBy(cartItems);

  return (
    <Sheet>
      <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Order</SheetTitle>
        </SheetHeader>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={cartItems[0]?.restaurant.id}
        >
          {Object.keys(groupedItems).map((restaurantId) => (
            <AccordionItem value={restaurantId} key={restaurantId}>
              <AccordionTrigger>
                {groupedItems[restaurantId][0].restaurant.name}
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                {groupedItems[restaurantId].map((cart) => (
                  <article
                    className="flex items-start space-x-4"
                    key={cart.menu.id}
                  >
                    <div>
                      <Image
                        loader={imageLoader}
                        src={cart.menu.image}
                        alt={cart.menu.name}
                        width={60}
                        height={88}
                        className="flex-none rounded-md bg-slate-100"
                      />
                    </div>
                    <div className="min-w-0 relative flex-auto">
                      <h2 className="font-semibold text-slate-900 truncate pr-20">
                        {cart.menu.name}
                      </h2>
                      <dl className="flex flex-wrap text-sm font-medium">
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                          <dt className="text-sky-500">
                            <span className="sr-only">Price</span>
                          </dt>
                          <dd>{formatCurrencyFull(cart.menu.price)}</dd>
                        </div>
                      </dl>
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center justify-between bg-gray-100 rounded-full w-20 h-6">
                          <Button
                            onClick={() => decrementQuantity(cart.menu.id)}
                            className="bg-white border border-gray-100 hover:bg-slate-100 text-black px-2 rounded-full h-6"
                          >
                            -
                          </Button>
                          <span className="text-gray-500">{cart.quantity}</span>
                          <Button
                            onClick={() =>
                              incrementQuantity(cart.menu, cart.restaurant)
                            }
                            className="bg-blue-500 border border-gray-100 hover:bg-blue-700 text-white px-2 rounded-full h-6"
                          >
                            +
                          </Button>
                        </div>
                        <Trash2Icon
                          className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
                          onClick={() => removeFromCart(cart.menu.id)}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {cartItems.length > 0 ? (
          <>
            <dl className="flex justify-between font-bold">
              <dt>Total</dt>
              <dd>{formatCurrencyFull(getTotalPrice())}</dd>
            </dl>
            <SheetFooter className="mt-7">
              <SheetClose asChild>
                <Button type="submit" className="m-auto">
                  Submit order
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <h4>Votre panier est vide 😔 </h4>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartPanel;
