import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(`[INCOMING REQUEST] ${req.method} ${req.url}`);
    next();
  });
app.get("/", (req,res) => {
    res.json({
        message: "Web-hook active"
    })
})

app.post("/hdfc-webhook", async (req, res) => {
    console.log("Webhook hit with body: ", req.body);
    //TODO: Add zod validation here?
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    console.log("ready to update balance")
    try {
        await db.$transaction([
            db.balance.upsert({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                update: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                },
                create: {
                    userId: Number(paymentInformation.userId),
                    amount: Number(paymentInformation.amount),
                    locked: 0
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);
        console.log("Balance and onRamp status updated.")
        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error("Error while processing webhook: ", e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.listen(3003);