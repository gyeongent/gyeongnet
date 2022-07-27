import React from 'react';
import NewsComponent from './componenets';
import { newsinfo } from '../../data/news.json';

import '../css/news.css';

function NewsTwo(){
    return(
        <NewsComponent 
            newstitle={ newsinfo[2].title }
            newsdate={ newsinfo[2].ogdate }
            newsdesc={ newsinfo[2].desc }
        />
    );
}

export default NewsTwo;