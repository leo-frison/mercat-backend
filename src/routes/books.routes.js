import { Router } from "express";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getBook,
} from "../controllers/book.controller.js";

const router = Router();

// Routes
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/", getBooks);
router.get("/:id", getBook);

export default router;
