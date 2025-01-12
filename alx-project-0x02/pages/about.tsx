import React from 'react';
import Head from 'next/head';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="flex space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
