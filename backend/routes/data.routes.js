import { Router } from "express";
import { newClaim } from "../controllers/!controllersExport.js";

const router = Router();

router.post("/new", newClaim);
router.get("/new", (req, res) => {
  res.send("This is /api/data/new");
});

export default router;
