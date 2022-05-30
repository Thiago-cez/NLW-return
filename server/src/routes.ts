import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6a5552397050d4",
    pass: "6e69ecab5049ad",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback =
    /*ainda nao sei o que vai aqui!!*/

    transport.sendMail({
      from: "equipe Feedget<oi@feedget.com",
      to: "Thiago Cezario <thiago.silva.ts804@gmail.com",
      subject: "novo feedback",
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });

  return res.status(201).json({
    data: feedback,
  });
});
