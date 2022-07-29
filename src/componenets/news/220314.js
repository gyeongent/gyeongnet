import React from 'react';
import NewsComponent from './componenets';
import newsjson from '../../data/news.json';

import '../css/news.css';

function NewsOne(){
    return(
        <NewsComponent 
            newstitle={ newsjson.newsinfo[3].title }
            newsdate={ newsjson.newsinfo[3].ogdate }
            newsdesc={ newsjson.newsinfo[3].desc }
        />
    );
}

export default NewsOne;