import { Router } from "express";
import { CreditCardController } from "../controllers/creditcard.controller.js";

const router = Router();

router.post("/", CreditCardController.create);
router.get("/:email", CreditCardController.getByEmail);
router.put("/:id", CreditCardController.update);
router.delete("/:id", CreditCardController.delete);

export default router;
