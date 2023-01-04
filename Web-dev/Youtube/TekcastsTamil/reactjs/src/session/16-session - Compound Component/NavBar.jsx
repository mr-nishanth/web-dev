import styled from "styled-components";
import React from "react";
const Container = styled.div`
  display: flex;
  background-color: teal;
`;

const StyledButton = styled.button`
  background-color: lightseagreen;
  border: none;
  padding: 0.5rem 1rem;
  width: 3rem;
  color: ${(props) => props.color};
`;
const NavBar = () => {
  return (
    <div>
      <Menu>
        <Tab value="Daily"></Tab>
        <Tab value="Weekly"></Tab>
        <Tab value="Monthly"></Tab>
      </Menu>
    </div>
  );
};

const Menu = ({ children }) => {
  let color = "white";
  return (
    <Container>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { color }, null);
      })}
    </Container>
  );
};

const Tab = (props) => {
  return <StyledButton color={props.color}>{props.value}</StyledButton>;
};
export default NavBar;
