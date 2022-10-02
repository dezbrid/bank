import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import ListBank from './index';
import {render} from '@testing-library/react-native';
import {store} from '@redux/store';

describe('<ListBank />', () => {
  it('<ListBank /> snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <ListBank />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
