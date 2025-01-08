import Head from 'next/head';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <p className="text-lg">Welcome to ALX Project 2! <br/> Explore and enjoy building.</p>
      </main>
    </>
  );
};

export default Home;
