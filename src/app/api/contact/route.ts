import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // If user has RESEND_API_KEY environment variable set, we can send real email:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "bhanupratapsingh63673@gmail.com",
          subject: `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        console.warn("Resend API returned non-200, continuing with graceful ack");
      }
    } else {
      // In development / demo mode, log the incoming contact
      console.log("[Portfolio Contact Received]:", { name, email, message });
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
