import React from 'react';
import MediaList, { MediaData } from '../../components/Media';

const Movies: React.FC = () => {

  const movies: MediaData[] = [
    {
      name: "Duro de matar 2",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/2/2d/Die_hard_2_poster_promocional.png",
    },
    {
      name: "Velozes e furiosos desafio e Tóquio",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCkld9yX-M63IC7D_8cyg36oxBF_vUHY5JdnldrhG-Aa7WASX-rNsO9RP3Ph-Z31ZWoU&usqp=CAU",
    },
  ]

  return (
    <>
      <div>
        <h1>Filmes</h1>
      </div>
      
      <MediaList  data={movies}/>
    </>
  )
}

export default Movies;