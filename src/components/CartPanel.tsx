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
import { ReactNode } from "react";

const CartPanel = ({ sheetTrigger }: { sheetTrigger: ReactNode }) => (
  <Sheet>
    <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Order</SheetTitle>
      </SheetHeader>
      {/* content */}
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

export default CartPanel;
