import {useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import SideMenu from '../components/share/side-menu'
import { useGlobalContext } from '../context/global-context'

const LayoutClient = () => { 
    const { keyword, setKeyword } = useGlobalContext();

    const [search, setSearch] = useState(keyword || '')
    const navigate = useNavigate();

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { 
        if (e.key !== 'Enter') return;
        setKeyword!(search);
        navigate('/search')
    }

    return <div className='layout-client'>

        <div className='top-bar'>
            <Link to='/' className='left'>
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="app-logo">AISIC</div>
            </Link>

            <div className="middle">
                <div className="search">
                    <input placeholder='Tìm kiếm bài hát ' type="text"
                        value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={onKeyDown}/>
                </div>
            </div>

            <div className="right">
                <div className="account">
                    Đăng nhập
                </div>
            </div>
        </div>
        <div className="body">
            <SideMenu />

            <div className='page-content'>
                <Outlet />
            </div>
        </div>
    </div>  
}

export default LayoutClient