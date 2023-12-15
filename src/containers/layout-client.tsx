import { Link, Outlet } from 'react-router-dom'
import SideMenu from '../components/share/side-menu'

const LayoutClient = () => { 
    return <div className='layout-client'>

        <div className='top-bar'>
            <Link to='/' className='left'>
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="app-logo">AISIC</div>
            </Link>

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