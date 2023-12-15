import Artist from "../../types/artist";
import { toDMY } from "../../utils/time";

const ArtistInfo = (artist: Artist) => { 
    return <div className="artist-info">
        <div className="content">
            <div className="left">
                <div className="img">
                    <img src={'http://localhost:5000/api/file/get/'+artist.AnhDaiDien} alt="" />
                </div>
            </div>
            <div className="middle">
                <div className="name">
                    {artist.HoTen}
                </div>
                <div>
                    <div className="text-box">Giới tính: { artist.GioiTinh ? 'Nam': 'Nữ' }</div>
                    <div className="text-box">Ngày sinh: {toDMY(artist.NgaySinh)}</div>
                </div>
            </div>
            <div className="right">
                <div className="desc">
                    <h3>Tiểu sử:</h3>
                    {artist.TieuSu}
                </div>
            </div>
        </div>
    </div>
}

export default ArtistInfo