"use client";

import React, { useState } from "react";
import Card from "./Card";
import SpecialityFilter from "./SpecialtiesFilter";
import { useSearchParams } from "next/navigation";
import { restaurants } from "@/shared/data";

const revalidate = 5;

const specialties = [
  "All",
  "Italian",
  "Japanese",
  "Burgers",
  "Pasta",
  "Seafood",
  "Wine",
  "Fries",
  "Milkshakes",
];

const RestaurantList = () => {
  const searchParams = useSearchParams();
  const speciality = searchParams.get("speciality");
  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    speciality || "All"
  );

  const handleSpecialitySelect = (speciality: string) => {
    setSelectedSpeciality(speciality);
  };

  const filteredRestaurants = selectedSpeciality
    ? restaurants.filter(
        (restaurant) =>
          restaurant.specialties.includes(selectedSpeciality) ||
          selectedSpeciality === "All"
      )
    : restaurants;

  return (
    <div>
      <SpecialityFilter
        specialties={specialties}
        selectedSpeciality={selectedSpeciality}
        onSelect={handleSpecialitySelect}
      />
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredRestaurants.map((restaurant, index) => (
          <Card
            id={restaurant.id}
            key={index}
            bgColor={restaurant.bgColor}
            image={restaurant.image}
            name={restaurant.name}
            rating={restaurant.rating}
            reviewCount={restaurant.reviewCount}
            specialties={restaurant.specialties}
            city={restaurant.city}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
