import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addFeature } from '../actions/carActions'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => dispatch(addFeature(props.feature))}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default (AdditionalFeature);
