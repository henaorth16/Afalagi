import MissingPersonForm from "@/components/forms/MissingPersonForm";
import { prisma } from "@/lib/prisma";
import { MissingPersonFormValues } from "@/lib/validation-schemas";
import React from "react";





export default async function editpage() {
   const person = await prisma.missingPerson.findFirst({
    where: { fullName: "Henok emyaye" },
  });

  if (!person) {
    return <div>No data found</div>;
  }

  const initialData: MissingPersonFormValues = {
      id: person.id,
      fullName: person.fullName,
      gender: person.gender,
      dob: person.dob.toISOString().split('T')[0],
      lastSeenDate: person.lastSeenDate.toISOString().split('T')[0],
      lastSeenPlace: person.lastSeenPlace,
      clothing: person.clothing ?? '',
      physicalMarks: person.physicalMarks ?? '',
      description: person.description ?? '',
      reward: person.reward?.toString() ?? '',
      photoUrl: person.photoUrl ?? '',
    };

  if (!initialData) {
    return <div>No record found for this person.</div>;
  }
  return (
    <div className="space-y-4">
      <MissingPersonForm initialData={initialData} />
    </div>
  );
}
