import React from "react";
import { Spotify } from "react-spotify-embed";

import "./css/portfolio.css";
import { ImNewTab } from "react-icons/im";

const NewHome = () => {
  return (
    <div className="PHNewHome">
      <div className="NewMainTitle">나의 판타지 세계</div>
    </div>
  );
};

function HomeScreen() {
  return (
    <div className="uppertitle">
      <NewHome />
    </div>
  );
}

function GraphicsArticle() {
  const pictures = [
    "https://portfolio.gyeong.net/static/media/life_saves_card_news.4583cacddfb582d9f130.png",
    "https://portfolio.gyeong.net/static/media/fallguys_polygonart.b5a9d95b1922cf1cf214.png",
    "https://portfolio.gyeong.net/static/media/tretion_1000.7e433a539402dc346713.png",
    "https://portfolio.gyeong.net/static/media/super_mario_maker.2246ef1150ea0a821a05.jpg",
    "https://portfolio.gyeong.net/static/media/part_time_ufo.f465e48a15c352241171.png",
    "https://portfolio.gyeong.net/static/media/whyrano_front.e79787046c202fba475c.jpg",
    "https://portfolio.gyeong.net/static/media/distance_of_scent.6b0f4e3231fd9e257a50.png",
    "https://portfolio.gyeong.net/static/media/honey_moon.9e198d58444a070e38fa.png",
    "https://g-grafolio.pstatic.net/20220529_224/1653783999004D9EWz_PNG/Rollerskates_City.png?type=w896_2",
    "https://g-grafolio.pstatic.net/20220608_290/1654669741124rgEYm_PNG/35A1FEA5-FEC4-44AA-BEB1-2B18E04F1109.png?type=w896_2",
    "https://g-grafolio.pstatic.net/20221231_132/1672491445869tf5vR_PNG/stargazer.png?type=w896_2",
  ];

  const pictureArray = pictures.map((imgs, index) => {
    return (
      <div>
        <img src={imgs} loading="lazy" alt={imgs} key={index} />
      </div>
    );
  });

  return (
    <div className="pfoArticle">
      <div className="pfoFirst">
        <div className="pfoTitle">그래픽</div>
        <div className="pfoDesc">
          <span>: 디자인에 공감을 더하다</span>
          <p>
            어렸을 시절부터 창의적인 만들기를 좋아했었습니다. 그렇게 자라 내가
            상상하던 작품을 만들게 되었고 그 모든 작품 안에는 누구나 쉽게 "공감"
            할수 있는 메세지를 담도록 노력했습니다.
          </p>
        </div>
        <div className="linkto">
          <a
            href="https://career.gyeong.net/"
            target={"_blank"}
            rel="noreferrer"
          >
            <u>
              career.gyeong.net/ <ImNewTab />
            </u>
          </a>
        </div>
      </div>
      <div className="pfoGraphicPictures">
        <div className="gallery">{pictureArray}</div>
      </div>
    </div>
  );
}

function GameArticle() {
  return (
    <div className="pfoArticle">
      <div className="pfoFirst">
        <div className="pfoTitle">게임</div>
        <div className="pfoDesc">
          <span>: 도전기</span>
          <p>
            2D 및 3D 그래픽을 넘어 이것을 활용한 다양한 작품을 만들고자
            했습니다. 게임에 대한 도전이 그것에 대한 첫 번째 도전입니다. 다양한
            바리에이션과 기능들을 넣으려 노력했고, 앞으로 더욱 나은 창의력과 더
            많은 성장할 것 입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function MusicArticle() {
  return (
    <div className="pfoArticle">
      <div className="pfoFirst">
        <div className="pfoTitle">음악</div>
        <div className="pfoDesc">
          <span>: 느끼는 감정들</span>
          <p>
            어렸을 적부터 우울할때나 힘이 들때마다 음악을 들으며 공감하고 위로를
            받아왔습니다. 이때 "공감"했던 경험이 지금의 그래픽 포트폴리오를
            쌓아가는 데에 아주 중요했던 역할 중 하나였습니다. 이제 누군가에게
            위로의 감정을 느끼게 해줄 차례입니다.
          </p>
          <div className="linkto">
            <a
              href="https://linktr.ee/gyeongmusic"
              target={"_blank"}
              rel="noreferrer"
            >
              <u>
                linktr.ee/gyeongmusic/ <ImNewTab />
              </u>
            </a>
          </div>
          <div className="spotifyEmbed">
            <Spotify link="https://open.spotify.com/track/5BeYJK9XcUbFDHyAV4xx9a?si=9bcbb22f7881496c" />
            <Spotify link="https://open.spotify.com/track/3zATKvMnPHRZuUH70jtAWf?si=1034511bf26d4543" />
            <Spotify link="https://open.spotify.com/track/2ZblMEx8BtY4kc7Ddt95TF?si=c04f3e397fe44f6d" />
            <Spotify link="https://open.spotify.com/track/1VBYQPRnWIIP1mpGgwEiqW?si=e387604ffcc14fd4" />
            <Spotify link="https://open.spotify.com/track/2ZRMyrZTNVLPhMpZRj4N2b?si=Q1lATGQ7QCiWh7cLK8n_7A" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PfoList() {
  return (
    <div className="pfo_contents">
      <div>
        <GraphicsArticle />
        <MusicArticle />
        <GameArticle />
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="homeBody">
      <HomeScreen />
      <PfoList />
    </div>
  );
}

export default Portfolio;
