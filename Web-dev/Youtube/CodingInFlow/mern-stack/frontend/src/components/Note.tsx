import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import React from "react";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/notes.model";
import { formatDate } from "../utils/formatDate";
import { MdDelete } from "react-icons/md";
interface NoteProps {
  note: NoteModel;
  className?: string;
  onDeleteNoteClicked: (note: NoteModel) => void;
  onNoteClicked: (note: NoteModel) => void;
}

const Note = ({
  note,
  className,
  onDeleteNoteClicked,
  onNoteClicked,
}: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = `Updated: ${formatDate(updatedAt)}`;
  } else {
    createdUpdatedText = `Created: ${formatDate(createdAt)}`;
  }
  return (
    <Card className={`${styles.noteCard} ${className}`} onClick={onNoteClicked}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={`${styleUtils.flexCenter}`}>
          {title}{" "}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>

        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};
export default Note;
