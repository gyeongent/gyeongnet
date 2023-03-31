import React from "react";

import "./css/army.css"

function Index(props){
    return(
        <div className="addArmy">
            <div className='category'>
                {props.category}
            </div>
            <div className='content'>
                {props.content}
            </div>
        </div>
    )
}

function ArmyPage(){
    return(
        <div className='thecampArticle'>
            <div className="thecampTitle">
                <div className='thecampLogo'>
                    <img src="https://www.thecamp.or.kr/images/content/h1_logo.png" alt='the camp logo'/>
                </div>
                <div className='titleText'>
                    보고싶은 군인 등록
                </div>
            </div>
            <div className="contentSection">
                <Index category="성분" content="훈련병"/>
                <Index category="군종" content="육군"/>
                <Index category="이름" content="이경민"/>
                <Index category="생년월일" content="2003년 10월 21일"/>
                <Index category="입영일" content="2023년 06월 27일"/>
                <Index category="입영부대" content="제3보병사단(3사단) 신병교육대"/>
                <Index category="보고싶은군인 전화번호" content="+82KR 1043145616"/>
            </div>
        </div>
    )
}

export default ArmyPage;