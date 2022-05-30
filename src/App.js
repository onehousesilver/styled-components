import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const ChildOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const ChildTwo = styled.div`
  background-color: tomato;
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
      <ChildOne>
        <Text> Hello</Text>
      </ChildOne>
      <ChildTwo />
    </Parents>
  );
}

export default App;
