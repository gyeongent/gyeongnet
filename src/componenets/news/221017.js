import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';
import discoArray from '../../data/discography.json'

import '../css/news.css';

function NewsFive(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[1].title }
            newsdate= { newsjson.newsinfo[1].ogdate }
            newsdesc={ newsjson.newsinfo[1].desc }
            imgSrc={ discoArray.discoinfo[1].img }
            imgClass="block"
            pushBack="220728"
            pushNext=""
        />
    );
}

export default NewsFive;