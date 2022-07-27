import React from 'react';
import NewsComponent from './componenets';
import { newsinfo } from '../../data/news.json';

import '../css/news.css';

function NewsOne(){
    return(
        <NewsComponent 
            newstitle={ newsinfo[3].title }
            newsdate={ newsinfo[3].ogdate }
            newsdesc={ newsinfo[3].desc }
        />
    );
}

export default NewsOne;