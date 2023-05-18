import React, { useState } from 'react';
import axios from 'axios';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Model from './Model';

const App = () => {
  const [model, setModel] = useState(null);

  const getThreeModelDataFromData = data => {
    // We've got to dig down into the data to find the object
    // Max nesting level is 10 to prevent infinite loops
    let nestingDownLimitLevel = 10;
    let modelData = data;
    while (nestingDownLimitLevel > 0) {
      modelData = modelData[Object.keys(modelData)[0]];
      nestingDownLimitLevel -= 1;
      if (Object.keys(modelData).includes('geometries')) {
        break;
      }
    }
    return modelData;
  };

  const renderThreeModel = modelData => {
    try {
      const loader = new THREE.ObjectLoader();
      const threeModel = loader.parse(modelData);
      return threeModel;
    } catch (error) {
      console.log(error);
    }
    return modelData;
  };

  const graphQLFetcher = async graphQLParams => {
    if (!graphQLParams) {
      return;
    }
    const response = await axios({
      url: process.env.REACT_APP_GRAPHQL_API_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'X-Hasura-Access-Key': process.env.REACT_APP_GRAPH_API_SECRET_KEY
      },
      data: JSON.stringify(graphQLParams)
    });

    const { data } = response.data;
    // eslint-disable-next-line no-underscore-dangle
    if (!data.__schema) {
      console.log(data);
      // First we've got to dig down into the data to find the Three object data
      const threeModelData = getThreeModelDataFromData(data);
      // Call to render object's model
      const threeModel = renderThreeModel(threeModelData);
      if (threeModel) setModel(threeModel);
    }
  };

  return (
    <div className="model-viewer" style={{ height: '100vh' }}>
      {model ? (
          null
      ) : (
        <GraphiQL fetcher={graphQLFetcher} />
      )}
      <Canvas>{model && <Model model={model} />}</Canvas>
    </div>
  );
};

export default App;
