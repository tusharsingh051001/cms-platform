import { Router } from "express";
import { newClaim, updateClaim} from "../controllers/!controllersExport.js";

const router = Router();

router.post("/new", newClaim);
// router.get("/new", (req, res) => {
//   res.send("This is /api/data/new");
// });
router.patch("/existing/:id", updateClaim);

//router.get("/existing", getClaim);

//router.delete
export default router;
