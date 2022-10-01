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
import {store} from './src/redux/config/store';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text style={[styles.sectionDescription]}>hi</Text>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
