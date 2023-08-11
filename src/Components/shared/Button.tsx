import { Arrow } from "@/Svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button: React.FC<{ text: string; Bg: string; to: string }> = ({
  text,
  Bg,
  to,
}) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ButtonWrapper>
        <TextSpan
          style={{
            color: Bg === "black" ? "white" : "black",
          }}
        >
          {text}
        </TextSpan>
        <Arrow Bg={Bg} />
      </ButtonWrapper>
    </Link>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  margin-top: 2.3rem;
  cursor: pointer;
`;

const TextSpan = styled.span`
  font-size: 1.2rem;

  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;
