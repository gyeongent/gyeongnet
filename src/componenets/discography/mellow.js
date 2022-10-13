import React from "react";
import discoArray from "../../data/discography.json";
import DiscoBase, { Tracks } from "./discoBase";

import '../css/news.css';
import '../css/discography.css';

function Mellow(){

    const discoInfo = discoArray.discoinfo

    return(
        <div className="newsFlex">
            <div className='newsSide'>
                <div>
                    Discography
                </div>
            </div>
            <div className='newsdiscoContent'>
                <DiscoBase 
                    bigImg={discoInfo[0].img}
                    dscTitle={discoInfo[0].name}
                    relDate={discoInfo[0].release}
                    tracks={
                        <Tracks 
                            trackNum = "1"
                            trackName = "Chiffon(쉬폰)"
                            trackLength = "-"
                        />
                    }
                    tracks2={
                        <Tracks 
                            trackNum = "2"
                            trackName = "-"
                            trackLength = "-"
                        />
                    }
                    tracks3={
                        <Tracks 
                            trackNum = "3"
                            trackName = { `${discoInfo[1].name} (Remastered Ver.)` }
                            trackLength = "2:16"
                        />
                    }
                    copyright={discoInfo[2].copyright}
                    publisher={discoInfo[2].publisher}
                />
            </div>
        </div>
    );
}

export default Mellow;