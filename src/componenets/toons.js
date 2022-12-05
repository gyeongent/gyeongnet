import React from 'react';
import { Link } from 'react-router-dom';
import toonsArray from '../data/toons.json';

import './css/toons.css';

function ToonsPage(){

    const toonList = toonsArray.tooninfo.map((tooninfo, index) => {
        return(
            <Link to={'/toons/' + tooninfo.url} key={index}>
                <div className="toons_box">
                    <div className="toons_thumb">
                        <img src={ tooninfo.thumb } alt={tooninfo.title}/>
                    </div>
                    <div className="toons_info">
                        {tooninfo.title} {tooninfo.date}
                        <div>
                            {tooninfo.desc}
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    return(
        <div>
            <div>

            </div>
            <div className="toons_list">
                {toonList}
            </div>
        </div>
    )
}

export default ToonsPage;