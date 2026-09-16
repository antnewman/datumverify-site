import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../src/components/Hero';

describe('Hero', () => {
  it('renders the strapline as a top-level heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'The reference point, before you commit.' }),
    ).toBeInTheDocument();
  });

  it('renders the positioning paragraph in full', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /A datum is the fixed reference point from which every measurement on a site is taken\. We do the same thing for contractor risk\. Quietly, in advance, before you commit\./,
      ),
    ).toBeInTheDocument();
  });

  it('renders a mailto link to hello@datumverify.com', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'hello@datumverify.com' });
    expect(link).toHaveAttribute('href', 'mailto:hello@datumverify.com');
  });
});
