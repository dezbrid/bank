import 'react-native';
import React from 'react';
import {LISTBANKS} from '@mocks/bankMock';

import Bank from './index';
import {render, RenderResult} from '@testing-library/react-native';
let tree: RenderResult;
describe('<Bank />', () => {
  beforeEach(() => {
    tree = render(<Bank {...LISTBANKS[0]} />);
  });
  it('<Bank /> snapshot', () => {
    tree.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should exist title', () => {
    expect(tree.getByText(LISTBANKS[0].bankName)).toBeDefined();
  });
});
