/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
import {store} from './src/redux/configStore';

const App = () => {
  return <StackNavigation />;
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
