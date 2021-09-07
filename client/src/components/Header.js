import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from './Products';
import { Expenses } from './Expenses';


function Header() {

    const [display, setDisplay] = useState('');
    const [fname, setFname] = useState(localStorage.getItem('fname'));
    const [lname, setLname] = useState(localStorage.getItem('lname'));

    return (
        <div className='dashboard'>
            <div className='header'>
                <div className='header-buttons'>
                <button className="button-products"><Link to="/products" onClick={() => setDisplay('')}>PRODUCTS</Link></button>                
                <button className="button-ghost btn-expenses"><Link to="/expenses" onClick={() => setDisplay('Expenses')}>EXPENSES</Link></button>
                </div>
                <div className='avatar'>
                <img className='avatar-icon' alt="Avatar Icon" src='https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg'></img>
                    <p className='username'>{fname + ' ' + lname}</p>
                </div>
            </div>

            {display === '' && <Products />}
            {display === 'Expenses' && <Expenses />}
            
        </div>
    )
}

export default Header;