import { Link } from "react-router-dom"
import Artist from "../../types/artist"


const ArtistCard = ({ HoTen, AnhDaiDien }: Artist) => { 
    return <Link to='#' className="artist">
        <div className="box">
            <div className="img" style={{ backgroundImage: `url(http://localhost:5000/api/file/get/${AnhDaiDien})` }}></div>
            <div className="name">{HoTen}</div>
        </div>
    </Link>
}

export default ArtistCard