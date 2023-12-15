import { useParams } from "react-router"
import useFetch from "../utils/useFetch"
import Song from "../types/song";
import MusicPlayer from "../components/detail/music-player";

const DetailPage = () => {
    const { id } = useParams()

    const { data: songData } = useFetch<Song>('/song/' + id);
    const song = songData.data[0]

    return <div className="detail-page">
        <div className="main">
            {song?.MusicAPIPath && <MusicPlayer {...song} />}
        </div>        

        <div className="info">
            <div className="left"></div>
            <div className="right"></div>
        </div>
        <div className="lyric"></div>

        <div className="suggest"></div>
    </div>
}

export default DetailPage