import React, { useState } from 'react';
import { Parallax } from 'react-parallax';

import './css/portfolio.css';

const Container = () => (
    <Parallax
        blur={{ min: -13, max: 15}}
        bgImage={require('../img/honey_moon.png')}
        bgImageAlt="Main Title image"
        strength={-200}
    >
        <div className="maintitle">
            나의 판타지 세계
        </div>
        <div className='MainSection' />
    </Parallax>
);

function HomeScreen() {
    return(
        <div className="uppertitle">
            <Container />
        </div>
    );
}

function PfoList() {

    function setColor(strValue){

        var pfobtn = document.getElementsByClassName('pfo_btn');
        var pfohr = document.getElementsByClassName('pfo_hr');

        if (strValue == "1") {
            pfobtn[0].classList.add("clicked");
            pfobtn[1].classList.remove("clicked");
            pfobtn[2].classList.remove("clicked");
            pfohr[0].classList.add("clicked");
            pfohr[1].classList.remove("clicked");
            pfohr[2].classList.remove("clicked");
        } else if (strValue == "2") {
            pfobtn[0].classList.remove("clicked");
            pfobtn[1].classList.add("clicked");
            pfobtn[2].classList.remove("clicked");
            pfohr[0].classList.remove("clicked");
            pfohr[1].classList.add("clicked");
            pfohr[2].classList.remove("clicked");
        } else if (strValue == "3") {
            pfobtn[0].classList.remove("clicked");
            pfobtn[1].classList.remove("clicked");
            pfobtn[2].classList.add("clicked");
            pfohr[0].classList.remove("clicked");
            pfohr[1].classList.remove("clicked");
            pfohr[2].classList.add("clicked");
        } else {
            pfobtn[0].classList.remove("clicked");
            pfobtn[1].classList.remove("clicked");
            pfobtn[2].classList.remove("clicked");
            pfohr[0].classList.remove("clicked");
            pfohr[1].classList.remove("clicked");
            pfohr[2].classList.remove("clicked");
        }
    }
    

    let [setContents, useContents] = useState([
        '디자인에 공감을 더하다',
        '유년기 시절부터 창의적인 만들기를 좋아했었습니다. 그렇게 자라 내가 상상하던 작품을 만들게 되었고 그 모든 작품 안에는  누구나 쉽게 "공감" 할수 있는 메세지를 담도록 노력했습니다.',
        '링크 바로가기',
    ])

    function Graphics() {
        var newGraphics = [...setContents]
        newGraphics = [
            '디자인에 공감을 더하다',
            '유년기 시절부터 창의적인 만들기를 좋아했었습니다. 그렇게 자라 내가 상상하던 작품을 만들게 되었고 그 모든 작품 안에는  누구나 쉽게 "공감" 할수 있는 메세지를 담도록 노력했습니다.',
            '링크 바로가기',
        ];
        useContents( newGraphics );
    }

    function Games() {
        var newGames = [...setContents]
        newGames = [
            '도전기',
            '2D 및 3D 그래픽을 넘어 이것을 활용한 다양한 작품을 만들고자 했습니다. 게임에 대한 도전이 그것에 대한 첫 번째 도전입니다. 다양한 바리에이션과 기능들을 넣으려 노력했고, 앞으로 더욱 나은 창의력과 더 많은 성장할 것 입니다.',
            '링크 바로가기',
        ];
        useContents( newGames );
    }

    function Musics() {
        var newMusics = [...setContents]
        newMusics = [
            '느끼는 감정들',
            '어렸을 적부터 우울할때나 힘이 들때마다 음악을 들으며 공감하고 위로를 받아왔습니다. 이때 "공감"했던 경험이 지금의 그래픽 포트폴리오를 쌓아가는 데에 아주 중요했던 역할 중 하나였습니다. 이제 누군가에게 위로의 감정을 느끼게 해줄 차례입니다.',
            '링크 바로가기',
        ];
        useContents( newMusics );
    }

    

    

    return (
        <div className="pfo_contents">
            <div className="pfo_nav">
                <ul>
                    <li className="pfo_btn" onClick={ () => {Graphics(); setColor(1);} }>
                        그래픽
                        <hr className='pfo_hr'/>
                    </li>
                    <li className="pfo_btn" onClick={ () => {Games(); setColor(2);} }>
                        게임
                        <hr className='pfo_hr'/>
                    </li>
                    <li className="pfo_btn" onClick={ () => {Musics(); setColor(3);} }>
                        음악
                        <hr className='pfo_hr'/>
                    </li>
                </ul>
            </div>
            <div className="pfo_info">
                <div className="pfo_title">
                    { setContents[0] }
                <hr/>
                </div>
                <div className="pfo_desc">
                    { setContents[1] }
                </div>
                <div className="pfo_go">
                    <a href="https://portfolio.gyeong.net/" target={"_blank"}>
                        { setContents[2] }
                    </a>
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <div className='homeBody'>
            <HomeScreen />
            <PfoList />
        </div>
    );
}

export default Portfolio;