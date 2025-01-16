import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('test App component', () => {
  it('should find text', () => {
    const {getByText} = render(<App />);
    expect(getByText('Hello BNP Paris Bas :)')).toBeTruthy();
  });
});
