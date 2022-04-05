import styled from "styled-components";

const MenuList = styled.ul`
  margin: 0;
  border-bottom: 1px solid rgba(230, 230, 230, 0.1);
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const MenuListItem = styled.li`
  display: flex;
  padding: 20px;

  & a {
    text-decoration: none;
    font-size: 1.2rem;
  }

  & a:visited {
    color: #fff;
  }
`;

export { MenuList, MenuListItem };
