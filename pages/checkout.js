import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
      </Head>
      <div className='w-full h-screen flex justify-center'>
        <div className='bg-gradient-to-b from-brown1 to-brown2 self-center p-12'>
          <p className='font-sans'>This is an example project. No purchases can be made.</p>

          <div className='flex justify-center mt-8'>
            <Link href='/'>
              <button className='button mt-8'>Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
