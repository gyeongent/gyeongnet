import React from 'react';

import './css/footer.css';

function Footer() {

    const date = new Date();

    const nowYear = date.getFullYear();

    return(
        <div className="footer">
            <div>
            </div>
            <div>
                &copy; {nowYear}. by GYEONG Studio.
            </div>
            <div>
            </div>
        </div>
    );
}

export default Footer;