'use client'

import React from 'react';

function NavToggle(props) {
    return (
        <button id={'nav-toggle'} onClick={() => {
            document.getElementById('header-nav').classList.toggle('nav-open')
            document.getElementById('nav-toggle').classList.toggle('nav-toggle-open')
        }}
                style={{display: window.innerWidth > 1200 && 'none'}}
        >
            {/*123*/}
            <span></span>
            <span></span>
        </button>
    );
}

export default NavToggle;