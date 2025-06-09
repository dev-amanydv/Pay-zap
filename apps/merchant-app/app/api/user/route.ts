import { NextResponse } from "next/server"
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";

export const GET = async () => {
    try {
        const hashedPassword = await bcrypt.hash("defaultPassword", 10);
        await prisma.user.upsert({
            where: { email: "test@example.com" },
            update: {}, // leave empty if you don't want to update anything
            create: {
                email: "test@example.com",
                name: "Test User",
                number: "+1234567890",
                password: hashedPassword
            }
        });
        return NextResponse.json({
            message: "User created successfully"
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Error creating user"
        }, {
            status: 500
        });
    }
}