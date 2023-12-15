import CateCard from "../components/share/cate-card";
import Category from "../types/category";
import useFetch from "../utils/useFetch"

const CategoryPage = () => { 

    const { data: dataCate } = useFetch<Category>('/cate')
    const listCate = dataCate.data;

    return <div className="cate-page">
        <div className="title">Khám phá các thể loại nhạc</div>
        <div className="list">
            {listCate && listCate.map(x => <div key={x.ID} className="card-item">
                <CateCard {...x} />
            </div>)}
        </div>
    </div>
}

export default CategoryPage