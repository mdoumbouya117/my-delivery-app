import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type SpecialityFilterProps = {
  specialties: string[];
  selectedSpeciality: string | null;
  onSelect: (speciality: string) => void;
};

const SpecialtyFilter = ({
  specialties,
  selectedSpeciality,
  onSelect,
}: SpecialityFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSpecialityClick = (speciality: string) => {
    onSelect(speciality);
    const params = new URLSearchParams(searchParams.toString());
    params.set("speciality", speciality);
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const speciality = searchParams.get("speciality");
    if (speciality) {
      onSelect(speciality);
    }
  }, [onSelect, searchParams]);

  return (
    <div className="flex overflow-x-auto space-x-4 pr-4 py-4">
      {specialties.map((speciality, index) => (
        <button
          key={index}
          className={`flex-shrink-0 text-sm font-semibold py-2 px-4 rounded-full shadow transition-colors duration-300 
                        ${
                          selectedSpeciality === speciality
                            ? "bg-[#134571] text-white"
                            : "text-black"
                        }`}
          onClick={() => handleSpecialityClick(speciality)}
        >
          {speciality}
        </button>
      ))}
    </div>
  );
};

export default SpecialtyFilter;
