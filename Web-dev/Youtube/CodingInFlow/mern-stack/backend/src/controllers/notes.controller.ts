import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import Note from "../models/Node.model";
export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await Note.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const { noteId } = req.params;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid noteId");
    }

    const note = await Note.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found");
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const { title, text } = req.body;
  try {
    if (!title || title.trim() === "") {
      throw createHttpError(400, "Title is required");
    }

    const newNote = await Note.create({ title, text });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
