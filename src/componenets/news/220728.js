import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsFour(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[0].title }
            newsdate= { newsjson.newsinfo[0].ogdate }
            newsdesc={ newsjson.newsinfo[0].desc }
            pushBack="220629"
            pushNext=""
        />
    );
}

export default NewsFour;