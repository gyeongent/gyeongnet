/* eslint-disable no-useless-concat */
import React from 'react';
import { Link } from 'react-router-dom';
import discoArray from "../data/discography.json";

import './css/news.css';
import './css/discography.css';

function Discography(){

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

    document.addEventListener('scroll', function(){
        var st = document.getElementsByClassName('newsSide')[0]

        if(window.scrollY > 100 && document.body.clientWidth >= 768){
            st.classList.add('sideFixed');
        } else {
            st.classList.remove('sideFixed');
        }
    })



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
        </>
    );
}

export default Discography;