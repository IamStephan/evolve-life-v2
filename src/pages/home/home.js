import React from 'react';

import { Page } from '../../components/page/page';
import Divider from '../../components/divider/divider';

// Sections
import Hero from '../../sections/hero/hero';
import Blog from '../../sections/blogOverview/blogOverview';
import Benefits from '../../sections/benefits/benefits';
import Features from '../../sections/features/features';
import CTA from '../../sections/cta/cta';

export default function Home() {
  return (
    <Page
      title='Home | Evolve Life'
    >
      <Hero />
      <Divider />
      <Blog />
      <Divider />
      <Benefits />
      <Divider />
      <Features />
      <Divider />
      <CTA />
    </Page>
  );
}
