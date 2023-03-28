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
                디자인 업데이트가 완료되었습니다.
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