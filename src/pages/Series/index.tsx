import React from 'react';
import MediaList, { MediaData } from '../../components/Media';

const Series: React.FC = () => {
  const series: MediaData[] = [
    {
      name: "The Walking Dead",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/twd_kv_bpo_4x5_e469db7e.png",
    },
    {
      name: "Game of Thrones",
      imageUrl: "https://m.media-amazon.com/images/I/91DjGXn7jXL._AC_SL1500_.jpg"
    }
]

  return (
    <div>
      <h1>Series</h1>

      <MediaList data={series} />
    </div>
  );
}

export default Series;