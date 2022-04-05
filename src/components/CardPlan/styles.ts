import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding: 20px;

  & :hover {
    box-shadow: 5px 4px 20px 0px rgba(255, 255, 255, 0.1);
  }
`;

export const CardContainer = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  cursor: pointer;
  color: #000;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  text-align: center;

  & li:first-child {
    font-size: 3rem;
  }

  & li:nth-child(3) {
    font-weight: bold;
  }
`;

export const PlanTitle = styled.h1`
  color: #a13333;
`;
