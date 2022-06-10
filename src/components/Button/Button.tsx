import styled from "styled-components";
import { GlobalMixin } from "../../styles/mixin";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  [key: string]: any;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  ${GlobalMixin.button};
  height: 50px;
  width: 80px;
  font-size: 35px;
  &:active {
    transform: translateY(6px);
    box-shadow: none;
  }
`;
