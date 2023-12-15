import ArtistCard from "../components/home/artist-card";
import CateCard from "../components/home/cate-card";
import Section from "../components/home/section"
import SongCard from "../components/home/song-card";
import Artist from "../types/artist";
import Category from "../types/category";
import Song from "../types/song";
import useFetch from "../utils/useFetch";

const HomePage = () => { 

    const { data: dataRecentSong  } = useFetch<Song>('/song/u/findSong?limit=10&order=date');
    const recentSong = dataRecentSong.data

    const { data: dataTrendSong } = useFetch<Song>('/song/u/findSong?limit=10&order=view');
    const trendSong = dataTrendSong.data

    const { data: dataCates } = useFetch<Category>('/cate/');
    const cates = dataCates.data

    const { data: dataArtists } = useFetch<Artist>('/artist/');
    const artists = dataArtists.data

    return <div className="home-page">
        <div className="banner">
            <div className="screen"></div>
            <div className="text">
                <h1>ENJOY YOUR MUSIC</h1>
                <br />
                <h3>
                    <span className="app-logo">Maisic</span> là một dịch vụ cung cấp nhạc, podcast và video kỹ thuật số cho
                    phép bạn truy cập hàng triệu bài hát và các nội dung khác của các nghệ sĩ trên khắp thế giới.
                </h3>
            </div>
        </div>

        {recentSong && <Section title="Bài hát gần đây" items={recentSong} link="#" Item={SongCard} />}
        {trendSong && <Section title="Bài hát phổ biến" items={trendSong} link="#" Item={SongCard} />}
        {artists && <Section title="Theo dõi nghệ sĩ" items={artists} link="#" Item={ArtistCard} />}
        {cates && <Section title="Khám phá các thể loại" items={cates} link="#" Item={CateCard} />}
    </div>
}

export default HomePage