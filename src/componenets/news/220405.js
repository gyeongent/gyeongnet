import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsTwo(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[2].title }
            newsdate={ newsjson.newsinfo[2].ogdate }
            newsdesc={ newsjson.newsinfo[2].desc }
            pushBack="220314"
            pushNext="220629"
        />
    );
}

export default NewsTwo;