import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const contactSubmissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    subject: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    sourcePage: {
      type: String,
      required: true,
      trim: true
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

export const ContactSubmissionModel =
  models.ContactSubmission ??
  model("ContactSubmission", contactSubmissionSchema);
