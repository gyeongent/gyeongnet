import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import menuLogo from '../menu.svg';

// import Announcement from './announcement';

import './css/header.css';
import './css/announcement.css';

function Burger() {

    function addOpen() {
        var hamburgur = document.getElementById('menuLogo');

        hamburgur.addEventListener("click", () => {
                hamburgur.classList.toggle('open');
                console.log('opned!')
        });
    }

    function PageReload(){
        let currentPath = ""
        let location = useLocation();

        useEffect(() => {
        if(currentPath === location.pathname) window.location.reload();

        currentPath = location.pathname;
        }, [location])
    }
    
    return(
        <div>
            <label for="toggle">
                <div id="menuLogo" onClickCapture={ addOpen } className="">
                    <img src={menuLogo} alt='Burger Menu' width='30vw'/>
                </div>
            </label>
            <input type="checkbox" id="toggle"/>
            <div id="mobile-menu">
                <div className="mmMain">
                    <ul>
                        <li>
                            <NavLink to="/portfolio" onClick={PageReload}>
                                포트폴리오
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/discography" onClick={PageReload}>
                                디스코그래피
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/download" onClick={PageReload}>
                                다운로드
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" onClick={PageReload}>
                                지원
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Header() {
    return (
        <>
            {/* <Announcement /> */}
            <div className="header">
                <div className="backdrop"/>
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
                        <li>
                            <div>
                                <NavLink to="/support">
                                    지원
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                    <div className="burgerMenu">
                        <Burger />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;