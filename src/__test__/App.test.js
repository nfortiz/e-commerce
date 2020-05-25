import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  test('Test rendering', () => {
    const { getByText } = render(<App />);
    expect(getByText('E-commerce')).toBeInTheDocument();
  });
});
