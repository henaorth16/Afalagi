import { z } from "zod"

export const registerFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long." })
      .max(50, { message: "Name must be less than 50 characters." }),

    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." }),

    password: z
      .string()
      .min(6, { message: "Password must be at least 8 characters long." })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." }),

    confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // 👈 shows error on confirm field
  })

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
})
