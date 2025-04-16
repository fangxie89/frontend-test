import { notFound } from 'next/navigation';
import NewsletterCard from '../components/NewsletterCard';
import { getNewslettersData, UserType } from '../hooks/useNewsletters';

interface PageProps {
  params: {
    userType: UserType;
  };
}

export default async function NewslettersPage({ params }: PageProps) {
  const { userType } = params;
  
  // Validate userType
  if (!['none', 'one', 'multiple'].includes(userType)) {
    notFound();
  }

  try {
    const { newslettersData, hasRight } = await getNewslettersData(userType);

    return (
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-gray-100 mb-8 py-8 px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">NEWSLETTERS</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Dans cette page, vous retrouvez l&apos;ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d&apos;intérêt et gérer plus facilement l&apos;inscription à vos newsletters.
          </p>
        </div>
        {Object.entries(newslettersData).map(([site, siteNewsletters]) => (
          <section key={site} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-2 border-b-2 border-gray-200">
              {site}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {siteNewsletters.map((newsletter) => (
                <NewsletterCard
                  key={newsletter.id}
                  newsletter={newsletter}
                  hasAccess={hasRight(newsletter)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error loading newsletters:', error);
    notFound();
  }
} 