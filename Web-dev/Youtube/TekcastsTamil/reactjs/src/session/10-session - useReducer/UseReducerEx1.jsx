import { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const UseReducerEx1 = () => {
  const initialState = {
    name: "",
    date: "",
    vaccine: "",
  };

  const initialListState = {
    beneficiaryList: [],
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_BENEFICIARY":
        const updatedMembers = [...state.beneficiaryList, action.payload];
        return {
          ...state,
          beneficiaryList: updatedMembers,
        };
        break;

      default:
        return state;
    }
  }
  const [vaccineForm, setVaccineForm] = useState(initialState);
  // const [vaccineData, setVaccineData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialListState);

  // ================== useRef ==================
  // Its return the mutation object
  const refMember = useRef();
  const handleAllClear = (e) => {
    //* set to initial state
    // setVaccineForm(initialState);
    //* Its set to focus on the name element
    refMember.current.focus();
  };
  // ================== useRef ==================
  const handleChange = (e) => {
    setVaccineForm({ ...vaccineForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setVaccineData(vaccineForm);

    // ? useReducer
    dispatch({
      type: "ADD_BENEFICIARY",
      payload: vaccineForm,
    });
    setVaccineForm(initialState);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>useRef</h1>
      <h3 style={{ textAlign: "center" }}>Vaccine Form</h3>
      <p style={{ textAlign: "center" }}>
        {/* {vaccineData && JSON.stringify(vaccineData)} */}
        {/* {JSON.stringify(state)} */}
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
        <h3>Members to be Vaccinated</h3>
        <ol>
          {state &&
            state.beneficiaryList.map((list) => {
              return (
                <>
                  <li key={crypto.randomUUID}>
                    {list.name} |{list.date} |{list.vaccine}
                  </li>
                </>
              );
            })}
        </ol>
      </section>
    </div>
  );
};
export default UseReducerEx1;
