import List from '../List.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('should render correctly', () => {
    const progressBarTree = renderer.create(<List />).toJSON();
    expect(progressBarTree).toMatchSnapshot();
  });
});
