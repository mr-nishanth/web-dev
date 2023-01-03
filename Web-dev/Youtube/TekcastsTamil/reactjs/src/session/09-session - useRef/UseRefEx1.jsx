import { useRef, useState } from "react";

const UseRefEx1 = () => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };
  const [vaccineForm, setVaccineForm] = useState(initialState);
  const [vaccineData, setVaccineData] = useState({});

  // ================== useRef ==================
  // Its return the mutation object
  const refMember = useRef();
  const handleAllClear = (e) => {
    setVaccineForm(initialState);
    refMember.current.focus();
  };
  // ================== useRef ==================
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
      <h1 style={{ textAlign: "center" }}>useRef</h1>
      <h3 style={{ textAlign: "center" }}>Vaccine Form</h3>
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
              ref={refMember}
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
            <button className="btn btn-block btn-success" type="submit">
              Add Vaccine
            </button>
            <button
              className="btn btn-block btn-red"
              type="reset"
              onClick={handleAllClear}
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default UseRefEx1;
