import { Router } from "express";
import {
  completeNote,
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../../controllers/notes";

const router = Router();

router.post("/create", createNote);

router.get("/getAll", getAllNotes);

router.delete("/delete/:id", deleteNote);

router.put("/update/:id", updateNote);

router.get("/complete/:id", completeNote);

export default router;
