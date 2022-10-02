import 'react-native';
import React from 'react';
import {LISTBANKS} from '@mocks/bankMock';

import Bank from './index';
import renderer from 'react-test-renderer';

describe('<Bank />', () => {
  it('<Bank /> snapshot', () => {
    const tree = renderer.create(<Bank {...LISTBANKS[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
