import styled from "styled-components";

const Card = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  width: 400px;
`;

// Inheritance in Styled Component
const BlankCard = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;
  width: 400px;
`;
const ColorCard = styled(BlankCard)`
  background-color: ${({ counterVal }) => (counterVal > 25 ? "red" : "yellow")};
`;

const Props = ({ counter }) => {
  // Dynamically assigned card properties
  const DynamicCard = counter > 0 ? ColorCard : BlankCard;
  return (
    <>
      <h1>This is Props</h1>
      <h2>Styled Components</h2>
      <Card counterVal={counter}>
        <h4>{counter}</h4>
      </Card>
      <h2>Inheritance in Styled Components</h2>
      <ColorCard counterVal={counter}>
        <h4>{counter}</h4>
      </ColorCard>{" "}
      <br />
      <h2>Dynamic Components</h2>
      <DynamicCard counterVal={counter}>
        <h4>{counter}</h4>
      </DynamicCard>
    </>
  );
};
export default Props;
