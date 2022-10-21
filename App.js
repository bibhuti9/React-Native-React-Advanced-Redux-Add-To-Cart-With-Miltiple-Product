import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {enableMapSet} from 'immer';
enableMapSet();

import {store} from './store';
import TabNavigatos from './src/navigators/TabNavigatos';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigatos />
      </NavigationContainer>
    </Provider>
  );
}
