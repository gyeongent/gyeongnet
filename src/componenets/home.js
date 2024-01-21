import React from 'react';
// import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import newsjson from '../data/news.json';
import Youtube from "react-youtube"

import { ImNewTab } from 'react-icons/im'

import './css/home.css';

// const Container = () => (
//     <Parallax
//         blur={{ min: -13, max: 15}}
//         bgImage={require('../img/contradict_background.png')}
//         bgImageAlt="Main Title image"
//         strength={-200}
//     >
//         <div className="maintitle">
//             GYEONG Studio에 오신 것을 환영합니다.
//         </div>
//         <div className="MainSection"/>
//     </Parallax>
// );

const NewHome = () => {
    return(
        <div className="HNewHome">
            <div className="NewMainTitle">
                GYEONG Studio
            </div>
        </div>
    )
}

function HomeScreen() {
    return(
        <div className="uppertitle">
            <NewHome />
        </div>
    );
}

function NewsTapContents(props) {
    return (
        <div className='HNewsTapContents'>
            <p>
                { props.NTCname }
            </p>
        </div>
    );
}

function Newslist(props) {
    return (
        <>
            <Link to={ props.link }>
                <div className="HNContents_Box">
                    <div className='HNewsContents'>
                        { props.hntitle }
                        <div className='HNewsContentsInfo' id={props.dateId}>
                            <p className="HNewsDate">{ props.hndate }</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

function NewsTap(props) {
    return (
        <div className={`HNewsTap ${props.bgcolor}`}>
            <NewsTapContents NTCname={ props.tapName }/>
            <Newslist
                link= { props.linkto }
                hntitle= { props.newsTitle }
                hndate= { props.newsDate }
                dateId = { props.dateId }
            />
            <div className='HNewsMore'>
                <Link to={ props.moreLink }>
                    더보기
                </Link>
            </div>
        </div>
    );
}

function AllNews() {

    const setDate = new Date("2024-12-26T00:00:00+0900");
    const nowDate = new Date();
    const distanceDate = setDate.getTime() - nowDate.getTime();
    const day = Math.floor(distanceDate/(1000*60*60*24) + 1)

    return(
        <div className="HomeTop">
            <NewsTap
                bgcolor="peach"
                tapName="📣 최신 소식"
                linkto={ '/news/' + newsjson.newsinfo[0].date }
                newsTitle={ newsjson.newsinfo[0].title }
                newsDate={ newsjson.newsinfo[0].ogdate }
                moreLink={'/news'}
            />
            <NewsTap
                bgcolor="sea"
                tapName="🗓️ 주요 일정"
                dateId="singleDate"
                newsTitle={'「Cue Sign」 EP 발매'}
                newsDate={`?`}
                linkto={ '/news/' + newsjson.newsinfo[0].date }
                moreLink={'/discography'}
            />
        </div>
    );
}

function Articles(){
    return(
        <div>
            <div className='HomeTop'>
                <a href='https://ggabi.gyeong.net/' target={'_blank'} rel="noreferrer">
                    <div className='ggabiArchive'>
                        <div className='gaTitle'>
                            <img src={'https://ggabi.gyeong.net/logo.png'} alt={"까비 아카이브"}/>
                            <span>까비 아카이브</span>
                        </div>
                        <div className='gaDesc'>
                            2018년부터의 까비 추억여행
                        </div>
                        <div className='AHNewsMore'>
                            <ImNewTab />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

function YoutubeArticle(){
    return(
        <div>
            <div className="HomeTop">
                <Youtube 
                    videoId="E0H4HWLL0u0"
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 0,
                          rel: 0,
                          modestbranding: 1
                        }
                    }}
                    className='youtubeapi'
                />
            </div>
        </div>
    )
}


function Home() {

    return (
      <div className="homeBody">
        <HomeScreen />
        <AllNews />
        <YoutubeArticle />
        <Articles />
      </div>
    );
}

export default Home;