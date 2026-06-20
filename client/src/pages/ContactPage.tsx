import { FormEvent, useState } from "react";
import type { ContactSubmissionInput } from "../../../shared/types";
import { useSiteData } from "../context/SiteDataContext";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  sourcePage: "contact"
};

export function ContactPage() {
  const { profile } = useSiteData();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const destinationEmail = profile?.socials.email ?? "tanmaygiramkar@gmail.com";
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(formatMailBody(form));

      window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;

      setStatus({
        type: "success",
        message: `Your email app should open now. If it does not, email ${destinationEmail} directly.`
      });
      setForm(initialForm);
    } catch (caughtError) {
      setStatus({
        type: "error",
        message:
          caughtError instanceof Error
            ? caughtError.message
            : "Unable to send the message right now."
      });
    }
  }

  return (
    <div className="shell-container">
      <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <span className="section-label">Contact</span>
          <h1 className="section-title mt-4">Get in touch.</h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg">
            If you have a placement opportunity, internship opening, or just want to connect, feel free to reach out.
          </p>
          <p className="mt-4 max-w-xl text-sm text-mist">
            This form now prepares an email draft, which keeps the site fully static and easy to deploy on Cloudflare Pages.
          </p>

          <div className="mt-8 space-y-4 text-base text-mist">
            <p>
              Email: {profile?.socials.email ?? "tanmaygiramkar@gmail.com"}
            </p>
            <p>
              Availability: {profile?.availability ?? "Open to placements and entry-level roles."}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={
                  profile?.socials.linkedin ??
                  "http://www.linkedin.com/in/tanmay-giramkar-901a602b1"
                }
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                LinkedIn
              </a>
              <a
                href={profile?.socials.github ?? "https://github.com/TanmayGiramkar"}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form className="panel-surface p-7 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-muted/75">
                Name
              </span>
              <input
                className="ringed-input"
                type="text"
                required
                minLength={2}
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-muted/75">
                Email
              </span>
              <input
                className="ringed-input"
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="name@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-muted/75">
              Subject
            </span>
            <input
              className="ringed-input"
              type="text"
              required
              minLength={3}
              value={form.subject}
              onChange={(event) =>
                setForm((current) => ({ ...current, subject: event.target.value }))
              }
              placeholder="Placement role / internship / recruiter inquiry"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-muted/75">
              Message
            </span>
            <textarea
              className="ringed-input min-h-[180px] resize-y"
              required
              minLength={20}
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              placeholder="Share the role, company, timeline, or next steps."
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="button-primary"
            >
              Open Email Draft
            </button>

            {status.type !== "idle" ? (
              <p
                className={`text-sm ${
                  status.type === "error"
                    ? "text-red-300"
                    : status.type === "success"
                      ? "text-success"
                      : "text-mist"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  );
}

function formatMailBody(form: ContactSubmissionInput) {
  return [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Source: ${form.sourcePage}`,
    "",
    form.message
  ].join("\n");
}
