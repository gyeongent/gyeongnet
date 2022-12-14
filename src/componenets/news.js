import React from 'react';
import {Link} from 'react-router-dom'
import newsArray from '../data/news.json';

import './css/news.css';

function News() {

    const renderList = newsArray.newsinfo.map((newsinfo, index) => {
        return(
            <Link to={'/news/' + newsinfo.date } key={index}>
                <div className="NewsContents_Box">
                    <div className='NewsContents'>
                        { newsinfo.title }
                        <div className='NewsContentsInfo'>
                            <p className="NewsDate">{ newsinfo.ogdate }</p>
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
        <div className='newsFlex'>
            <div className="newsSide">
                <div>
                    NEWS
                </div>
            </div>
            <div className="newsContent">
                { renderList }
            </div>
        </div>
    );
}

export default News;