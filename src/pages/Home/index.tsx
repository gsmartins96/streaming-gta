import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Plans, { PlansData } from "../../components/CardPlan";
import { Banner, Title, Subtitle } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const plans: PlansData[] = [
    {
      name: "Mensal",
      price: 10,
      description:
        "Assista a todos filmes e séries por apenas R$ 10,00 por mês",
    },
    {
      name: "Trimestral",
      price: 25,
      description: "Assista a todos filmes e séries por apenas R$ 25,00",
    },
    {
      name: "Semestral",
      price: 65,
      description: "Assista a todos filmes e séries por apenas R$ 65,00",
    },
    {
      name: "Anual",
      price: 125,
      description: "Assista a todos filmes e séries por apenas R$ 125,00",
    },
  ];

  const goToPage = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div>
      <Banner />

      <Title>GloboStreaming</Title>

      <Subtitle>Pacotes:</Subtitle>
      <Plans data={plans} />
    </div>
  );
};

export default Home;
