"use server"

import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export async function createOnRampTransaction (provider: string, amount: number){
    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        throw new Error("Unauthorized")
    }

    const token = (Math.random()*1000).toString();
    await prisma.onRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(session.user.id),
            amount: amount*100
        }
    })
    
    // Send request to bank webhook
    try {
        const response = await fetch('http://localhost:3003/hdfc-webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                user_identifier: session.user.id,
                amount: amount*100
            })
        });
        console.log("Response: ", response)
        
        return {
            message: response.status === 200 ? "Payment successful" : "onRamp added, bank is down"
        }
    } catch (error) {
        console.error('Error sending webhook:', error);
        // We don't throw here since the transaction is already created
        // The bank can retry the webhook later
        return {
            message: "onRamp added, bank is down"
        }
    }
}