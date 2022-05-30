import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
`;

const Circle = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

function App() {
  return (
    <Parents>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Parents>
  );
}

export default App;
