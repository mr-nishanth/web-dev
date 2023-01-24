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

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

interface UpdateNoteParams {
  noteId: string;
}
export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const { noteId } = req.params;
  const { title: newTitle, text: newText } = req.body;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid noteId");
    }

    if (!newTitle || newTitle.trim() === "") {
      throw createHttpError(400, "Title is required");
    }

    // const updateNote = await Note.findByIdAndUpdate(
    //   noteId,
    //   {
    //     title: newTitle,
    //     text: newText,
    //   },
    //   { new: true }
    // ).exec();
    // if (!updateNote) {
    //   throw createHttpError(404, "Note not found");
    // }
    // res.status(200).json(updateNote);

    const note = await Note.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    note.title = newTitle;
    note.text = newText;
    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

interface deleteNoteParams {
  noteId: string;
}

export const deleteNote: RequestHandler<
  deleteNoteParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const { noteId } = req.params;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid noteId");
    }

    const note = await Note.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    await note.remove();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
