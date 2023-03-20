import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';
import discoArray from '../../data/discography.json'

import '../css/news.css';

function NewsThree(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[3].title }
            newsdate= { newsjson.newsinfo[3].ogdate }
            newsdesc={ newsjson.newsinfo[3].desc }
            imgSrc={ discoArray.discoinfo[3].img }
            imgClass="block"
            pushBack="220405"
            pushNext="220728"
        />
    );
}

export default NewsThree;