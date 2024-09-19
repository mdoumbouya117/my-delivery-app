import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/currency";
import { RestaurantCart } from "@/types/CartItem";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/imageLoader";

const MenuItem = ({
  menu,
  restaurant,
}: {
  menu: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
  };
  restaurant: RestaurantCart;
}) => {
  const { id, name, description, image, price } = menu;
  const { incrementQuantity, decrementQuantity, menuQuantity } = useCart();
  const { currency, price: formattedPrice } = formatCurrency(price);

  return (
    <div
      className={`p-1 border rounded-lg shadow-sm${
        menuQuantity(menu.id) > 0
          ? " border-2 border-dashed border-violet-700"
          : ""
      }`}
    >
      <div className="flex mb-3">
        <Image
          loader={imageLoader}
          src={image}
          alt={name}
          width={80}
          height={80}
          priority
          className="object-cover rounded-lg mr-3"
        />
        <div>
          <h3 className="text-lg font-bold line-clamp-1">{name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">
          <span className="text-black mr-1">{currency}</span>
          <span className="text-gray-400">{formattedPrice}</span>
        </span>
        {menuQuantity(menu.id) > 0 ? (
          <div className="flex items-center justify-between bg-gray-100 rounded-full w-28 h-8">
            <Button
              onClick={() => decrementQuantity(menu.id)}
              className="bg-white border border-gray-100 hover:bg-slate-100 text-black px-3 py-1 rounded-full h-8"
            >
              -
            </Button>
            <span className="mx-1 space-x-4 text-gray-500">
              {menuQuantity(menu.id)}
            </span>
            <Button
              onClick={() => incrementQuantity(menu, restaurant)}
              className="bg-blue-500 border border-gray-100 hover:bg-blue-700 text-white px-3 py-1 rounded-full h-8"
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => incrementQuantity(menu, restaurant)}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full h-8"
          >
            +
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
