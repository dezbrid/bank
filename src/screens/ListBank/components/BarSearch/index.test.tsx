import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import {store} from '@redux/store';

import BarSearch from './index';

describe('<BarSearch />', () => {
  it('<BarSearch /> snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <BarSearch />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
