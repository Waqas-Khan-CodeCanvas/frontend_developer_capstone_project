import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
    return (
        <div style={{
            textAlign: 'center',
            marginTop: '250px',

            }}>

            <h1>404</h1>
            <h1>Page Not Found</h1>
            <p>Oops! You've ventured into the unknown 🔍</p><br />
            <p>okay okay, you got me... I haven't built this page yet 😅 lol</p>
            <Link to="/" style={{color: 'blue'}}> click here to get back on the tour!</Link>
        </div>
    );
}

export default PageNotFound;
