import { Request, Response } from "express";
import Notes from "../models/Notes";

export const createNote = async (req: Request, res: Response): Promise<any> => {
  try {
    const note = req.body.note;
    const newNote = await Notes.create({ note });

    res.status(201).json(newNote);
  } catch (error: Error | any) {
    res.status(500).json({ error: error?.message });
  }
};

export const getAllNotes = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const notes = await Notes.find({});
    res.status(200).json(notes);
  } catch (error: Error | any) {
    res.status(500).json({ error: error?.message });
  }
};

export const deleteNote = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req?.params?.id;
    const deletedNote = await Notes.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error: Error | any) {
    res.status(500).json({ error: error?.message });
  }
};

export const updateNote = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const updatedNote = await Notes.findByIdAndUpdate(
      id,
      { note: req.body.note },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error: Error | any) {
    res.status(500).json({ error: error?.message });
  }
};

export const completeNote = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id = req.params.id;

    const updatedNote = await Notes.findByIdAndUpdate(
      id,
      { isCompleted: true },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error: Error | any) {
    res.status(500).json({ error: error?.message });
  }
};
