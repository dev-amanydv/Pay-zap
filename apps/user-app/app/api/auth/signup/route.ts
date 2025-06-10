import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@repo/db/client';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, password } = body;

    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const existingUser = await db.user.findUnique({
      where: { number: phone }
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        number: phone,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User created successfully.', userId: newUser.id });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
