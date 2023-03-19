/* eslint-disable no-useless-concat */
import React from 'react';
import { Link } from 'react-router-dom';
import discoArray from "../data/discography.json";

import './css/news.css';
import './css/discography.css';

function DiscoNavi(){

    window.ready = function(){
        const digiNav = document.getElementById("digitalNav");
        const showAll = document.getElementById("showAllNav");
        const albumNav = document.getElementById("albumNav");
        const cdNav = document.getElementById("cdNav");

        const showAllContent = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");
            const cd = document.getElementById("cd");

            album.style.display = "block";
            digital.style.display = "block";
            cd.style.display = "block";
        }

        const removeDigital = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");
            const cd = document.getElementById("cd");

            album.style.display = "block";
            digital.style.display = "none";
            cd.style.display = "none";
        }

        const removeAlbum = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");
            const cd = document.getElementById("cd");

            album.style.display = "none";
            digital.style.display = "block";
            cd.style.display = "none";
        }

        const showCd = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");
            const cd = document.getElementById("cd");

            album.style.display = "none";
            digital.style.display = "none";
            cd.style.display = "block";
        }

        showAll.addEventListener("click", showAllContent);
        digiNav.addEventListener("click", removeAlbum);
        albumNav.addEventListener("click", removeDigital);
        cdNav.addEventListener("click", showCd)


    }

    return(
        <div className="discoNavi">
            <ul>
                <li id="showAllNav">
                    전체
                </li>
                <li id="digitalNav">
                    디지털
                </li>
                <li id="cdNav">
                    CD
                </li>
                <li id="albumNav">
                    앨범
                </li>
            </ul>
        </div>
    );
}

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
        <div className="discoNaviAll">
            <DiscoNavi />
        </div>
        <div className='newsFlex'>
            <div className='newsSide'>
                <div>
                    Discography
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