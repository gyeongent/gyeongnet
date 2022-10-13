import React from 'react';
import discoArray from "../../data/discography.json";
import DiscoBase, { Tracks } from "./discoBase";

import '../css/news.css';
import '../css/discography.css';

function Anxiety(){

    const discoInfo = discoArray.discoinfo

    return(
        <div className='newsFlex'>
            <div className='newsSide'>
                <div>
                    Discography
                </div>
            </div>
            <div className='newsdiscoContent'>
                <DiscoBase
                    bigImg={discoInfo[2].img}
                    dscTitle={discoInfo[2].name}
                    relDate={discoInfo[2].release}
                    tracks={
                        <Tracks 
                            trackNum = "1"
                            trackName = "Anxiety(불안장애)"
                            trackLength = "2:04"
                        />
                    }
                    copyright={discoInfo[2].copyright}
                    publisher={discoInfo[2].publisher}
                />
            </div>
        </div>
    );
}

export default Anxiety;