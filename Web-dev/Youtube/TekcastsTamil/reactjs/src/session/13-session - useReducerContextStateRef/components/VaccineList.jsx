import { useContext } from "react";
import VaccineContext from "../context/VaccineContext";

const VaccineList = () => {
  const { state, dispatch } = useContext(VaccineContext);
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Vaccine</th>
        <th>Action</th>
      </tr>

      {state &&
        state.registrants.map((list) => {
          return (
            <>
              <tr key={crypto.randomUUID}>
                <td>{list.name}</td>
                <td>{list.date}</td>
                <td>{list.vaccine}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </>
          );
        })}
    </table>
  );
};
export default VaccineList;
