import styled from "styled-components";

const Backdrop: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Backdrop;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 7.3rem);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 7.3rem;
  z-index: 1;
`;
