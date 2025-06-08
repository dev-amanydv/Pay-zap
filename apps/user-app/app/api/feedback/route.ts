import db from "@repo/db/client";

export async function POST ( request:any ) {
    const body = await request.json();
    const { email, feedback } = body;

    if (!email || !feedback) {
        return new Response(JSON.stringify({
            error: 'All fields are required'
        }),{
            status: 400
        })
    }
    const saveFeedback = await db.feedback.create({
        data: {
            email: email,
            feedback: feedback
        }
    })
    console.log("Feedback recieved: ", saveFeedback);
    return new Response(JSON.stringify({ message: 'Feedback submitted successfully! '}), {
        status: 200
    })

}