import MissingPersonForm from "@/components/forms/MissingPersonForm";
import { prisma } from "@/lib/prisma";
import { MissingPersonFormValues } from "@/lib/validation-schemas";
import React from "react";

export default async function page() {
  return (
    <div className="space-y-4">
      <MissingPersonForm />
    </div>
  );
}
