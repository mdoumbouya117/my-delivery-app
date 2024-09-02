"use client";

import { FormEvent, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/table/Table";
import { columns } from "@/components/table/Columns";
import { PlusCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import ImageUploadBlock from "@/components/Image";
import Combobox from "@/components/Combobox";
import PhoneNumberInput from "@/components/PhoneNumber";
import { getRestaurants } from "@/lib/api";
import { specialties } from "@/shared/data/data";

export type RestaurantTable = {
  id: string;
  owner: string;
  phone: string;
  email?: string;
  name: string;
  description?: string;
  specialties: string[];
  image: string;
  logo: string;
  status: "active" | "deactive";
};

export default function ManageRestaurants() {
  const formRef = useRef<HTMLFormElement>(null);
  const [restaurants, setRestaurants] = useState(getRestaurants());
  const [addingRestaurant, setAddingRestaurant] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [logo, setLogo] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleSpecialtiesChange = (values: string[]) => {
    setSelectedSpecialties(values);
  };

  const handleImageChange = (
    setter: React.Dispatch<React.SetStateAction<File | null>>,
    file: File | null
  ) => {
    if (file) {
      setter(file);
    }
  };

  const handleAddRestaurant = (event: FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get("name") as string;
      const description = formData.get("description") as string;
      const owner = formData.get("owner") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;

      setRestaurants([
        {
          id: Date.now().toString(),
          name,
          owner,
          description,
          image: image ? URL.createObjectURL(image) : "",
          logo: logo ? URL.createObjectURL(logo) : "",
          email,
          phone,
          specialties: selectedSpecialties,
          status: "deactive",
        },
        ...restaurants,
      ]);

      formRef.current.reset();
    }
  };

  const handleDeleteRestaurant = (id: string) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  const handleEditRestaurant = (
    id: string,
    updatedRestaurant: Partial<RestaurantTable>
  ) => {
    setRestaurants(
      restaurants.map((r) => (r.id === id ? { ...r, ...updatedRestaurant } : r))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Restaurants</h1>
      {addingRestaurant ? (
        <Card className="max-w-md m-auto">
          <CardHeader>
            <CardTitle>New Restaurant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <form
              onSubmit={handleAddRestaurant}
              className="space-y-3"
              ref={formRef}
            >
              <ImageUploadBlock
                onImageChange={(file) => handleImageChange(setLogo, file)}
                name="logo"
              />
              <ImageUploadBlock
                onImageChange={(file) => handleImageChange(setImage, file)}
                name="image"
              />
              <Input placeholder="Name" name="name" />
              <Input placeholder="Owner/Manager Name" name="owner" />
              <Textarea placeholder="Description" name="description" />
              <Input placeholder="Email Address" name="email" />
              <PhoneNumberInput />
              <Combobox
                options={specialties}
                onSelectedValuesChange={handleSpecialtiesChange}
              />

              <div className="space-x-3">
                <Button onClick={() => setAddingRestaurant(false)}>
                  Cancel
                </Button>
                <Button>Add</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Button onClick={() => setAddingRestaurant(true)}>
          <PlusCircle className="h-3.5 w-3.5 mr-1" />
          Add New Restaurant
        </Button>
      )}
      <DataTable data={restaurants} columns={columns} />
    </div>
  );
}
