import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({
                message: "You are not logged in"
            }, {
                status: 403
            });
        }

        return NextResponse.json({
            user: session.user
        });
    } catch (error) {
        return NextResponse.json({
            message: "You are not logged in"
        }, {
            status: 403
        });
    }
}