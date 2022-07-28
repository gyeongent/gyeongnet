import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { newsinfo } from '../data/news.json';

import Soon from '../img/soon.jpg';
import LSimg from '../img/LifeSaves_1.jpeg';

import './css/home.css';

const Container = () => (
    <Parallax
        blur={{ min: -13, max: 15}}
        bgImage={require('../img/contradict_background.png')}
        bgImageAlt="Main Title image"
        strength={-200}
    >
        <div className="maintitle">
            GYEONG Studio에 오신 것을 환영합니다.
        </div>
        <div className="MainSection"/>
    </Parallax>
);

function HomeScreen() {
    return(
        <div className="uppertitle">
            <Container />
        </div>
    );
}

function NewsTapContents(props) {
    return (
        <div className='NewsTapContents'>
            <p>
                { props.NTCname }
            </p>
            <div className='NewsMore'>
                <Link to="/news">
                    More
                </Link>
            </div>
        </div>
    );
}

function Newslist(props) {
    return (
        <>
            <Link to={'/news/' + props.link }>
                <div className="NewsContents_Box">
                    <div className='NewsContents'>
                        { props.hntitle }
                        <div className='NewsContentsInfo'>
                            <p className="NewsDate">{ props.hndate }</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

function NewsTap(props) {

    return (
        <div className='NewsTap'>
            <NewsTapContents NTCname={ props.tapName }/>
            <hr />
                <Newslist
                    link= { props.linkto }
                    hntitle= { props.newsTitle }
                    hndate= { props.newsDate }
                />
                <Newslist
                    link= { props.linkto2 }
                    hntitle= { props.newsTitle2 }
                    hndate= { props.newsDate2 }
                />
                <Newslist
                    link= { props.linkto3 }
                    hntitle= { props.newsTitle3 }
                    hndate= { props.newsDate3 }
                />
        </div>
    );
}

function AllNews() {

    let [setTitle] = useState([
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
    ])

    return(
        <div className="HomeTop">
            <NewsTap
                tapName="뉴스"
                linkto={ newsinfo[0].date }
                newsTitle={ newsinfo[0].title }
                newsDate={ newsinfo[0].ogdate }
                linkto2={ newsinfo[1].date }
                newsTitle2={ newsinfo[1].title }
                newsDate2={ newsinfo[1].ogdate }
                linkto3={ newsinfo[2].date }
                newsTitle3={ newsinfo[2].title }
                newsDate3={ newsinfo[2].ogdate }
            />
            <NewsTap
                tapName="일정"
                newsTitle={ setTitle[0] }
                newsDate="-"
                newsTitle2={ setTitle[1] }
                newsDate2="-"
                newsTitle3={ setTitle[2] }
                newsDate3="-"
            />
            <NewsTap
                tapName="준비중"
                newsTitle={ setTitle[3] }
                newsDate="-"
                newsTitle2={ setTitle[4] }
                newsDate2="-"
                newsTitle3={ setTitle[5] }
                newsDate3="-"
            />
        </div>
    );
}

function HomeContents(props) {

    function showModal(){
        var modal = document.getElementsByClassName('roundbox')[0];
        var modalbox = document.getElementsByClassName('roundmodal')[0];
        
        modal.addEventListener("click", () => {
            modalbox.style.display = 'block';
            modalbox.style.opacity = '100%';
        });
    }

    function closeModal(){
        var close = document.getElementsByClassName('closeBtn')[0]; 
        var modalbox = document.getElementsByClassName('roundmodal')[0];
        
        close.addEventListener("click", () => {
            modalbox.style.display = 'none';
        });
    }
    
    return(
        <>
            <div className='roundbox' onClick={ showModal }>
                <div className='roundimg'>
                    <img src={ props.contentimg } alt='Project_img'/>
                </div>
                <div className='roundtitle'>
                    { props.contenttitle }
                </div>
                <div className='rounddesc'>
                    { props.contentdesc }
                </div>
            </div>
            <div className="roundmodal">
                <div className='roundmodalindex'>
                    <div className='modalImg'>
                        <img src={ props.contentimg } alt='Project_img'/>
                    </div>
                    <div className='closeBtn' onClick={ closeModal }>닫기</div>
                </div>
            </div>
        </>
    );
}

function Contents() {
    return (
        <div className="homecontents">
            <div className="homecontentstitle">
                대표 프로젝트
            </div>
            <div className="flexcontent">
                <HomeContents
                    contentimg={LSimg}
                    contenttitle="라이프 세이브스"
                    contentdesc="라이프 세이브스 《Chapter 1》"
                />
                <HomeContents
                    contentimg={Soon}
                    contenttitle="라이프 세이브스"
                    contentdesc="라이프 세이브스 《Chapter 2》"
                />
            </div>
        </div>
    );
}


function Home() {
    return (
      <div className="homeBody">
        <HomeScreen />
        <AllNews />
        <Contents />
      </div>
    );
}

export default Home;