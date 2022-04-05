import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Title, Text } from "./styles";

interface Package {
  name: string;
  price: number;
}

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [packages, setPackage] = useState<Package[]>([
    {
      name: "Package 1",
      price: 10,
    },
    {
      name: "Package 2",
      price: 20,
    },
    {
      name: "Package 3",
      price: 30,
    },
  ]);

  const goToPage = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div>
      <Title>GloboStreaming</Title>

      <h2>Pacotes:</h2>
      <ul>
        {packages.map((pack) => {
          return (
            <>
              <Text>Nome: {pack.name}</Text>
              <Text>R$ {pack.price}</Text>
            </>
          );
        })}
      </ul>

      <button onClick={() => goToPage("/movies")}>Ver filmes</button>
      <button onClick={() => goToPage("/series")}>Ver séries</button>
      <button onClick={() => goToPage("/contact")}>Contatos</button>
    </div>
  );
};

export default Home;
