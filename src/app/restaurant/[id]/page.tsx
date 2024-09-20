import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { getRestaurantById } from "@/lib/api";
import { notFound } from "next/navigation";
import StartIcon from "@/components/icons/StartIcon";
import LoyaltyIcon from "@/components/icons/LoyaltyIcon";
import MenuItems from "@/components/MenuItems";
import { imageLoader } from "@/lib/imageLoader";

type MetadataParams = {
  params: { id: string };
};

const RestaurantDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const restaurant = await getRestaurantById(id);

  if (!restaurant) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <header className="relative">
        {/* <Image
          loader={imageLoader}
          alt={`Image of ${restaurant.name}`}
          className="object-cover h-48 w-full"
          src={restaurant.image}
          width={100}
          height={100}
          priority
        />
        <Image
          loader={imageLoader}
          className="absolute top-3/4 left-4 h-20 w-20 border-4 border-white"
          src={restaurant.image}
          width={100}
          height={100}
          alt={`Logo of ${restaurant.name}`}
          priority
        /> */}
        <img
          className="object-cover h-48 w-full"
          src={restaurant.image}
          alt={`Image of ${restaurant.name}`}
        />
        <img
          className="absolute top-3/4 left-4 h-20 w-20 border-4 border-white"
          src={restaurant.image}
          alt={`Logo of ${restaurant.name}`}
        />
      </header>
      <section className="px-4 mt-7">
        <h1 className="text-2xl font-bold text-gray-900">{restaurant.name}</h1>
        <div className="text-sm text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
          <div>
            <p className="font-semibold">Specialties :</p>
            <p>{restaurant.specialties.join(" - ")}</p>
            <p className="mt-4">{restaurant.description}</p>
          </div>
          <div>
            <p className="font-semibold">Info :</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur in suscipit autem animi, voluptas hic beatae ducimus
              qui corporis, cupiditate, eum id. Culpa deleniti debitis quaerat
              similique modi non repellendus.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <dl className="text-sm font-medium flex items-center space-x-4">
            <div className="flex items-center">
              <dt className="sr-only">Rating</dt>
              <dd className="flex items-center text-indigo-600">
                <StartIcon />
                <span className="ml-1">
                  {restaurant.rating}
                  <span className="text-slate-400 font-normal">
                    ({restaurant.reviewCount})
                  </span>
                </span>
              </dd>
            </div>
            <div className="flex items-center">
              <dt className="sr-only">Loyalty</dt>
              <dd className="flex items-center text-slate-400">
                <LoyaltyIcon />
                <span className="ml-1">Carte de fidélité</span>
              </dd>
            </div>
            <div className="flex items-center">
              <dt className="sr-only">Delivery fee</dt>
              <dd className="text-green-700">
                0,00 € delivery fee (new customers)
              </dd>
            </div>
          </dl>
        </div>
        <MenuItems
          restaurant={{
            id: restaurant.id,
            name: restaurant.name,
            image: restaurant.image,
            menu: restaurant.menu ?? [],
            rating: restaurant.rating ?? 0,
          }}
        />
      </section>
    </div>
  );
};

export const generateMetadata = async ({
  params,
}: MetadataParams): Promise<Metadata> => {
  const id = params.id;
  const restaurant = await getRestaurantById(id);

  if (!restaurant) {
    return notFound();
  }

  const title = `${restaurant.name} | Eazy Eats`;

  return {
    title,
    description: restaurant.description,
  };
};

export default RestaurantDetails;
