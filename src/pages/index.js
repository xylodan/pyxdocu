import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            UNTP Introduction - 5min ⏱️
          </Link>
        </div>


        {/* Add the SVG to the hero section */}
        <div className={styles.heroImage}>
            <img src="/img/241009pyx-bg.svg" alt="Hero Icon" />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Your Knowledge Base for Technical Documentation`}  // Updated title
      description="The PYX Knowledge Base offers comprehensive technical documentation and articles to support your learning and development."  // Updated description
    >
      {/* Optionally add custom meta tags for social media and SEO */}
      <Head>
        <meta name="keywords" content="PYX, knowledge base, documentation, technical articles, UNTP" />
        <meta property="og:title" content="PYX Knowledge Base - Technical Documentation" />
        <meta property="og:description" content="The PYX Knowledge Base offers comprehensive technical documentation and articles." />
        <meta property="og:image" content="img/Pyx-stacked-rgb-rev.jpg" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>  
  );
}
