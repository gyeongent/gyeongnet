import React from 'react';

import './css/announcement.css';

function Announcement() {

    function closeEvent(){
        var close = document.getElementsByClassName('button')[0];
        var ann = document.getElementsByClassName('announcement')[0];

        close.addEventListener('click', function(event){
            ann.style.display="none";
        })
    }

    return (
        <div className='announcement'>
            <div className='desc'>
                웹페이지 시스템이 기존 HTML5에서 React로 변경되었습니다. 버그를 발견하셨다면
                &nbsp;<a href='mailto:support@gyeong.net' style={ { color : 'white' } }><u>여기</u></a>로 제보해주시면 감사하겠습니다.
            </div>
            <div className='desc' id='close' onClick={ closeEvent }>
                <div className='button'>
                    X
                </div>
            </div>
        </div>
    );
}

export default Announcement;