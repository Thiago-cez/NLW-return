import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6a5552397050d4",
    pass: "6e69ecab5049ad",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "equipe Feedget<oi@feedget.com",
      to: "Thiago Cezario <thiago.silva.ts804@gmail.com",
      subject,
      html: body,
    });
  }
}
