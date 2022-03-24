import React from 'react';
import './Element.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Element = (props) => {
    const { name, img, bullet, capacity, action, price } = props.el;
    return (
        <div className='elm'>
            <div className='dv'>
                <img src={img} alt="image" />
            </div>
            <div className='inf'>
              <h2>{name}</h2>
              <p>Bullet Type: {bullet}</p>
              <p>Capacity: {capacity}</p>
              <p>Action: {action}</p>
            </div>
            <div className='bt'>
                <button onClick={()=> props.fc(props.el)}><FontAwesomeIcon className='icn' icon={faShoppingCart}></FontAwesomeIcon></button>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Element;