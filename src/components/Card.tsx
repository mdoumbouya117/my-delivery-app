import Image from "next/image";
import StartIcon from "./icons/StartIcon";
import Link from "next/link";
import LocationIcon from "./icons/LocationIcon";
import { imageLoader } from "@/lib/imageLoader";

const revalidate = 1;
type CardProps = {
  id: string;
  image: string;
  name: string;
  rating?: number;
  reviewCount?: number;
  bgColor: string;
  city: string;
  specialties: string[];
};

const Card = ({
  id,
  image,
  name,
  rating,
  reviewCount,
  city,
  specialties,
  bgColor = "#fff",
}: CardProps) => (
  <Link
    key={id}
    href={`/restaurant/${id}`}
    className="transform transition-transform duration-300 hover:scale-95"
    style={{ backgroundColor: bgColor }}
  >
    <div className="w-full overflow-hidden relative h-0 pb-[56.25%]">
      <Image
        loader={imageLoader}
        src={image}
        alt={name}
        width={500}
        height={300}
        priority
        className="object-cover w-auto group-hover:opacity-75"
      />
    </div>
    <div className="px-2 pb-2">
      <h3 className="mt-2 text-lg font-semibold text-gray-800">{name}</h3>
      <dl>
        <dt className="sr-only">Specialties</dt>
        <dd>
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 mr-1"
            >
              {specialty}
            </span>
          ))}
        </dd>
      </dl>
      <dl className="mt-1 text-sm font-medium flex items-center">
        <dt className="sr-only">Rating</dt>
        <dd className="flex items-center text-indigo-600">
          <StartIcon />
          <span className="ml-1">
            {rating}
            <span className="text-slate-400 font-normal">({reviewCount})</span>
          </span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center text-slate-500 ml-4">
          <LocationIcon />
          <span className="ml-1">{city}</span>
        </dd>
      </dl>
    </div>
  </Link>
);

export default Card;
