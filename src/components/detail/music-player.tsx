import { useState, useRef, useEffect } from 'react'
import Song from '../../types/song';
import { toDMY } from '../../utils/time';
import axios from 'axios';


const MusicPlayer = ({ TenBH, MusicAPIPath, AnhBia, HoTen, LuotTai, LuotNghe, NgayPH, TenNgonNgu, TenTheLoai, LoiNhac }: Song) => { 
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [timeHover, setTimeHover] = useState(0)
    const [loop, setLoop] = useState(false);
    const [lyrics, setLyrics] = useState('')

    const player = useRef<HTMLAudioElement>(new Audio());
    
    useEffect(() => {
        const fetch = async () => { 
            const resp = await axios.get('http://localhost:5000/api/file/get/' + LoiNhac);
            const data = resp.data;
            setLyrics(data);
        }

        fetch();
    }, [LoiNhac])
    
    useEffect(() => { 
        player.current = new Audio('http://localhost:5000/api/file/get/' + MusicAPIPath);

        return () => { 
            player.current?.pause();
            player.current = new Audio();
        }
    }, [MusicAPIPath])

    useEffect(() => { 
        const timeInterval = setInterval(() => {
            if (player.current.ended) { 
                console.log('end', player.current.currentTime, loop, playing)
                player.current.currentTime = 0;
                if (!loop) { 
                    setPlaying(false);
                    player.current.pause();
                } else {
                    setPlaying(true);
                    player.current.play();
                }
            }

            setCurrentTime(player.current.currentTime)
        }, 100)

        return () => { 
            clearInterval(timeInterval);
        }
    }, [loop, playing])

    const onPlay = () => {
        if (!player.current) return;

        if (playing) {
            player.current.pause();
        } else { 
            player.current.play();
        }

        setPlaying(x => !x);
    }

    const getTime = (x?: number): string => { 
        if (!x) return '00:00';

        x = Math.floor(x);
        var m = Math.floor(x / 60);
        var s = x % 60;

        return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    }

    const getBarStyle = (curr: number, max: number) => {
        return {
            width: curr / max * 100 + '%'
        }
    }

    const onMouseMove = (e: any) => { 
        //if (e.target !== e.currentTarget) return;

        var rect = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        setTimeHover(x / e.currentTarget.offsetWidth)
        console.log(x / e.currentTarget.offsetWidth)
    }

    const onSetTime = () => { 
        var time = timeHover * player.current.duration;
        player.current.currentTime = Math.floor(time);
        if (!playing) onPlay();
    }

    return <div className="music-player">
        <div className="top">
            <div className="left">
                <div className="img">
                    <img src={`http://localhost:5000/api/file/get/${AnhBia}`} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="content">
                    <div className="name">
                        {TenBH}
                    </div>
                    <div className="artist">
                        <i>{HoTen}</i>
                    </div>
                    <hr style={{ margin: '10px 0' }} />
                    <div>
                        <div className="text-box">{TenTheLoai}</div>
                        <div className="text-box">{TenNgonNgu}</div>
                        <div className="text-box"><i className="fa-solid fa-download"></i> {LuotTai}</div>
                        <div className="text-box"><i className="fa-solid fa-headset"></i> {LuotNghe}</div>
                        <div className="text-box">Ngày: {toDMY(NgayPH)}</div>  
                    </div>
                    <hr style={{ marginBottom: '10px' }} />
                    <p>Lời bài hát:</p>
                    <div className='lyrics'>{lyrics}</div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="play-btn" onClick={onPlay}>
                    {playing ?
                        <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>
                    }
                </div>
                <div>{getTime(currentTime)} / {getTime(player.current.duration)}</div>
            </div>
            <div className="middle">
                <div className="time-bar-container">
                    <div className='time-bar' onMouseMove={onMouseMove} onClick={onSetTime}>
                        <div className="bar" style={getBarStyle(currentTime, player.current.duration)}></div>
                        <div id="time-stamp" style={{ left: timeHover * 100 + '%' }}>
                            {getTime(timeHover * player.current.duration)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className={`loop-btn pointer ${loop ? 'active' : ''}`} onClick={() => setLoop(x => !x)}>
                    <i className="fa-solid fa-rotate-left"></i> Tự động phát lại
                </div>
            </div>
        </div>
    </div>
}

export default MusicPlayer