import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsThree(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[1].title }
            newsdate= { newsjson.newsinfo[1].ogdate }
            newsdesc={ newsjson.newsinfo[1].desc }
        />
    );
}

export default NewsThree;