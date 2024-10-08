"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserProvider";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const { loginWithEmail } = useUser();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value as NonNullable<string>;
    const password = passwordRef.current?.value as NonNullable<string>;

    await loginWithEmail(email, password);

    router.push("/");
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onLogin} className="grid gap-4">
          <div className="grid gap-2">
            <Input
              ref={emailRef}
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input ref={passwordRef} type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Button variant="outline" className="w-full">
            Login with Facebook
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
