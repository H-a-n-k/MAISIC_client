import { Link } from "react-router-dom"
import Song from "../../types/song"

const SongCard = ({ ID, TenBH, HoTen, AnhBia } : Song) => { 

    return <Link to={'/detail/' + ID} className="song-card">
        <div className="content">
            <img src={`http://localhost:5000/api/file/get/${AnhBia}`} alt="" />
            <div className="name">{TenBH}</div>
            <div className="desc">{HoTen}</div>
        </div>
    </Link>
}

export default SongCard