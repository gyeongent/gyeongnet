import React from 'react';
import { NavLink, useParams } from 'react-router-dom'
import newsArray from '../data/news.json';

import './css/news.css';

function News() {

    const { newsId } = useParams();

    const renderList = newsArray.newsinfo.map((newsinfo, index) => {
        return(
            <NavLink to={'/news/' + newsinfo.date } key={index}>
                <div className="NewsContents_Box">
                    <div className='NewsContents'>
                        { newsinfo.ogdate }
                    </div>
                </div>
            </NavLink>
        )
    })

    const newsContent = newsArray.newsinfo.filter(content => content.date === newsId)

    return(
        <div>
            <div className="newsSide">
                최신 소식
            </div>
            <div className="newsContent">
                { renderList }
            </div>
            <div>
                {newsContent.map(content => (
                    <div className='newsInfo'>
                        <div className='newsTitle'>
                            {content.title}
                        </div>
                        <div className='newsDate'>
                            {content.ogdate}
                        </div>
                        <div className='newsImg'>
                            <img src={content.img} className={content.imgClass}/>
                        </div>
                        <div className='newsDesc'>
                            {content.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;