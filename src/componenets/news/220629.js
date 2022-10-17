import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';
import discoArray from '../../data/discography.json'

import '../css/news.css';

function NewsThree(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[2].title }
            newsdate= { newsjson.newsinfo[2].ogdate }
            newsdesc={ newsjson.newsinfo[2].desc }
            imgSrc={ discoArray.discoinfo[2].img }
            imgClass="block"
            pushBack="220405"
            pushNext="220728"
        />
    );
}

export default NewsThree;