// libraries
import React, { useState } from 'react'
// Icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
// CSS
import '../css/Navbar.css';
// Aditional Components
import { SidebarData } from './SidebarData'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="fixed-top">
            <div className="navbar-own">
                <Link to="#">
                    <MenuIcon onClick={showSidebar} className="white-text"/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu-own active' : 'nav-menu-own'}>
                <ul className="nav-menu-items-own">
                    <li className="navbar-toggle-own">
                        <Link to="#" className="menu-bars-own">
                            <CloseIcon className="white-text" onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={showSidebar}>
                                    {item.icon} <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default Navbar