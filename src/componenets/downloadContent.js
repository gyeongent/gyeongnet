import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./css/downloadContent.css";

import GSBanner from "../images/GS_banner.png";

function DownloadContent() {
  const { category } = useParams();

  return (
    <div className="downloadContent">
      {category === "games" ? (
        <div>
          <h2>게임 다운로드 링크</h2>
          <NavLink to="https://example.com/game-download">다운로드</NavLink>
        </div>
      ) : category === "font" ? (
        <div className="DownloadArticle">
          <div className="DownloadBanner">
            <img src={GSBanner} alt="폰트 미리보기" className="fontPreview" />
          </div>
          <div className="DownloadDesc">
            <h2>폰트 다운로드</h2>
            <a href="/fonts/GYEONGSans-Bold.otf" download>
              <span className="downloadButton">GYEONG Sans Bold.otf</span>
            </a>
            <ul className="changeLog">
              <h3>변경사항</h3>
              <span>⚠️한글 캐릭터는 들어있지 않습니다.</span>
              <li>v0.100 - 기본 알파벳 캐릭터가 적용되었습니다.</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DownloadContent;
