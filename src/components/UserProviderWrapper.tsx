"use client";

import { ReactNode } from "react";
import { UserProvider } from "@/contexts/UserProvider";

type UserProviderWrapperProps = {
  children: ReactNode;
};

export default function UserProviderWrapper({
  children,
}: UserProviderWrapperProps) {
  return <UserProvider>{children}</UserProvider>;
}
