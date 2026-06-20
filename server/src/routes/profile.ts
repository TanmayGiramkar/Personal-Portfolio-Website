import { Router } from "express";
import { profile } from "../data/seed.js";

const profileRouter = Router();

profileRouter.get("/", (_request, response) => {
  response.json(profile);
});

export { profileRouter };
