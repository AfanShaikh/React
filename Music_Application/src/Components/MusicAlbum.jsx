import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/App/actionTypes";
import { useSearchParams, Link } from "react-router-dom";

export const MusicAlbum = () => {
  const dispatch = useDispatch();

  const musicData = useSelector((store) => store.app.musicRecords);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.getAll("genre");

    const queryParams = {
      params: {
        genre: genre,
        _sort: searchParams.get("_sort") && "year",
        _order: searchParams.get("_sort"),
      },
    };

    dispatch(getMusicRecords(queryParams));
  }, [searchParams]);

  return (
    <>
      {musicData.length > 0 &&
        musicData.map((album) => {
          return (
            <div
              key={album.id}
              style={{ border: "1px solid black", margin: "5px" }}
            >
              <h3>{album.id}</h3>
              <h4>{album.name}</h4>
              <h3>{album.genre}</h3>
              <h4>{album.year}</h4>

              <img src={album.img} alt={album.name} />

              <Link to={`/music/${album.id}/edit_music`}>
                <button>edit</button>
              </Link>
            </div>
          );
        })}
    </>
  );
};