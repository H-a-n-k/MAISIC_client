import Category from "../../types/category"

const CateInfo = (cate: Category) => { 
    return <div className="cate-info">
        <div className="title">{cate.TenTheLoai}</div>
        <p>{cate.MoTa}</p>
    </div>
}

export default CateInfo