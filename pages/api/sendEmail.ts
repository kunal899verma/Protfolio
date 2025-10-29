import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  error?: string;
  details?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // ✅ Configure mail transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail
        pass: process.env.MAIL_PASS, // app password
      },
    });

    // ✅ Mail content
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER, // where you'll receive form details
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </div>
          </div>
        </div>
      `,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    console.log("Email sent successfully");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Detailed Mail error:", error);
    
    // More detailed error information for debugging
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error message:", errorMessage);
    
    res.status(500).json({ 
      success: false, 
      error: "Failed to send email", 
      details: errorMessage 
    });
  }
}
