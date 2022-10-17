import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsFour(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[1].title }
            newsdate= { newsjson.newsinfo[1].ogdate }
            newsdesc={ newsjson.newsinfo[1].desc }
            imgClass="none"
            pushBack="220629"
            pushNext="221017"
        />
    );
}

export default NewsFour;