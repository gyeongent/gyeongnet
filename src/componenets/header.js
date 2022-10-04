import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../logo.svg';
import menuLogo from '../menu.svg';
import closeMenu from '../closeMenu.svg';

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
                            <NavLink to="/portfolio" >
                                포트폴리오
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/discography">
                                디스코그래피
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/download">
                                다운로드
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">
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
                </div>
                <div>
                    <Burger />
                </div>
            </div>
        </>
    );
}

export default Header;