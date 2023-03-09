import { redirect } from "react-router-dom";

export const contactAction = async ({ request }) => {
  console.log({ request });
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log({ submission });

  //  * NOTE: Send API Post Request

  //   Add some dummy validation
  if (submission.message.length < 10) {
    return {
      error: "Message must be over 10 character longer",
    };
  }
  //   but simply redirect the user
  return redirect("/");
};
