import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsOne(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[4].title }
            newsdate={ newsjson.newsinfo[4].ogdate }
            newsdesc={ newsjson.newsinfo[4].desc }
            imgClass="none"
            pushBack=""
            pushNext="220405"
        />
    );
}

export default NewsOne;