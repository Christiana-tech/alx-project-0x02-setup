import Head from 'next/head';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-4xl">
          <Card
            title="Card 1"
            content="This is the content of the first card."
          />
          <Card
            title="Card 2"
            content="Here is some more content for the second card."
          />
          <Card
            title="Card 3"
            content="Finally, this is the content for the third card."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
