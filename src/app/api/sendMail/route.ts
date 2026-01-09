import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, type, budget, address } = body;

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically send an email using potential providers like Resend, SendGrid, Nodemailer etc.
        // For now, we'll log it to the console (server-side).
        console.log("------------------------------------------------");
        console.log("New Form Submission received:");
        console.log("Name:", name);
        console.log("Phone:", phone);
        if (email) console.log("Email:", email);
        if (address) console.log("Address:", address);
        if (type) console.log("Project Type:", type);
        if (budget) console.log("Budget:", budget);
        if (message) console.log("Message:", message);
        console.log("------------------------------------------------");

        return NextResponse.json(
            { message: "Form submitted successfully", success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing form:", error);
        return NextResponse.json(
            { message: "Failed to process form", success: false },
            { status: 500 }
        );
    }
}
