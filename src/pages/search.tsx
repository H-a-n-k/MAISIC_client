import Song from "../types/song"
import {useState, useMemo, useEffect} from 'react'
import useFetch from "../utils/useFetch"
import SongQueryParams from "../types/song-query-params"
import SongCard from "../components/share/song-card"
import { OrderSong } from "../types/song-order"
import { useLocation } from "react-router"
import { useGlobalContext } from "../context/global-context"
import CateInfo from "../components/category/category-info"
import ArtistInfo from "../components/artist/artist-info"

const SearchPage = () => { 
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState('')

    const {keyword} = useGlobalContext()
    let { state } = useLocation();
    const { title, artist, cate, pOrder, asc } = state ?? {}

    useEffect(() => { 
        setOrder(pOrder)
    }, [pOrder])

    const limit = 24;
    const songQuery = useMemo(() => { 
        const query: SongQueryParams = { keyword, cateID: cate?.ID, order, asc, artistID: artist?.ID }

        return {params: query}
    }, [keyword, order, artist, cate, asc]);
    const { data: songData } = useFetch<Song>('/song/u/findsong', songQuery);
    const songList = songData.data

    return <div className="search-page">
        {cate && <CateInfo {...cate} />}
        {artist && <ArtistInfo {...artist} />}

        {songList.length < 1 && <h2>không có kết quả nào</h2>}
        <div className="header">
            <div className="left">
                <div className="title">
                    {title ?? 'Tìm kiếm bài hát'} {keyword && <span>. Từ khóa : {`"${keyword}"`}</span> }
                </div>
            </div>
            <div className="right">
                <div className="sort">
                    Sắp xếp:
                    <select title="Sắp xếp" onChange={(e) => {setOrder(e.target.value)}}>
                        <option value={OrderSong.Date}>Mới nhất</option>
                        <option value={OrderSong.View}>Phổ biến</option>
                        <option value={OrderSong.Name}>Theo tên</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="song-list">
            {songList && [...songList].splice((page - 1) * limit, limit).map(x => <div key={x.ID} className="card-item">
                <SongCard {...x} />
            </div>)}
        </div>    
        <div className="pager">
            {page > 2 &&
                <div className="btn" onClick={() => { setPage(1) }}>
                    <i className="fa-solid fa-angles-left"></i>
                </div>
            }
            {page > 1 &&
                <div className="btn" onClick={() => { setPage(x => x - 1) }}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
            }
            <div className="page">{page} / {Math.ceil(songList.length / limit)}</div>
            {page < Math.ceil(songList.length / limit) &&
                <div className="btn" onClick={() => setPage(x => x + 1)}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            }
            {page < Math.ceil(songList.length / limit - 1) &&
                <div className="btn" onClick={() => setPage(Math.ceil(songList.length / limit))}>
                    <i className="fa-solid fa-angles-right"></i>
                </div>
            }
        </div>
    </div>
}

export default SearchPage