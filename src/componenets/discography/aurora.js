import React from 'react';
import discoArray from "../../data/discography.json";
import DiscoBase, { Tracks } from "./discoBase";

import auroraCover from "../../img/album/aurora_cover.jpg";

import '../css/news.css';
import '../css/discography.css';

function Aurora(){

    const discoInfo = discoArray.discoinfo

    return(
        <div className='newsFlex'>
            <div className='newsSide'>
                <div>
                    Discography
                </div>
            </div>
            <div className='newsContent'>
                <DiscoBase
                    bigImg={auroraCover}
                    dscTitle={discoInfo[1].name}
                    relDate={discoInfo[1].release}
                    tracks={
                        <Tracks 
                            trackNum = "1"
                            trackName = "오로라(Aurora)"
                            trackLength = "-"
                        />
                    }
                    copyright={discoInfo[1].copyright}
                    publisher={discoInfo[1].publisher}
                />
            </div>
        </div>
    );
}

export default Aurora;