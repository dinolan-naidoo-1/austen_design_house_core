"use server";

import { Resend } from "resend";

// Make sure the environment variable is correctly set in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export type FormData = {
    email: string;
    contactNumber: string;
    interestedIn: string;
    message: string;
};

export async function sendEmail(formData: FormData) {
    const { email, contactNumber, interestedIn, message } = formData;

    try {
        const data = await resend.emails.send({
            from: "OrcDev <onboarding@resend.dev>",
            to: "dinolannaidoo9@gmail.com",
            subject: interestedIn ? `New ${interestedIn} Inquiry` : "New Inquiry",
            html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        console.error("Resend error:", error);
        return { success: false, error: "Failed to send email" };
    }
}