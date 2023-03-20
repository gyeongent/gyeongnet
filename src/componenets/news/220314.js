import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsOne(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[5].title }
            newsdate={ newsjson.newsinfo[5].ogdate }
            newsdesc={ newsjson.newsinfo[5].desc }
            imgClass="none"
            pushBack=""
            pushNext="220405"
        />
    );
}

export default NewsOne;