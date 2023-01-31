import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react';
import CTA from '../components/cta';
import Features from '../components/features';
import Pricing from '../components/pricing';

export default function Home() {
  const router = useRouter();

  const [billingType, setBillingType] = useState('monthly');

  return (
    <div>
      <Head>
        <title>Cloudnigh</title>
        <meta name="description" content="Cloudnigh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="text-4xl font-bold text-gray-500 tracking-tight sm:text-center sm:text-7xl">
              Leave management system <span className='text-blue-200'>in the cloud</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-center">
              Access your leaves anywhere, anytime. We are completely free for a limited time. Try us now!
            </p>
            <div className="mt-8 flex sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-full bg-blue-200 px-4 py-1.5 text-base font-semibold text-white hover:bg-gray-400 hover:ring-indigo-700"
              >
                Try free
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border-b-2">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="/images/app-preview.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <Features />
          <Pricing billingType={billingType} setBillingType={setBillingType} />
          <CTA />
        </div>
      </main>
    </div>
  )
}
