import { Link } from "react-router-dom"
import Artist from "../../types/artist"


const ArtistCard = (artist: Artist) => { 
    return <Link to='/search' state={{ artist: artist, title: 'Bài hát của ' + artist.HoTen}} className="artist-card">
        <div className="box">
            <div className="img" style={{ backgroundImage: `url(http://localhost:5000/api/file/get/${artist.AnhDaiDien})` }}></div>
            <div className="name">{artist.HoTen}</div>
        </div>
    </Link>
}

export default ArtistCard