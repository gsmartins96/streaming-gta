import React from "react";

export interface MediaData {
  name: string;
  imageUrl: string;
}

interface MediaProps {
  data: MediaData[]
}

const MediaList: React.FC<MediaProps> = ({data}: MediaProps) => {
  return (
    <ul>
      {data.map((media) => {
        return (
          <>
            <li>{media.name}</li>
            <img src={media.imageUrl} alt="Imagem do cartaz do filme" />
          </>
        );
      })}
    </ul>
  );
};

export default MediaList;
