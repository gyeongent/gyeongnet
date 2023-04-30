import React from 'react';

// import quesArray from "../data/question.json"
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
                <StatusArticle stCircle="stRed" stContent="메일 서비스" />
                <StatusArticle stCircle="stOrange" stContent="다운로드 서비스" />
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
                    메일 서비스 중단 및 다운로드 서비스 리뉴얼 작업
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
                // window.location.href = 'mailto:support@gyeong.net';
                alert('현재 메일 서비스를 이용할 수 없습니다.')
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
            {/* <div className="supportAll">
                <Problem />
            </div> */}
            <div className="supportAll">
                <OtherMail />
            </div>
        </div>
    );
}

export default Support;