import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'bankTypeScript',
    })
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!
}

export default Reactotron;
