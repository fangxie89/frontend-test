import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsletterCard from '../app/components/NewsletterCard';

// Mock next/image since it's not available in test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('NewsletterCard', () => {
  const mockNewsletter = {
    id: '1',
    title: 'Test Newsletter',
    description: 'Test Description',
    image: 'test-image.jpg',
    site: 'TEST',
    subscriptions: ['RIGHT_1'],
  };

  it('renders newsletter information correctly', () => {
    render(<NewsletterCard newsletter={mockNewsletter} hasAccess={true} />);
    
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Newsletter');
  });

  it('shows "S\'inscrire" button when user has access', () => {
    render(<NewsletterCard newsletter={mockNewsletter} hasAccess={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'inscrire");
    expect(button).toHaveClass('btn-primary');
  });

  it('shows "S\'abonner" button when user does not have access', () => {
    render(<NewsletterCard newsletter={mockNewsletter} hasAccess={false} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent("S'abonner");
    expect(button).toHaveClass('btn-secondary');
  });
}); 