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

        const showAllContent = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");

            album.style.display = "block";
            digital.style.display = "block";
        }

        // const showAllContent = () => {
        //     const album = document.querySelectorAll("#album");
        //     const digital = document.querySelectorAll("#digital");

        //     for (let i = 0; i < album.length; i++){
        //         showAll.addEventListener('click', () => {
        //             album[i].style.display = "block";
        //         })
        //     }

        //     for (let i = 0; i < digital.length; i++){
        //         showAll.addEventListener('click', () => {
        //             digital[i].style.display = "block";
        //         })
        //     }
        // }

        // const removeAlbum = () => {
        //     const album = document.querySelectorAll("#album");
        //     const digital = document.querySelectorAll("#digital");

        //     for (let i = 0; i < album.length; i++){
        //         digiNav.addEventListener('click', () => {
        //             album[i].style.display = "none";
        //         })
        //     }

        //     for (let i = 0; i < digital.length; i++){
        //         digiNav.addEventListener('click', () => {
        //             digital[i].style.display = "block";
        //         })
        //     }
        // }

        // const removeDigital = () => {
        //     const album = document.querySelectorAll("#album");
        //     const digital = document.querySelectorAll("#digital");

        //     for (let i = 0; i < album.length; i++){
        //         albumNav.addEventListener('click', () => {
        //             album[i].style.display = "block";
        //         })
        //     }

        //     for (let i = 0; i < digital.length; i++){
        //         digital[i].addEventListener('click', () => {
        //             digital[i].style.display = "none";
        //         })
        //     }
        // }

        const removeDigital = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");

            album.style.display = "block";
            digital.style.display = "none";
        }

        const removeAlbum = () => {
            const album = document.getElementById("album");
            const digital = document.getElementById("digital");

            album.style.display = "none";
            digital.style.display = "block";
        }

        showAll.addEventListener("click", showAllContent);
        digiNav.addEventListener("click", removeAlbum);
        albumNav.addEventListener("click", removeDigital);


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
                        <img src={ `data:image/jpg;base64,` + `${discoinfo.base64}` } alt="jacket"/>
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
                            { discoinfo.name }
                        </div>
                    </div>
                </div>
            </Link>
        )
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
            <div className='newsContent'>
                { discoList }
            </div>
        </div>
        </>
    );
}

export default Discography;