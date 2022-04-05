import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Container, CardContainer, InfosContainer, PlanTitle } from "./styles";

export interface PlansData {
  name?: string;
  price?: number;
  description?: string;
}

interface PlansProps {
  data: PlansData[];
}

const Plans: React.FC<PlansProps> = ({ data }: PlansProps) => {
  return (
    <Container>
      {data.map((plan) => {
        return (
          <CardContainer>
            <InfosContainer>
              <li>
                <BsCurrencyDollar />
              </li>
              <PlanTitle>
                <li>{plan.name}</li>
              </PlanTitle>
              <li>R$ {plan.price}</li>
              <li>{plan.description}</li>
            </InfosContainer>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Plans;
