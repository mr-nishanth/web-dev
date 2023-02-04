import { Router } from "express";
import {
  createTransaction,
  getTransaction,
} from "../controllers/transactions.controller.js";
const router = Router();

router.route("/transaction").get(getTransaction).post(createTransaction);

export default router;
