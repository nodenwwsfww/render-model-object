import React from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';

const Model = ({ model }) => {
  useFrame(() => {
    if (model) {
      model.rotation.y += 0.01;
    }
  });

  return model ? <primitive object={model} /> : null;
};

Model.propTypes = {
  model: PropTypes.shape({}).isRequired
};

export default Model;
