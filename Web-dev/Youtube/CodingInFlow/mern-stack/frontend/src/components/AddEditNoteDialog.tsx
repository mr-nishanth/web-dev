import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Note } from "../models/notes.model";
import { NoteInput } from "../services/notes_api";
import * as NoteApi from "../services/notes_api";
interface AddEditNoteDialogProps {
  onDismiss: () => void;
  onNoteSave: (note: Note) => void;
}
const AddEditNoteDialog = ({
  onDismiss,
  onNoteSave,
}: AddEditNoteDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>();

  async function onSubmit(input: NoteInput) {
    try {
      const noteResponse = await NoteApi.createNote(input);
      onNoteSave(noteResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addNoteForm" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              isInvalid={!!errors.title}
              {...register("title", { required: true })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title && "Title is required"}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter title"
              {...register("text")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" form="addNoteForm" disabled={isSubmitting}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddEditNoteDialog;
