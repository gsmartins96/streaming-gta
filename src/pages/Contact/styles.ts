import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;

`;

const ContactList = styled.ul`
  list-style: none;

  & img{
    width: 20px;
    height: 20px;
  }

  & button{
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 5px;
  }

  & a{
    text-decoration: none;
  }
`;

export { ContactContainer, ContactList };
