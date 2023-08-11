import styled from "styled-components";

const Burger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Svg onClick={onClick}>
      <g fillRule="evenodd">
        <path d="M0 0h20v1H0zM0 5h20v1H0z" />
      </g>
    </Svg>
  );
};
export default Burger;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 2rem;
  height: 0.6rem;
  cursor: pointer;
`;
