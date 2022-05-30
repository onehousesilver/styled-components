import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Parents>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Parents>
  );
}

export default App;
