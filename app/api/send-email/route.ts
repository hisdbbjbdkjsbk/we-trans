import { NextResponse } from "next/server";
import { Resend } from "resend";
import axios from "axios";

const resend = new Resend("re_JRhHHGga_AwmXaEYTVfSiW3giv1sCNzf4");
const TELEGRAM_BOT_TOKEN = "7993422020:AAEqEtUUV5Bp4SlqKU-_xPxMr01u8VA8Kjo";
const TELEGRAM_CHAT_ID = 1198969238;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fromWhere, toWhere, name, phone } = data;

    if (!fromWhere || !toWhere || !name || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const beautifulPhone = phone.split(" ").join("");

    const res = await resend.emails.send({
      from: "info@soulbodyhome.com",
      to: "yurri800@gmail.com",
      subject: "New form submission",
      html: `
        <h1>New Form Submission</h1>
        <p><strong>From:</strong> ${fromWhere}</p>
        <p><strong>To:</strong> ${toWhere}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${beautifulPhone}</p>
      `,
    });

    const text = `
📦 Нова заявка з форми:
- Ім’я: ${name}
- Телефон: ${beautifulPhone}
- Звідки: ${fromWhere}
- Куди: ${toWhere}
    `;

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }
    ); // ostaptrans

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: 5914656811,
        text,
        parse_mode: "Markdown",
      }
    ); // ownin

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: 642894689,
        text,
        parse_mode: "Markdown",
      }
    ); // khyliao

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Telegram send error:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
