import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("Nishanth M");

  if (!user) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
        corporis molestiae esse, quia sit eaque cumque adipisci voluptatem eos
        deserunt porro, assumenda facilis, quasi dicta impedit rerum! Neque
        eius, error corrupti doloribus incidunt modi odit exercitationem illo
        autem dignissimos et omnis ipsa deserunt nulla, quibusdam nobis
      </p>
      <p>
        molestias quos saepe fugiat ullam, mollitia debitis ad nam. Cumque earum
        doloribus explicabo aspernatur nihil fugit odit et. Dolor a optio
        tempore distinctio amet quis repudiandae doloremque fugiat consequuntur?
        Nulla nam dignissimos sint nemo neque distinctio, amet quam ex assumenda
        rem facilis voluptates quas, necessitatibus aspernatur tenetur id
        dolorum sapiente corrupti voluptate fugiat.
      </p>
      <p>
        tempore distinctio amet quis repudiandae doloremque fugiat consequuntur?
        Nulla nam dignissimos sint nemo neque distinctio, amet quam ex assumenda
        rem facilis voluptates quas, necessitatibus aspernatur tenetur id
        dolorum sapiente corrupti voluptate fugiat.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};
export default About;
