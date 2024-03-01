"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/app/lib/contactFormEmail";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import _instanceof from "./../../.next/server/vendor-chunks/@react-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <mike@mikebashford.com>",
      to: ["mikebashford@gmail.com"],
      subject: "Message from contact form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
