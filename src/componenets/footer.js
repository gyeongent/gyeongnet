import React from 'react';

import '../App.css';
import './css/footer.css';

function Footer() {

    const themeMode = () => {
        const webApp = document.querySelector('body');

        webApp.classList.toggle('dark')
    }

    const date = new Date();

    const nowYear = date.getFullYear();

    return(
        <div className="footer">
            <div className="backdrop" />
            <div>
                &copy; 2020 - {nowYear}. GYEONG Studio / GYEONG. All rights reserved.
            </div>
            <div className='mode' onClick={themeMode}/>
        </div>
    );
}

export default Footer;