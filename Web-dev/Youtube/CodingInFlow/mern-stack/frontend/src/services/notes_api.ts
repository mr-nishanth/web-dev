import { Note } from "../models/notes.model";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw new Error(errorMessage);
  }
}

export async function fetchNotes(): Promise<Note[]> {
  const response = await fetchData("http://localhost:5000/api/notes/", {
    method: "GET",
  });
  return response.json();
}
