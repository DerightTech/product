import React from 'react';
import product from '../product';

const Price = ({ price }) => {

return <p><span className='amount'>AMOUNT:</span> <span className='spann'>₦‎{product.price}</span></p>;

};

export default Price;