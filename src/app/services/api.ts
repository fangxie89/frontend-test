import { NEWSLETTER_ITEMS } from '../../mocks/newsletters';
import { 
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION
} from '../../mocks/user';
import { User, NewslettersBySite } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNewsletters = async (): Promise<NewslettersBySite> => {
  await delay(500); // Simulate network delay
  
  // Group newsletters by site
  return NEWSLETTER_ITEMS.reduce((acc: NewslettersBySite, newsletter) => {
    if (!acc[newsletter.site]) {
      acc[newsletter.site] = [];
    }
    acc[newsletter.site].push(newsletter);
    return acc;
  }, {});
};

export const fetchUser = async (type: 'none' | 'one' | 'multiple'): Promise<User> => {
  await delay(300); // Simulate network delay
  
  switch (type) {
    case 'none':
      return USER_WITHOUT_SUBSCRIPTION;
    case 'one':
      return USER_WITH_ONE_SUBSCRIPTION;
    case 'multiple':
      return USER_WITH_MULTIPLE_SUBSCRIPTION;
    default:
      return USER_WITHOUT_SUBSCRIPTION;
  }
}; 