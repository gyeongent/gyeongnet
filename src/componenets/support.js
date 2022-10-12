import React from 'react';

import quesArray from "../data/question.json"
import './css/support.css';

function StatusArticle(props){
    return(
        <div className="statusArticle">
            <div className="statusCol">
                <div className={props.stCircle} />
                <div className="statusContent">
                    {props.stContent}
                </div>
            </div>
        </div>
    );
}

function Status(){
    return(
        <div className="statusBox">
            <div className="statusTitle">
                현재 서비스 상태
            </div>
            <div className="statusTotal">
                <StatusArticle stCircle="stGreen" stContent="홈페이지 상태" />
                <StatusArticle stCircle="stGreen" stContent="메일 서비스" />
                <StatusArticle stCircle="stGreen" stContent="다운로드 서비스" />
            </div>
        </div>
    );
}

function Issue(){
    return(
        <div className="issueBox">
            <div className="statusTitle">
                알려진 문제
            </div>
            <div className="issueContent">
                <div className="issueArticle">
                    발견된 문제가 없습니다 :)
                </div>
                <div className="issueBar">
                    <hr className="issueHr" />
                    <div className="statusList">
                        <div className="statusListChild">
                            <div className="stGreen Mini"/> <div className="childName">원활</div>
                        </div>
                        <div className="statusListChild">
                            <div className="stOrange Mini"/> <div className="childName">점검중</div>
                        </div>
                        <div className="statusListChild">
                            <div className="stRed Mini"/> <div className="childName">접속불가</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Problem(){

    function showContent(event){
        var cktitle = document.querySelectorAll(".quesTitle")
        var ckdesc = document.querySelectorAll(".quesDesc")

        event.preventDefault();

        for (let i = 0; i < cktitle.length; i++){
            cktitle[i].addEventListener('click', () => {
                ckdesc[i].classList.toggle('quesOpen')
            });
        }  
    }

    const quesList = quesArray.quesinfo.map((quesinfo, index) => {
        return(
            <div className="quesBox" key={index}>
                <div className="quesTitle" onClick={showContent}>
                    { quesinfo.title }
                </div>
                <div className="quesDesc">
                    <hr />
                    { quesinfo.desc }
                </div>
            </div>
        )
    })

    

    return(
        <div className="supportQues">
            <hr className="splitHr"/>
            <div className="statusTitle">
                무슨 문제가 발생했나요?
            </div>
            <div>
                <input className="supportInput" type="text" id="searchQues" placeholder="어떤 문제가 발생했는지 적어주세요."/>
            </div>
            <div>
                { quesList }
            </div>
        </div>
    );
}

function OtherMail(){
    return(
        <div className="otherQues">
            <hr className="splitHr"/>
            <div className="oqTitle">
                다른 문제를 발견했나요?
            </div>
            <div className="oqDesc">
                아래 버튼을 눌러 자세한 내용을 알려주세요!
            </div>
            <div className="radiusButton" onClick={(e) => {
                window.location.href = 'mailto:support@gyeong.net';
            }}>
                메일 보내기
            </div>
        </div>
    );
}

function Support(){
    return(
        <div>
            <div className="supportAll">
                <Status />
                <Issue />
            </div>
            <div className="supportAll">
                <Problem />
            </div>
            <div className="supportAll">
                <OtherMail />
            </div>
        </div>
    );
}

export default Support;