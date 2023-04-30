/* eslint-disable no-useless-concat */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import discoArray from "../data/discography.json";

import './css/news.css';
import './css/discography.css';

function Discography(){

    const { discoId } = useParams();

    const discoList = discoArray.discoinfo.map((discoinfo, index) => {
        return (
            <Link to={'/discography/' + discoinfo.url} key={index}>
                <div className="discoBox" id={ discoinfo.class }>
                    <div className="discoImg">
                        <img src={ discoinfo.img } loading="lazy" alt="discoImg"/>
                    </div>
                    <div className="discoInfo">
                        <div className="discoDesc">
                            <div className="discoCate">
                                <div className="type">카테고리</div>
                                <div>{ discoinfo.type }</div>
                            </div>
                            <div className="discoCate">
                                <div className="type">발매일</div>
                                <div>{ discoinfo.release }</div>
                            </div>
                        </div>
                        <div className="discoTitle">
                            <b>{ discoinfo.name }</b>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })



    const discoContent = discoArray.discoinfo.filter(content => content.url === discoId)

    const trackNumContent = discoContent.map(trk => trk.trackNum.map((tn, index) => {
        return(
            <p key={index}>
                {tn}
            </p>
        )
    }))

    const trackNameContent = discoContent.map(trk => trk.trackName.map((tt, index) => {
        return(
            <p key={index}>
                {tt}
            </p>
        )
    }))

    const trackLengthContent = discoContent.map(trk => trk.trackLength.map((tl, index) => {
        return(
            <p key={index}>
                {tl}
            </p>
        )
    }))

    return(
        <>
            <div className='newsFlex'>
                <div className='newsSide'>
                    <div>
                        디스코그래피
                    </div>
                </div>
                <div className='discoMenu'>
                    <div className='newsdiscoContent'>
                        { discoList }
                    </div>
                    <div>
                        {discoContent.map((content, index) => (
                            <div className='newsFlex New' key={index}>
                                <div className='newsdiscoContentDetail'>
                                    <div>
                                        <div className="bigImg">
                                            <img src={content.img} alt={content.name} />
                                        </div>
                                    </div>
                                    <div className="aboutDisco">
                                        <div className="thisDisco">
                                            <div className="thisDiscoTitle">
                                                {content.name}
                                            </div>
                                            <div className="thisDiscoDate">
                                                {content.release}
                                            </div>
                                            <hr />
                                            <div>
                                                {discoContent.map((index) => (
                                                    <div>
                                                        <div className='aboutTrack' key={index}>
                                                            <div>{trackNumContent}</div>
                                                            <div>{trackNameContent}</div>
                                                            <div>{trackLengthContent}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <hr />
                                            </div>
                                            <div className="discoCredit">
                                                <p>{content.copyright}</p>
                                                <p>{content.publisher}</p>
                                            </div>
                                            <div className='thisDiscoNotice'>
                                                <p>{content.notice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discography;