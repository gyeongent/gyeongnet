import React from 'react';
import NewsComponent from './componenets';
import { newsinfo } from '../../data/news.json';

import '../css/news.css';

function NewsFour(){
    return(
        <NewsComponent 
            newstitle={ newsinfo[0].title }
            newsdate= { newsinfo[0].ogdate }
            newsdesc={ newsinfo[0].desc }
        />
    );
}

export default NewsFour;