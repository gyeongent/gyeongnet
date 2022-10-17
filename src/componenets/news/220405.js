import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsTwo(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[3].title }
            newsdate={ newsjson.newsinfo[3].ogdate }
            newsdesc={ newsjson.newsinfo[3].desc }
            imgClass="none"
            pushBack="220314"
            pushNext="220629"
        />
    );
}

export default NewsTwo;