import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        {/* Add your content here */}
      </main>
    </>
  );
};

export default AboutPage;
