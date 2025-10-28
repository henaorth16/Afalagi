import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function PUT(req: NextRequest) {
  try {
    // 🔐 1. Validate session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "You must be logged in to perform this action." },
        { status: 403 }
      );
    }

    // 🔍 2. Parse and validate request body
    const data = await req.json();

    if (!data?.id) {
      return NextResponse.json(
        { error: "Missing record ID for update." },
        { status: 400 }
      );
    }

    // 🧠 3. Update the record
    const updatedRecord = await prisma.missingPerson.update({
      where: { id: data.id },
      data: {
        fullName: data.fullName,
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
        reporterId: session.user.id,
      },
    });

    // 🎉 4. Return success
    return NextResponse.json(updatedRecord, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error updating record:", error);

    // 🧩 Handle Prisma known errors
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Record not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update missing person record." },
      { status: 500 }
    );
  }
}
