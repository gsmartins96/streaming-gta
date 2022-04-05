import styled, { keyframes } from "styled-components";

const dash = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transform: scale(1);
}

100% {
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  transform: scale(1.1);
}
`;

export const MenuList = styled.ul`
  margin: 0;
  border-bottom: 1px solid rgba(230, 230, 230, 0.1);
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const MenuListItem = styled.li`
  display: flex;
  padding: 20px;

  & a {
    text-decoration: none;
    font-size: 1.2rem;
  }

  & a:hover {
    border-bottom: 2px solid #a13333;
    animation: ${dash} 1s ease 0s 1 normal forwards;
    width: 20%;
  }

  & a:visited {
    color: #fff;
  }
`;
