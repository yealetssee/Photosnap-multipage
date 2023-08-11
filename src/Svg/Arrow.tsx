import styled from "styled-components";

const Arrow: React.FC<{ Bg: string }> = ({ Bg }) => {
  return (
    <Svg>
      <g
        fill={Bg === "black" ? "#fff" : "rgba(0, 0, 0, 1)"}
        fillRule="evenodd"
        stroke={Bg === "black" ? "#fff" : "rgba(0, 0, 0, 1)"}
      >
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </Svg>
  );
};

export default Arrow;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 4.3rem;
  height: 1.4rem;
  cursor: pointer;
`;
