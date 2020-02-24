import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import headerStyles from "../styles/header.module.css"; // Cách sử dụng css trong react để không đụng chạm vs các file khác NOTE 
// Nhớ tên file css để sử dụng như dạng biến là aaa.module.css

import navStyles from '../styles/nav.module.css';

const Header = () => {
    return (
        <Navbar className={headerStyles.header}>
            <NavbarBrand className={navStyles.header}>Elearning</NavbarBrand>
            <Nav>
            <NavItem>
                    <NavLink>
                        <Link to="/admin/create-course">Thêm Khóa Học</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/courses-list">Danh Sách Khóa Học</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/game-bau-cua">Game Bầu Cua</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/demo-hooks">Demo Hooks</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
};

export default Header;