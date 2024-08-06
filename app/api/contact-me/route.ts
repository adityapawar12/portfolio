import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { data: emailData, error } = await resend.emails.send({
      from: "Protfolio Contact <onboarding@resend.dev>",
      to: ["adityapawar743.ap5@gmail.com"],
      subject: "Contacted from protfolio!",
      html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            text-align: center;
            background-color: #2c3e50;
            color: #fff;
            padding: 20px;
            border-bottom: 2px solid #1a252f;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
        }
        .content p {
            margin: 15px 0;
            font-size: 16px;
        }
        .content .label {
            font-weight: bold;
            color: #2c3e50;
            display: inline-block;
            width: 100px;
        }
        .content .message {
            border-left: 3px solid #2c3e50;
            padding-left: 10px;
            color: #555;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            background-color: #f4f4f4;
            padding: 10px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Contact Form Submission</h1>
        </div>
        <div class="content">
            <p><span class="label">Name:</span> ${data.name}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Website:</span> ${data.website}</p>
            <p><span class="label">Message:</span></p>
            <p class="message">${data.query}</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Aditya Pawar</p>
        </div>
    </div>
</body>
</html>
`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(emailData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
