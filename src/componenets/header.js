import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../logo.svg';

// import Announcement from './announcement';

import './css/header.css';
import './css/announcement.css';

function Burgur() {

    function addOpen() {
        var hamburgur = document.getElementById('nav-icon4');

        hamburgur.addEventListener("click", () => {
                hamburgur.classList.toggle('open');
                console.log('opned!')
        });
    }
    
    return(
        <div>
            <label for="toggle">
                <div id="nav-icon4" onClickCapture={ addOpen } className="">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <input type="checkbox" id="toggle"/>
            <div id="mobile-menu">
                <div>
                    <ul>
                        <li>
                            <Link to="/portfolio" >
                            포트폴리오
                            </Link>
                        </li>
                    <hr />
                        <li>
                            <Link to="/discography">
                            디스코그래피
                            </Link>
                        </li>
                    <hr />
                        <li>
                            <Link to="/download">
                            다운로드
                            </Link>
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
            </div>
        </>
    );
}

export default Header;