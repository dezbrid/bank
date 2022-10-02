import 'react-native';
import React from 'react';

import BarSearch from './index';
import {render} from '@testing-library/react-native';

describe('<BarSearch />', () => {
  it('<BarSearch /> snapshot', () => {
    const tree = render(<BarSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
