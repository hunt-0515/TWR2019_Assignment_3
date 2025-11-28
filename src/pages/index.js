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
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
	<div className="main">
		<h1> Welcome to my Markdown site </h1>
		<p>This site was developed for the course TWR2019 - Developing Technical Documentation at Algonquin College, 2025. It is built using Docusaurus and Markdown, and deployed to GitHub Pages.</p>
		<p>Click the buttons below to find:
			<ul><li>My basic Markdown guide.</li><li>Information about this site</li><li>How you can get in touch</li></ul>
		Or select the items at the top of the page.
		</p>
		<br /><hr /><br />
		<h1> Key Pages </h1>
		<br />
		<HomepageFeatures />
	</div>
      </main>
    </Layout>
  );
}
