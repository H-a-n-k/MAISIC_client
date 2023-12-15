import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {

    const [openSideBar, setOpenSideBar] = useState(false);

    return <div className={`side-menu`}>
        <div className="icon items">
            <div onClick={() => setOpenSideBar(true)} className="item">
                {!openSideBar &&
                    <i className="fa-solid fa-angles-right delay"></i>
                }
            </div>

            <Link to={'/'} title="Khám phá">
                <div className="item">
                    <i className="fa-solid fa-icons"></i>
                </div>
            </Link>

            <Link to={'/search'} title="Tìm kiếm">
                <div className="item">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </Link>

            <Link to={'/category'} title="Thể loại">
                <div className="item">
                    <i className="fa-solid fa-list"></i>
                </div>
            </Link>

            <Link to={'/artist'} title="Nghệ sĩ">
                <div className="item">
                    <i className="fa-regular fa-face-grin-stars"></i>
                </div>
            </Link>

        </div>
        <div className={`menu items ${openSideBar ? 'open': ''}`}>
            {openSideBar &&
                <div className="screen delay" onClick={()=>setOpenSideBar(false)}></div>
            }
            <div className="item" onClick={() => setOpenSideBar(false)}>
                <div className="row" style={{width: '100%', paddingRight: '10px'}}>
                    <span className="flex-fill">Menu</span>
                    {openSideBar && <i className="fa-solid fa-angles-left"></i>}
                </div>
            </div>
            <Link to={'/'}>
                <div className="item"> Khám phá</div>
            </Link>
            <Link to={'/search'}>
                <div className="item"> Tìm kiếm</div>
            </Link>
            <Link to={'/category'}>
                <div className="item"> Thể loại</div>
            </Link>
            <Link to={'/artist'} title="Nghệ sĩ">
                <div className="item"> Nghệ sĩ</div>
            </Link>
        </div>
    </div>
}