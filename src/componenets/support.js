import React from 'react';
import ReactSearchBox from "react-search-box";

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
                    현재 다운로드 서비스에 오류가 발생했거나 기능 추가중입니다. 곧 해결될 예정이니 기다려주시면 감사하겠습니다.
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

function Support(){
    return(
        <div>
            <div className="supportAll">
                <Status />
                <Issue />
            </div>
        </div>
    );
}

export default Support;