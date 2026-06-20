import { Router } from "express";
import { z } from "zod";
import type { ContactSubmission } from "../../../shared/types.js";
import { hasDatabaseConnection } from "../lib/db.js";
import { ContactSubmissionModel } from "../models/ContactSubmission.js";

const contactRouter = Router();
const localFallbackInbox: ContactSubmission[] = [];

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z
    .string()
    .min(20, "Please share a little more detail in the message.")
    .max(1500, "Message is too long."),
  sourcePage: z.string().min(1).max(120)
});

contactRouter.post("/", async (request, response) => {
  const parsed = contactSchema.safeParse(request.body);

  if (!parsed.success) {
    return response.status(400).send(parsed.error.errors[0]?.message ?? "Invalid form.");
  }

  const submission: ContactSubmission = {
    ...parsed.data,
    timestamp: new Date().toISOString()
  };

  if (hasDatabaseConnection()) {
    await ContactSubmissionModel.create({
      ...submission,
      timestamp: new Date(submission.timestamp)
    });

    return response.status(201).json({
      message: "Message saved successfully.",
      storedIn: "mongodb"
    });
  }

  localFallbackInbox.push(submission);

  return response.status(201).json({
    message: "Message stored in memory. Add MongoDB for persistent storage.",
    storedIn: "memory"
  });
});

export { contactRouter };
