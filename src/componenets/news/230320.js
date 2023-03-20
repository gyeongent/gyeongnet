import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsFive(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[0].title }
            newsdate= { newsjson.newsinfo[0].ogdate }
            newsdesc={ newsjson.newsinfo[0].desc }
            imgClass="none"
            pushBack="221017"
            pushNext="220320"
        />
    );
}

export default NewsFive;