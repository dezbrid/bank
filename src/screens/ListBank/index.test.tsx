import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import ListBank from './index';
import renderer from 'react-test-renderer';
import {store} from '@redux/store';

describe('<ListBank />', () => {
  it('<ListBank /> snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ListBank />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
