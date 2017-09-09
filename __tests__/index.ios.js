import 'react-native';
import React from 'react';
jest.mock('../app/routes', () => '');
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Index />
  );
});
