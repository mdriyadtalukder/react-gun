import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    return (
        <nav className='hd'>
         <h1>Kopa Samsu Gun Store</h1>
       <div className='dil' onClick={props.op}>
       <FontAwesomeIcon icon={faShoppingCart}>{props.cl.length}</FontAwesomeIcon>
       <span>{props.cl.length}</span>
       </div>

        </nav>
    );
};

export default Header;