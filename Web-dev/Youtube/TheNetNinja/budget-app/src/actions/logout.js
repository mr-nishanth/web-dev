import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete the user
  deleteItem({
    key: "userName",
  });
  // Redirect the user
  return redirect("/");
}
