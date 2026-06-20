import { Router } from "express";
import { projects } from "../data/seed.js";

const projectsRouter = Router();

projectsRouter.get("/", (_request, response) => {
  response.json(projects);
});

export { projectsRouter };
