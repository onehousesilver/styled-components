import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Child = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
`;
function App() {
  return (
    <Parents>
      <Child bgColor="teal" />
      <Child bgColor="tomato" />
    </Parents>
  );
}

export default App;
