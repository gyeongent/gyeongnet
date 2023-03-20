import React, { useState } from 'react';
// import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import newsjson from '../data/news.json';

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
            <Link to={'/news/' + props.link }>
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
                <Link to="/news">
                    더보기
                </Link>
            </div>
        </div>
    );
}

function AllNews() {

    let [setTitle] = useState([
        ':)'
    ])

    return(
        <div className="HomeTop">
            <NewsTap
                bgcolor="peach"
                tapName="📣 최신 소식"
                linkto={ newsjson.newsinfo[0].date }
                newsTitle={ newsjson.newsinfo[0].title }
                newsDate={ newsjson.newsinfo[0].ogdate }
            />
            <NewsTap
                bgcolor="sea"
                tapName="🗓️ 주요 일정"
                dateId="singleDate"
                newsTitle={ setTitle[0] }
                linkto={""}
            />
        </div>
    );
}


function Home() {

    return (
      <div className="homeBody">
        <HomeScreen />
        <AllNews />
      </div>
    );
}

export default Home;