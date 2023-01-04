import { useContext, useReducer, useRef, useState } from "react";
import VaccineContext from "../context/VaccineContext";

const VaccineForm = () => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };

  const [vaccineForm, setVaccineForm] = useState(initialState);
  const { dispatch } = useContext(VaccineContext);
  // ================== useRef ==================
  const refMember = useRef();
  const handleAllClear = (e) => {
    refMember.current.focus();
  };
  // ================== useRef ==================
  const handleChange = (e) => {
    setVaccineForm({ ...vaccineForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // ? useReducer
    dispatch({
      type: "ADD_BENEFICIARY",
      payload: vaccineForm,
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>useReducerContextStateRef</h1>
      <h3 style={{ textAlign: "center" }}>Vaccine Form</h3>
      <p style={{ textAlign: "center" }}></p>
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
export default VaccineForm;
