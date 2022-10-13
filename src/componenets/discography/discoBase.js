import React from "react";

import "../css/discography.css";

export function Tracks(props){
    return(
        <>
        <div className="aboutTrack">
            <div>
                {props.trackNum}
            </div>
            <div>
                {props.trackName}
            </div>
            <div>
                {props.trackLength}
            </div>
        </div>
        <hr />
        </>
    );
}

function DiscoBase(props){
    return(
        <div className="aboutDisco">
            <div className="bigImg">
                <img src={props.bigImg} alt="bigImg"/>
            </div>
            <div className="thisDisco">
                <div className="thisDiscoTitle">
                    {props.dscTitle}
                </div>
                <div className="thisDiscoDate">
                    {props.relDate}
                </div>
                <hr />
                <div>
                    {props.tracks}
                </div>
                <div>
                    {props.tracks2}
                </div>
                <div>
                    {props.tracks3}
                </div>
                <div className="discoCredit">
                    <p>{props.copyright}</p>
                    <p>{props.publisher}</p>
                </div>
            </div>
        </div>
    );
}

export default DiscoBase;