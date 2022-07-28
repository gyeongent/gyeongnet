import React from 'react';
import Anxiety from '../img/album/anxiety_cover.jpg';
import Aurora from '../img/album/aurora_cover.jpg';

import './css/news.css';
import './css/home.css';

function DiscoContents(props) {
    return(
        <div className='roundbox'>
            <div className='roundimg'>
                <img src={ props.contentimg } alt='Cover_img'/>
            </div>
            <div className='roundtitle'>
                { props.contenttitle }
            </div>
            <div className='rounddesc'>
                { props.contentdesc }
            </div>
        </div>
    );
}


function Discography(){
    return(
        <div className='newsFlex'>
            <div className='newsSide'>
                <div>
                    Discography
                </div>
            </div>
            <div className='newsContent'>
                <div className="flexcontent">
                    <DiscoContents 
                        contentimg={Aurora}
                        contenttitle="오로라 (Aurora)"
                        contentdesc="디지털 · 2022.10.21"
                    />
                    <DiscoContents 
                        contentimg={Anxiety}
                        contenttitle="불안장애 (Anxiety)"
                        contentdesc="디지털 · 2022.07.08"
                    />
                </div>
            </div>
        </div>
    );
}

export default Discography;