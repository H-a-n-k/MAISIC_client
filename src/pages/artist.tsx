import ArtistCard from "../components/share/artist-card";
import Artist from "../types/artist";
import useFetch from "../utils/useFetch"

const ArtistPage = () => { 
    const { data } = useFetch<Artist>('/artist');
    const list = data.data

    return <div className="artist-page">
        <div className="title">Theo dõi các nghệ sĩ</div>
        <div className="list">
            {list && list.map(x => <div className="card-item" key={x.ID}>
                <ArtistCard {...x} />
            </div>)}
        </div>
    </div>
}

export default ArtistPage