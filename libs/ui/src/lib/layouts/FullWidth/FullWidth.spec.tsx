import { render } from '@testing-library/react';

import FullWidth from './FullWidth';

describe('FullWidth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FullWidth />);
    expect(baseElement).toBeTruthy();
  });
});
