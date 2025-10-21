"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/lib/validation-schemas";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import SocialSignin from "./SocialSignin";

const formSchema = loginFormSchema;

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Assuming an async registration function
      await signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onRequest: () => {
            toast.loading(" Logging in... ");
          },
          onSuccess: () => {
            toast.success(
              "Logged in successfully! Redirecting... "
            );
            router.push("/dashboard");
          },
          onError: (ctx) => {
            toast.error(`Error: ${ctx.error.message}`);
          },
        }
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      toast.dismiss();
    }
  }

  return (
    <Card className="mx-auto md:min-w-md min-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Welcome back! Please enter your details to log in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="abebe@gmail.com"
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        id="password"
                        placeholder="******"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-sm text-gray-500">or</span>
                <div className="h-px flex-1 bg-gray-300" />
              </div>
              <div className="flex flex-col gap-4">
                {/* Social Signin Component */}
                <SocialSignin />
              </div>
            </div>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          You don't have account yet?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
