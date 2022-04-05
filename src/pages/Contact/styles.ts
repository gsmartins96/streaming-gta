import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Title = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  & img {
    width: 20px;
    height: 20px;
  }

  & button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    column-gap: 5px;
  }

  & a {
    text-decoration: none;
    color: #fff;
  }
`;

export { ContactContainer, ContactList, Title };
