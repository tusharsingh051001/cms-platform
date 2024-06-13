import { Router } from "express";
import {
  newClaim,
  updateClaim,
  getClaim,
  deleteClaim,
} from "../controllers/!controllersExport.js";

const router = Router();

router.post("/new", newClaim);
// router.get("/new", (req, res) => {
//   res.send("This is /api/data/new");
// });
router.patch("/existing/:id", updateClaim);
router.get("/view/:id", getClaim);
router.delete("/delete/:id", deleteClaim);

export default router;
