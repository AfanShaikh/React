import { Routes, Route } from "react-router-dom";
import { MusicRecord } from "./MusicRecord";
import { Login } from "./Login";
import { EditsMusicRecord } from "./EditsMusicRecord";
import { ReqAuth } from "../Components/ReqAuth";
import { SingleMusicRecords } from "./SingleMusicRecords";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="/music/:id" element={<SingleMusicRecords />} />

      <Route
        path="/music/:id/edit_music"
        element={
          <ReqAuth>
            <EditsMusicRecord />
          </ReqAuth>
        }
      />

      <Route path="*" element={<h1>Page not found...</h1>} />
    </Routes>
  );
};