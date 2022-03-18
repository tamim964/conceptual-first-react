import React from 'react';
import './Menubar.css'
const Menubar = (props) => {

    return (
        <div>
            <div className='container'>
                <div className='row d-flex'>
                    <div className='col-md-2 p-2 display-6'>Logo</div>
                    <div className='col-md-10 d-flex menu-container justify-content-end'>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Cart<sup>{props.count}</sup></li>
                        <li>Login</li>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menubar;