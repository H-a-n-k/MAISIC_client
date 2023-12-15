import { useMemo, useState } from "react"
import { Link } from "react-router-dom";
import SongCard from "./song-card";

interface Props { 
    title: string,
    items: any[],
    link?: string,
    Item: (p: any) => JSX.Element
}

const Section = ({ title, items, link, Item }: Props) => { 

    const [index, setIndex] = useState(0);
    const n = 6;
    const width = '90vw';

    const next = (i: number) => { 
        var lim = Math.max(items.length - n, 0)

        i += index
        if (i < 0) i = lim;
        if (i > lim) i = 0;

        setIndex(i)
    }

    const SliderStype = useMemo(() => { 
        return {
            '--item-width': `calc(${width} / ${n})`,
            transform: `translateX(calc(${index} * var(--item-width) * -1))`
        } as React.CSSProperties
    }, [index])

    return <>
        <div className="section">
            <div className="header">
                <div className="title">{title}</div>
                <div className="right">
                    {
                        items.length > n && <div className="icons">
                            <i className="fa-solid fa-circle-chevron-left" onClick={() => next(-1)}></i>
                            <i className="fa-solid fa-circle-chevron-right" onClick={() => next(1)}></i>
                        </div>
                    }
                    {
                        link && <div className='all'>
                            <Link to='#'>Xem tất cả</Link>
                        </div>
                    }
                </div>
            </div>
            <div className="list" style={{width}}>
                <div className="slider" style={SliderStype}>
                    {
                        items && items.map((x, ind) => <div key={ind} className="item" style={{ width: 'var(--item-width)' }}>
                            <Item {...x} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    </>
}

export default Section