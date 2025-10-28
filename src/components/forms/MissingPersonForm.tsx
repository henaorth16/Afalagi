// src/components/forms/MissingPersonForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  missingPersonSchema,
  MissingPersonFormValues,
} from "@/lib/validation-schemas";
import { use, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface MissingPersonFormProps {
  initialData?: MissingPersonFormValues | null;
}

export default function MissingPersonForm({
  initialData,
}: MissingPersonFormProps) {
  const [loading, setLoading] = useState(false);
  const isEditMode: boolean = !!initialData; // ensure the data type is boolean

  const router = useRouter();


  const form = useForm<MissingPersonFormValues>({
    resolver: zodResolver(missingPersonSchema),
    defaultValues: initialData ?? {
      fullName: "",
      gender: "MALE",
      dob: "",
      lastSeenDate: "",
      lastSeenPlace: "",
      clothing: "",
      physicalMarks: "",
      description: "",
      reward: "",
      photoUrl: "",
      // reporterId: data?.user.id || "",
    },
  });

  async function onSubmit(values: MissingPersonFormValues) {
    setLoading(true);
    try {
      const res = await fetch(
        isEditMode
          ? `/api/missing-persons/${initialData?.id}` // update endpoint
          : "/api/missing-persons",
        {
          method: isEditMode ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) throw new Error("Failed to submit data");
      
      toast.success(
        isEditMode ? "updated successfully!" : "submitted successfully!"
      );
    } catch (err) {
      toast.error("Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl my-8 mx-auto p-6 rounded-2xl shadow-md border">
      <h2 className="text-2xl font-semibold mb-6">
        {isEditMode
          ? "Edit Missing Person Record"
          : "Report Missing Family Member"}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* full name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* date fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastSeenDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Seen Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* text fields */}
          <FormField
            control={form.control}
            name="lastSeenPlace"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Seen Place</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Addis Ababa, Bole" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clothing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Clothing Description</FormLabel>
                <FormControl>
                  <Input placeholder="What were they wearing?" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="physicalMarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Physical Marks</FormLabel>
                <FormControl>
                  <Input placeholder="Scars, tattoos, etc." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any other details..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* reward + photo */}
          <FormField
            control={form.control}
            name="reward"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reward (optional)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Enter amount in ETB"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/photo.jpg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? isEditMode
                ? "Updating..."
                : "Submitting..."
              : isEditMode
              ? "Update"
              : "Submit Report"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
