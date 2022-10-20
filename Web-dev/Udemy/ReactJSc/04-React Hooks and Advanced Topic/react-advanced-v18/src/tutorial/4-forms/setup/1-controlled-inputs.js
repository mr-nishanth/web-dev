import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted");
    // console.log(firstName,email)

    if (firstName && email) {
      // console.log("form submitted");
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      // console.log(person);
      setPeople((prePeople) => {
        return [...prePeople, person];
      });

      // again empty the firstName and email
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        {/* <form action="" method="post" className="form" onSubmit={handleSubmit}> */}
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* <button type="submit" > */}
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>

      <article>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
