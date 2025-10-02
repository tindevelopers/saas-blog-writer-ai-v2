'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from './Container';

const features = [
  {
    title: 'AI-Powered Writing',
    description:
      'Generate high-quality blog posts with our advanced AI. Just provide a topic, and watch as our AI creates engaging content tailored to your audience.',
    image: '/images/screenshots/payroll.png',
  },
  {
    title: 'SEO Optimization',
    description:
      'Built-in SEO tools ensure your content ranks higher. Get keyword suggestions, meta descriptions, and readability scores in real-time.',
    image: '/images/screenshots/expenses.png',
  },
  {
    title: 'Multi-Platform Publishing',
    description:
      'Publish directly to WordPress, Medium, Ghost, and more. One-click publishing saves you time and streamlines your workflow.',
    image: '/images/screenshots/vat-returns.png',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Track performance with detailed analytics. See which posts perform best and get insights to improve your content strategy.',
    image: '/images/screenshots/reporting.png',
  },
];

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal');

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for creating amazing content"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src="/images/background-features.jpg"
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to create amazing content.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            From ideation to publication, our platform provides all the tools
            you need to create, optimize, and publish exceptional blog content.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }: { selectedIndex: number }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map(feature => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-180 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        width={1085}
                        height={762}
                        priority
                        unoptimized
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
