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

/* <ArticleContainer>

<InfosContainer>
  <ArticleInfos>
    <StarsComments>
      <div className="stars">
        {starsQtd.map((star, index) => (
          <AiFillStar color={color} size={16} key={index} />
        ))}
      </div>
    </StarsComments>
  </ArticleInfos>
  <Description>
    <p>{overview}</p>
  </Description>
  {/* <LinkWrapper>
    <Link to={`/logged-area/webinar/${id}`}>
      <span>{language.COMMON.WATCH_NOW}</span>
    </Link>
  </LinkWrapper> */
// </InfosContainer >
// </ArticleContainer > * /}
//   );
//};

export default MediaList;
