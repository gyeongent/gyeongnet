/* eslint-disable no-useless-concat */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import discoArray from "../data/discography.json";

import DiscoBase from './discography/discoBase';

import { BiLeftArrowAlt } from 'react-icons/bi'

import './css/news.css';
import './css/discography.css';

function Discography(){

    const { discoId } = useParams();

    const openDetail = () => {
        const detail = document.getElementsByClassName('newsFlex')
        const newDetail = document.getElementsByClassName('New')
        
        detail[0].style.display = 'none'
        newDetail[0].style.display = 'block'
    }

    const discoList = discoArray.discoinfo.map((discoinfo, index) => {
        return (
            <Link to={'/discography/' + discoinfo.url} key={index}>
                <div className="discoBox" id={ discoinfo.class } onClick={openDetail}>
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
            <p>
                {tn}
            </p>
        )
    }))

    const trackNameContent = discoContent.map(trk => trk.trackName.map((tm, index) => {
        return(
            <p>
                {tm}
            </p>
        )
    }))

    const trackLengthContent = discoContent.map(trk => trk.trackLength.map((tl, index) => {
        return(
            <p>
                {tl}
            </p>
        )
    }))

    const closeDetail = () => {
        const detail = document.getElementsByClassName('newsFlex')
        const newDetail = document.getElementsByClassName('New')
        
        detail[0].style.display = 'block'
        newDetail[0].style.display = 'none'
    }

    return(
        <>
            <div className='newsFlex'>
                <div className='newsSide'>
                    <div>
                        디스코그래피
                    </div>
                </div>
                <div className='newsdiscoContent'>
                    { discoList }
                </div>
            </div>
            <div>
                {discoContent.map((content, index) => (
                    <div className='newsFlex New' key={index}>
                        <div className='newsSide'>
                            <div className='discoBigTitle'>
                                <BiLeftArrowAlt onClick={closeDetail}/><div>디스코그래피</div>
                            </div>
                        </div>
                        <div className='newsdiscoContent'>
                            <DiscoBase
                                bigImg={content.img}
                                dscTitle={content.name}
                                relDate={content.release}
                                tracks={discoContent.map((content, index) => (
                                    <div className='aboutTrack' key={index}>
                                        <div className='trackNum'>{trackNumContent}</div>
                                        <div>{trackNameContent}</div>
                                        <div>{trackLengthContent}</div>
                                    </div>
                                ))}
                                copyright={content.copyright}
                                publisher={content.publisher}
                                notice={content.notice}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Discography;