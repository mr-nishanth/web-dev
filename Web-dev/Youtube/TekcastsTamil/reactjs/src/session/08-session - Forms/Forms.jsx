import { useState } from "react";

const Forms = () => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };
  const [vaccineForm, setVaccineForm] = useState(initialState);
  const [vaccineData, setVaccineData] = useState({});
  const handleChange = (e) => {
    setVaccineForm({ ...vaccineForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setVaccineData(vaccineForm);
    setVaccineForm(initialState);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Vaccine Form</h1>
      <p style={{ textAlign: "center" }}>
        {vaccineData && JSON.stringify(vaccineData)}
      </p>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={vaccineForm.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              name="date"
              className="form-control"
              value={vaccineForm.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vaccine">vaccine</label>
            <input
              type="text"
              id="vaccine"
              name="vaccine"
              className="form-control"
              value={vaccineForm.vaccine}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Vaccine
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Forms;
