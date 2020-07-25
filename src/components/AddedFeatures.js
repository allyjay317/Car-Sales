import React from 'react';

import AddedFeature from './AddedFeature';
import { connect, useSelector } from 'react-redux';
import { mapCarToProps } from '../reducers/carReducer';

const AddedFeatures = props => {
  const features = useSelector(state => state.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

export default (AddedFeatures);
