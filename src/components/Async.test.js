import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('render posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ title: 'opa', id: 'p1' }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole(
      'listitem',
      {},
      { timeout: 3000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
