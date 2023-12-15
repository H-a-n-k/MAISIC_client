import { Link } from "react-router-dom"
import Category from "../../types/category"
import random from "../../utils/random"
import { useMemo } from "react"

function getColor() {
    return `rgb(${random(112, 247)}, ${random(124, 244)}, ${random(124, 215)})`;
}

const CateCard = (cate: Category) => { 

    const RandomBoxStyle = useMemo(() => {
        var color1 = getColor();
        var color2 = getColor();
        var deg = random(0, 360) + 'deg';

        return {
            '--color-1': color1,
            '--color-2': color2,
            '--deg': deg
        } as React.CSSProperties
    }, [])

    return <Link to='/search' state={{ title: 'Nhạc ' + cate.TenTheLoai, cate}} className="cate-card">
        <div className="box" style={RandomBoxStyle}>
            <div className="name">{cate.TenTheLoai}</div>
        </div>
    </Link>
}

export default CateCard