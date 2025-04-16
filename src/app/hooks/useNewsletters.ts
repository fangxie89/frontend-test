import { fetchNewsletters, fetchUser } from '../services/api';
import { Newsletter, User } from '../types';

export type UserType = 'none' | 'one' | 'multiple';

interface NewslettersData {
  newslettersData: Record<string, Newsletter[]>;
  userData: User;
  hasRight: (newsletter: Newsletter) => boolean;
}

export async function getNewslettersData(userType: UserType): Promise<NewslettersData> {
  // Fetch data
  const [newslettersData, userData] = await Promise.all([
    fetchNewsletters(),
    fetchUser(userType)
  ]);

  // Validate data
  if (!newslettersData || Object.keys(newslettersData).length === 0) {
    throw new Error('No newsletters data available');
  }

  if (!userData || !userData.subscriptions) {
    throw new Error('Invalid user data');
  }

  // Check if user has right to access newsletter
  const hasRight = (newsletter: Newsletter) => {
    if (newsletter.subscriptions.length === 0) return true;
    return userData.subscriptions.includes(newsletter.subscriptions[0] || '');
  };

  return {
    newslettersData,
    userData,
    hasRight
  };
} 