import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMusicRecords } from '../Redux/actionTypes';
import { useSearchParams } from 'react-router-dom';

export const MusicAlbum = () => {
  const dispatch = useDispatch();
  const musicData = useSelector((store) => store.musicRecords);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.getAll('genre');

    const queryParams = {
      params: { genre: genre },
    };

    dispatch(getMusicRecords(queryParams));
  }, [searchParams]);

  return (
    <>
      {musicData.length > 0 &&
        musicData.map((album) => {
          return (
            <div key={album.id}>
              <h3>{album.id}</h3>
              <h4>{album.name}</h4>
              <h3>{album.genre}</h3>
              <img src={album.img} alt={album.name} />
            </div>
          );
        })}
    </>
  );
};