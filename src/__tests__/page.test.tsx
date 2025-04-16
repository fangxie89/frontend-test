import React from 'react';
import { render, screen } from '@testing-library/react';
import NewslettersPage from '../app/[userType]/page';

// Mock the API services
jest.mock('../app/services/api', () => ({
  fetchNewsletters: jest.fn().mockResolvedValue({
    'Site 1': [
      {
        id: '1',
        title: 'Newsletter 1',
        description: 'Description 1',
        image: 'image1.jpg',
        site: 'Site 1',
        subscriptions: ['RIGHT_1'],
      },
    ],
  }),
  fetchUser: jest.fn().mockResolvedValue({
    id: '1',
    subscriptions: ['RIGHT_1'],
  }),
}));

// Mock the NewsletterCard component
jest.mock('../app/components/NewsletterCard', () => {
  return function MockNewsletterCard({ newsletter }: { newsletter: any }) {
    return <div data-testid="newsletter-card">{newsletter.title}</div>;
  };
});

describe('NewslettersPage', () => {
  it('renders page title and description', async () => {
    render(await NewslettersPage({ params: { userType: 'one' } }));

    expect(screen.getByText('NEWSLETTERS')).toBeInTheDocument();
    expect(screen.getByText(/Dans cette page/)).toBeInTheDocument();
  });

  it('renders newsletter sections with site titles', async () => {
    render(await NewslettersPage({ params: { userType: 'one' } }));

    expect(screen.getByText('Site 1')).toBeInTheDocument();
    expect(screen.getByText('Newsletter 1')).toBeInTheDocument();
  });

  it('renders newsletter cards for each newsletter', async () => {
    render(await NewslettersPage({ params: { userType: 'one' } }));

    const newsletterCards = screen.getAllByTestId('newsletter-card');
    expect(newsletterCards).toHaveLength(1);
  });
}); 