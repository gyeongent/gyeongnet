import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsFour(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[2].title }
            newsdate= { newsjson.newsinfo[2].ogdate }
            newsdesc={ newsjson.newsinfo[2].desc }
            imgClass="none"
            pushBack="220629"
            pushNext="221017"
        />
    );
}

export default NewsFour;