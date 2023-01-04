const WithoutContext = () => {
  return (
    <div>
      <h1>Without context </h1>
      <CompA name="Nishanth" />
    </div>
  );
};
export default WithoutContext;

// Props Drilling
const CompA = ({ name }) => <CompB name={name}></CompB>;
const CompB = ({ name }) => <CompC name={name}></CompC>;
const CompC = ({ name }) => {
  return (
    <>
      <p>Comp C</p>
      <h1>Name : {name}</h1>
    </>
  );
};
