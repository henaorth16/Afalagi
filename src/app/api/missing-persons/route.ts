import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const session = await auth.api.getSession({
    headers: await headers()
  })
  if(session == null) {
    return NextResponse.json(
    { error: "you are not logged in" },
      { status: 403 })
  }
  try {
    const data = await req.json();

    const createdRecord = await prisma.missingPerson.create({
      data: {
        fullName: data.fullName as string,
        gender: data.gender,
        dob: new Date(data.dob),
        lastSeenDate: new Date(data.lastSeenDate),
        lastSeenPlace: data.lastSeenPlace,
        clothing: data.clothing || null,
        physicalMarks: data.physicalMarks || null,
        description: data.description || null,
        reward: data.reward ? parseFloat(data.reward) : null,
        status: data.status || "ACTIVE",
        photoUrl: data.photoUrl || null,
        reporterId: session?.user.id,
      },
    });

    return NextResponse.json(createdRecord, { status: 201 });
  } catch (error: any) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      { error: "Failed to create missing person record" },
      { status: 500 }
    );
  }
}
