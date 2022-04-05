import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import {
  Container,
  CardContainer,
  ImgContainer,
  InfosContainer,
} from "./styles";

export interface MediaData {
  name: string;
  imageUrl: string;
}

interface MediaProps {
  data: MediaData[];
}

const MediaList: React.FC<MediaProps> = ({ data }: MediaProps) => {
  return (
    <Container>
      {data.map((media) => {
        return (
          <CardContainer>
            <ImgContainer src={media.imageUrl} />
            <InfosContainer>
              <li>
                <BsPlayCircle />
              </li>
              <li>{media.name}</li>
            </InfosContainer>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default MediaList;
