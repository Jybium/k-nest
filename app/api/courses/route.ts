import { db } from "@/lib/database";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return new NextResponse(JSON.stringify(course), { status: 201 });
    
  } catch (error) {
    console.log("[COURSES], Error creating course", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
