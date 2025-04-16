export interface Newsletter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: string[];
}

export interface NewslettersBySite {
  [key: string]: Newsletter[];
}
