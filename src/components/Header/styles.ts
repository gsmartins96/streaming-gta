import styled from "styled-components";

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 60px;
  padding: 20px;
  margin: 0;
  border-bottom: 1px solid rgba(230, 230, 230, 0.1);

  & a {
    text-decoration: none;
    font-size: 1.5rem;
  }

  & li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0;
  }

  //   & li:hover::after {
  //     // content: '\2015'
  //     width: 5%;
  //     animation: myAnim 3s ease 0s 1 normal forwards;
  //   }

  @keyframes myAnim {
    0%,
    100% {
      transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }

    20%,
    40%,
    60% {
      transform: translateX(10px);
    }

    80% {
      transform: translateX(8px);
    }

    90% {
      transform: translateX(-8px);
    }
  }

  & a:visited {
    color: #fff;
  }
`;

export { MenuList };
