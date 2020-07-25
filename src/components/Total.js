import React from 'react';
import { mapStateToProps, mapTotalPriceToProps } from '../reducers/carReducer';
import { connect, useSelector } from 'react-redux';

const Total = props => {
  const total = useSelector(state => state.price + state.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${total}</h4>
    </div>
  );
};

export default Total;
