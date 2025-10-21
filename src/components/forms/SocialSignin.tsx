import React from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner';
import { signIn } from '@/lib/auth-client';

export default function SocialSignin() {

    async function handleGithubSignIn() {
        const { error, data } = await signIn.social(
          {
            provider: "github",
            // optionally add callback URLs if you want custom flow:
            callbackURL: "/dashboard",
            // errorCallbackURL: "/sign-in/error",
            // newUserCallbackURL: "/welcome",
            // disableRedirect: false,   // keep true only if you plan to handle redirect yourself
          },
          {
            onRequest: () => {
              toast.loading("Redirecting to GitHub…");
            },
            onError: (ctx:any) => {
              toast.error(`Error: ${ctx.error?.message ?? "Unknown error"}`);
            },
            onSuccess: (ctx:any) => {
              toast.success("Signed in successfully!");
              // You could redirect here if needed: router.push("/dashboard");
            },
          }
        );
        if (error) {
          console.error("GitHub sign-in error:", error);
          return;
        }
        console.log("GitHub social sign-in result:", data);
      }
    async function handleGoogleSignIn() {
        const { error, data } = await signIn.social(
          {
            provider: "google",
            // optionally add callback URLs if you want custom flow:
            callbackURL: "/dashboard",
            // errorCallbackURL: "/sign-in/error",
            // newUserCallbackURL: "/welcome",
            // disableRedirect: false,   // keep true only if you plan to handle redirect yourself
          },
          {
            onRequest: () => {
              toast.loading("Redirecting to Google");
            },
            onError: (ctx:any) => {
              toast.error(`Error: ${ctx.error?.message ?? "Unknown error"}`);
            },
            onSuccess: (ctx:any) => {
              toast.success("Signed in successfully!");
              // You could redirect here if needed: router.push("/dashboard");
            },
          }
        );
        if (error) {
          console.error("Google sign-in error:", error);
          return;
        }
        console.log("Google social sign-in result:", data);
      }


  return (
    <div className="w-full flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  className="flex-1 cursor-pointer"
                  onClick={handleGoogleSignIn}
                >
                  <svg
                  fontSize={"28px"}
                    className="Bz112c-E3DyYd"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4285F4"
                      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                    ></path>
                    <path
                      fill="#EA4335"
                      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                    ></path>
                    <path fill="none" d="M2 2h44v44H2z"></path>
                  </svg>
                   Google
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="flex-1 cursor-pointer"
                  onClick={handleGithubSignIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-1"
                  >
                    <path d="M7.975 0C3.58 0 0 3.657 0 8.17c0 3.612 2.292 6.682 5.47 7.766.4.075.547-.175.547-.388 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.938-.89-1.188-.89-1.188-.727-.5.055-.49.055-.49.803.057 1.225.84 1.225.84.714 1 1.873 1.872 2.322 1.41.072-.49.28-1.373.508-1.688-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.588.824-2.148-.083-.202-.357-1.016.078-2.117 0 0 .672-.218 2.2.82a7.48 7.48 0 012.003-.275c.68.003 1.36.093 2.003.275 1.527-1.038 2.198-.82 2.198-.82.437 1.101.163 1.915.08 2.117.513.56.823 1.275.823 2.148 0 3.073-1.87 3.75-3.653 3.947.288.25.543.738.543 1.488 0 1.074-.01 1.942-.01 2.205 0 .215.144.466.55.387C13.71 14.85 16 11.78 16 8.17 16 3.657 12.42 0 7.975 0z" />
                  </svg>
                   Github
                </Button>
              </div>
  )
}
