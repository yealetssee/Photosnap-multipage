import styled from "styled-components";
import Routes from "@/Routes";
import { Footer, Header } from "@/Layout";

function App() {
  return (
    <Main>
      <Header />
      <Routes />
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
