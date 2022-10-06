import React from 'react';
import { Link } from 'react-router-dom';

import GameCtrlIcon from '../img/game_controller.png';
import Launchpad from '../img/launchpad.png';
import Font from '../img/font.png';
import Other from '../img/other.png';
import HHBD from '../img/icon/HHBDicon.png';
// 이미지는 무조건 1:1 사이즈로 올릴것

import './css/download.css';

function Banner(props){
    return(
        <div className="bannerBox">
            <div className={ props.class }>
                <img src={ props.bnImg } alt="Img" />
            </div>
            <div className="bannerText">
                { props.bnTxt }
            </div>
        </div>
    );
}

function BannerSection(){
    return(
        <div className="bannerArea">
            <div className="bannerTitle">
                어떤 종류를 찾고 계신가요?
            </div>
            <ul className="list">
                <li onClick={() => {alert("준비중입니다.")}}>
                    <Banner class="bannerImg lightpink" bnImg={GameCtrlIcon} bnTxt="게임"/>
                </li>
                <li onClick={() => {alert("준비중입니다.")}}>
                    <Banner class="bannerImg skyblue" bnImg={Font} bnTxt="폰트"/>
                </li>
                <li>
                    <Link to="/download/launchpad">
                        <Banner class="bannerImg lightpink" bnImg={Launchpad} bnTxt="런치패드 프로젝트"/>
                    </Link>
                </li>
                <li onClick={() => {alert("준비중입니다.")}}>
                    <Banner class="bannerImg skyblue" bnImg={Other} bnTxt="기타"/>
                </li>
            </ul>
        </div>
    );
}

function DetailContent(props){
    return(
        <div className="DCBox">
            <div className="DetailImg">
                <img src={props.DtImg} alt="iconImg"/>
            </div>
            <div className="DetailContainer">
                <div className="DetailTitle">
                    { props.DtTitle }
                </div>
                <div className="DetailDesc">
                    { props.DtDesc }
                </div>
            </div>
        </div>
    );
}

function DetailSection(){
    return(
        <div className="DSBox">
            <div>
                <div className='DSBTitle'>
                    게임
                </div>
                <DetailContent DtImg={HHBD} DtTitle="해피! 혀누의 생일" DtDesc={"2022년 6월 13일 출시 예정\n혀누의 생일을 기념해 만든 게임, 각종 미니게임들이 수록되어있다."}/>
            </div>
            <hr className="DetailHr"/>
        </div>
    );
}

function DownloadPage(){
    return(
        <div className="downloadPage">
            <BannerSection />
            <DetailSection />
        </div>
    );
}

export default DownloadPage;