import { userModel } from "@/backend/models/user-model";
import { dbconnect } from "@/backend/mongo/mongo";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { fname, lname, email, password } = await request.json();

    await dbconnect();
    const existingUser = await userModel.findOne({ email });
    console.log(existingUser);
    if (existingUser)
      return new NextResponse(
        JSON.stringify({ error: "Email already registered" }),
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name: `${fname} ${lname}`,
      email,
      password: hashedPassword,
    };
    console.log(newUser);

    await userModel.create(newUser);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (e) {
    return new NextResponse(e.message, { status: 500 });
  }
};
