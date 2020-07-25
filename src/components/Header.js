import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Header = props => {
  const { image, name, price } = useSelector(state => ({
    image: state.image,
    name: state.name,
    price: state.price
  }), shallowEqual)
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};


export default (Header);
