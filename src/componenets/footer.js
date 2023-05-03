import React from 'react';

import '../App.css';
import './css/footer.css';

import { MdDarkMode } from 'react-icons/md'

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
            <div className="fc">
                &copy; 2020 - {nowYear}. GYEONG Studio / GYEONG. All rights reserved.
            </div>
            <div className='mode' onClick={themeMode}>
                <MdDarkMode />
            </div>
        </div>
    );
}

export default Footer;