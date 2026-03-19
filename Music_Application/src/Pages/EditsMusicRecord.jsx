import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const EditsMusicRecord = () => {
  const { id } = useParams();

  const musicAlbums = useSelector((store) => store.app.musicRecords);

  const [editMusic, setEditMusic] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    let findAlbum = musicAlbums.find((album) => album.id === id);

    if (findAlbum) {
      setEditMusic(findAlbum.name);
    }
  }, [id, musicAlbums]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>edit music name</label>

        <input
          value={editMusic}
          type="text"
          onChange={(e) => setEditMusic(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};