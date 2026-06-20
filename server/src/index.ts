import cors from "cors";
import express from "express";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { connectDatabase } from "./lib/db.js";
import { contactRouter } from "./routes/contact.js";
import { profileRouter } from "./routes/profile.js";
import { projectsRouter } from "./routes/projects.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDirCandidates = [join(__dirname, "../public"), join(__dirname, "../../public")];
const publicDir = publicDirCandidates.find((candidate) => existsSync(candidate));
const port = Number(process.env.PORT ?? 5050);

await connectDatabase();

const app = express();

app.use(
  cors({
    origin: true
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.use("/api/profile", profileRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

if (publicDir) {
  app.use(express.static(publicDir));

  app.get("*", (request, response, next) => {
    if (request.path.startsWith("/api")) {
      return next();
    }

    return response.sendFile(join(publicDir, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});
