import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";

import { MdDarkMode } from "react-icons/md";
import { BiSupport, BiNews, BiDownload } from "react-icons/bi";
import { FaCompactDisc } from "react-icons/fa";
import Announcement from "./announcement";

import "./css/header.css";
import "./css/announcement.css";

function MobileArticle(props) {
  return (
    <Link to={props.link}>
      <div>
        <div className="mobileIcon">{props.icon}</div>
        <div className="mobileTitle">{props.name}</div>
      </div>
    </Link>
  );
}

function Header() {
  const themeMode = () => {
    const webApp = document.querySelector("body");

    webApp.classList.toggle("dark");
  };

  return (
    <>
      {/* <Announcement /> */}
      <div className="header">
        <div className="backdrop" />
        <div className="HeaderArticle_1">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <div>
                <NavLink to="/download">다운로드</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/portfolio">포트폴리오</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/discography">디스코그래피</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/news">뉴스</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/support">지원</NavLink>
              </div>
            </li>
            <li>
              <div className="desktopMode" onClick={themeMode}>
                <MdDarkMode />
              </div>
            </li>
          </ul>
        </div>
        <div className="mobileMenu">
          <MobileArticle
            icon={<BiNews />}
            name="포트폴리오"
            link="/portfolio"
          />
          <MobileArticle
            icon={<FaCompactDisc />}
            name="디스코그래피"
            link="/discography"
          />
          <MobileArticle icon={<BiNews />} name="뉴스" link="/news" />
          <MobileArticle icon={<BiSupport />} name="지원" link="/support" />
          <MobileArticle
            icon={<BiDownload />}
            name="다운로드"
            link="/download"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
