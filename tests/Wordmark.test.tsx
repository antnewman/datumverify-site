import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Wordmark from '../src/components/Wordmark';

describe('Wordmark', () => {
  it('exposes an accessible name of "Datum"', () => {
    render(<Wordmark />);
    expect(screen.getByRole('img', { name: 'Datum' })).toBeInTheDocument();
  });
});
