import React from 'react';

import '../css/news.css';

function NewsComponent(props){
    return(
        <div className="newsFlex">
            <div className='newsSide'>
                <div>
                    NEWS
                </div>
            </div>
            <div className='newsContent'>
                <div className='newsTitle'>
                    { props.newstitle }
                </div>
                <div className='NewsDate'>
                    { props.newsdate }
                </div>
                <hr />
                <div className='newsDesc'>
                    { props.newsdesc }
                </div>
            </div>
        </div>
    );
}

export default NewsComponent;