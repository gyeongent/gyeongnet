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
                2025년, GYEONG Studio가 새롭게 출발합니다.<br/>
                <a href='https://blog.gyeong.net/2024/04/2024-2025-gyeong-studio.html?m=0' target='_blank' alt='GYEONG Studio Blog'><u><small>자세한 내용은 이쪽에서</small></u></a>
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