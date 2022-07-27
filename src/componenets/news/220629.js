import React from 'react';
import NewsComponent from './componenets';
import { newsinfo } from '../../data/news.json';

import '../css/news.css';

function NewsThree(){
    return(
        <NewsComponent 
            newstitle={ newsinfo[1].title }
            newsdate= { newsinfo[1].ogdate }
            newsdesc={ newsinfo[1].desc }
        />
    );
}

export default NewsThree;