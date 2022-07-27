import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../logo.svg';

import Announcement from './announcement';

import './css/header.css';
import './css/announcement.css';

function Header() {
    return (
        <>
            <Announcement />
            <div className="header">
                <div className="HeaderArticle_1">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <NavLink to="/portfolio">
                                    포트폴리오
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div>
                                <NavLink to="/discography">
                                    디스코그래피
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div>
                                <NavLink to="/download">
                                    다운로드
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;