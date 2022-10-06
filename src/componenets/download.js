import React from 'react';
import { Link } from 'react-router-dom';

import SoonImg from '../img/soon.jpg';
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

    document.addEventListener('scroll', function(){
        var st = document.getElementsByClassName('SideTitle')[0]

        if(window.scrollY > 700 && document.body.clientWidth >= 768){
            st.classList.add('fixed');
        } else {
            st.classList.remove('fixed');
        }
    })

    return(
        <div className="DSBox">
            <div className="SideTitle">
                ARCHIVE
            </div>
            <div>
                <div className='DSBTitle'>
                    게임
                </div>
                <DetailContent DtImg={HHBD} DtTitle="해피! 혀누의 생일" DtDesc={"2022년 6월 13일 출시 예정\n혀누의 생일을 기념해 만든 게임, 각종 미니게임들이 수록되어있다."}/>
            </div>
            <hr className="DetailHr"/>
            <div>
                <div className='DSBTitle'>
                    폰트
                </div>
                <DetailContent DtImg={SoonImg} DtTitle="안반듯체" DtDesc={"개발 일시 중단\n반듯하면서 반듯하지 않은 안반듯체."}/>
            </div>
            <hr className="DetailHr"/>
            <div>
                <div className='DSBTitle'>
                    런치패드 프로젝트
                </div>
                <DetailContent DtImg={SoonImg} DtTitle="OMFG - Everybody" DtDesc={"2017년 7월 16일 업로드 | 난이도 : ★★☆☆☆\n초보자용 프로젝트."}/>
                <DetailContent DtImg={SoonImg} DtTitle="TheFatRat - Monody 1인용 리메이크" DtDesc={"2017년 12월 3일 업로드 | 난이도 : ★★★☆☆\nNev의 2인 프로젝트 'Monody'를 1인 프로젝트로 각색한 버전."}/>
                <DetailContent DtImg={SoonImg} DtTitle="OMFG - Ice Cream 리메이크" DtDesc={"2017년 12월 23일 업로드 | 난이도 : ★★★☆☆\n공대생 변승주의 오리지널 런치패드 프로젝트를 리메이크한 프로젝트."}/>
                <DetailContent DtImg={SoonImg} DtTitle="워너원 - Beautiful" DtDesc={"2017년 12월 24일 업로드 | 난이도 : ★★☆☆☆\n2017년 크리스마스 기념 프로젝트"}/>
                <DetailContent DtImg={SoonImg} DtTitle="우원재 - 시차 리메이크" DtDesc={"2018년 1월 7일 업로드 | 배포하지 않음\nLINE SWITCH 콜라보 프로젝트"}/>
                <DetailContent DtImg={SoonImg} DtTitle="DEAMN - Rendezvous" DtDesc={"2018년 1월 30일 업로드 | 난이도 : ★★★☆☆\n"}/>
                <DetailContent DtImg={SoonImg} DtTitle="아이유 - 분홍신" DtDesc={"2018년 12월 26일 업로드 | 난이도 : ★★★☆☆\n2018년 크리스마스 기념 프로젝트"}/>
            </div>
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