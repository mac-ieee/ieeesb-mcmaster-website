"use client";
import { Social } from "./social";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/actions/login";

import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormError } from "@/components/form-error";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "../form-success";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          router.push('/settings');
        }
      });
    });
  };

  return (
    <div className="p-10 min-w-[40vw] min-h-[20vh] rounded-2xl bg-white items-center justify-center">
      <h2>Login Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="email@example.com" type="email" />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Link href="/auth/register" className="text-blue-500">Not a User?</Link>

          <Button disabled={isPending} type="submit" className="w-full">Login</Button>
        </form>
      </Form>
      <Social />
    </div>
  );
};
