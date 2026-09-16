import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders the legal entity and copyright year', () => {
    render(<Footer />);
    expect(screen.getByText('© 2026 Datum Verify Ltd. All rights reserved.')).toBeInTheDocument();
  });
});
