import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Parents>
      <Btn> Log in </Btn>
      <Btn as="a" href="/"> Log in </Btn>
    </Parents>
  );
}

export default App;
