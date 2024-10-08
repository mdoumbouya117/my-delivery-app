"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Combobox from "@/components/Combobox";
import { specialties } from "@/shared/data/data";
import { useUser } from "@/contexts/UserProvider";

type UserType = "Customer" | "Courier" | "Restaurant";

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const restaurantNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [userType, setUserType] = useState<UserType>("Customer");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const phoneRef = useRef<string>();
  const [error, setError] = useState<string>();
  const { registerWithEmail } = useUser();
  const router = useRouter();

  const handlePhoneChange = (value: string) => {
    phoneRef.current = value;
  };

  const handleSpecialtiesChange = (values: string[]) => {
    setSelectedSpecialties(values);
  };

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value as NonNullable<string>;
    const password = passwordRef.current?.value as NonNullable<string>;
    const restaurantName = restaurantNameRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const phone = "+" + phoneRef.current;

    let additionalData: { [key: string]: any } = {
      userType,
      phone,
      displayName: restaurantName || `${firstName} ${lastName}`,
    };

    if (userType === "Restaurant") {
      additionalData = {
        ...additionalData,
        restaurantName,
        specialties: selectedSpecialties,
      };
    } else {
      additionalData = {
        ...additionalData,
        firstName,
        lastName,
      };
    }

    try {
      await registerWithEmail(email, password, additionalData);

      router.push("/");
    } catch (err) {
      setError("Error creating account");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Select
                value={userType}
                onValueChange={(value: UserType) => setUserType(value)}
              >
                <SelectTrigger id="userType">
                  <SelectValue placeholder={userType} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User type</SelectLabel>
                    {["Customer", "Courier", "Restaurant"].map((userT) => (
                      <SelectItem key={userT} value={userT}>
                        {userT}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {userType === "Restaurant" ? (
              <>
                <div className="grid gap-2">
                  <Combobox
                    options={specialties}
                    onSelectedValuesChange={handleSpecialtiesChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="Restaurant name"
                    ref={restaurantNameRef}
                    required
                  />
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Input placeholder="First name" ref={firstNameRef} required />
                </div>
                <div className="grid gap-2">
                  <Input placeholder="Last name" ref={lastNameRef} required />
                </div>
              </div>
            )}
            <div className="grid gap-2">
              <PhoneInput
                enableSearch
                disableSearchIcon
                onChange={handlePhoneChange}
                searchClass="w-11/12 m-0 "
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                country="gn"
                placeholder="Enter phone number"
                inputStyle={{
                  width: "100%",
                  height: "40px",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                ref={passwordRef}
                placeholder="Passwword"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Facebook
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
