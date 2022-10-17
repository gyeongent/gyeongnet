import React from 'react';
import { Link } from 'react-router-dom';

import '../css/news.css';

function NewsComponent(props){

    document.addEventListener('scroll', function(){
        var bc = document.getElementsByClassName('b2l')[0];

        if(window.scrollY > 100 && document.body.clientWidth >= 768){
            bc.classList.add('rightFixed');
        } else {
            bc.classList.remove('rightFixed');
        }
    })

    return(
        <div className="newsFlex">
            <div className='newsSide'>
                <div>
                    NEWS
                </div>
            </div>
            <div className='newsContent'>
                <div className='newsTitle'>
                    { props.newstitle }
                </div>
                <div className='NewsDate'>
                    { props.newsdate }
                </div>
                <hr />
                <div className='newsImg'>
                    <img src={props.imgSrc} alt="newsImg" className={props.imgClass}/>
                </div>
                <div className='newsDesc'>
                    { props.newsdesc }
                </div>
            </div>
            <div className="b2l">
                <div>
                    <Link to="/news">
                        <div>
                            &lt;
                        </div>
                        <div className="pc_b2l">
                            BACK<br/>TO<br/>LIST
                        </div>
                        <div className='m_b2l'>
                            BACK TO LIST
                        </div>
                    </Link>
                </div>
                <hr className="b2l_hr"/>
                <div className='rightNav'>
                    <div>
                        <Link to={'/news/' + props.pushBack}>
                            Previous
                        </Link>
                    </div>
                    <div>
                        <Link to={'/news/' + props.pushNext}>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsComponent;