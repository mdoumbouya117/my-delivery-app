import { useState, ChangeEvent } from "react";
import { Input } from "./ui/input";

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.slice(0, 9);
    const formatted = limited.replace(/(\d{3})(?=\d)/g, "$1-");

    return formatted;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  return (
    <Input
      type="text"
      id="phone"
      name="phone"
      value={phoneNumber}
      onChange={handleInputChange}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Phone number"
      maxLength={11}
    />
  );
}
