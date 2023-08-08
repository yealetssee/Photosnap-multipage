import styled from "styled-components";
import Routes from "./Routes";

function App() {
  return (
    <Main>
      <Routes />
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
