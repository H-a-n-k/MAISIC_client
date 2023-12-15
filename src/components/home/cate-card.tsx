import { Link } from "react-router-dom"
import Category from "../../types/category"
import random from "../../utils/random"
import { useCallback, useMemo } from "react"

function getColor() {
    return `rgb(${random(112, 247)}, ${random(124, 244)}, ${random(124, 215)})`;
}

const CateCard = ({ TenTheLoai }: Category) => { 

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

    return <Link to='#' className="cate">
        <div className="box" style={RandomBoxStyle}>
            <div className="name">{TenTheLoai}</div>
        </div>
    </Link>
}

export default CateCard