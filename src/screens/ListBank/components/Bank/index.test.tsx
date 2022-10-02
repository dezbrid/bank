import 'react-native';
import React from 'react';
import {LISTBANKS} from '@mocks/bankMock';

import Bank from './index';
import {render} from '@testing-library/react-native';

describe('<Bank />', () => {
  it('<Bank /> snapshot', () => {
    const tree = render(<Bank {...LISTBANKS[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
