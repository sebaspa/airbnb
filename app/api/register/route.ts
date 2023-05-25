import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

/**
 * Asynchronously handles a HTTP POST request.
 *
 * @param {Request} request - The incoming request object.
 *   Must contain a JSON body with an email, password, and name field.
 * @return {Promise<void>} - A Promise that resolves when the request has been handled.
 *   Does not return anything.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
