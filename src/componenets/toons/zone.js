import React from 'react';
import toonsArray from "../../data/toons.json"

import '../css/toons.css';

function Zone(){

    const toonImgList = toonsArray.toonZoneImg.map((toonImg, index) => {
        return(
            <div className="toons_view" key={index}>
                <img src={ toonImg } alt="img"/>
            </div>
        )
    })

    return(
        <div className="toon_all">
            {toonImgList}
        </div>
    )
}

export default Zone;