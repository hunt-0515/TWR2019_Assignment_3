import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Using Markdown',
    url: '@site/docs/markdown',
    Svg: require('@site/static/img/md.svg').default,
    description: (
      <p>
		Visit the Markdown reference page
      </p>
    ),
  },
  {
    title: 'About this site',
    url: '@site/docs/about',
    Svg: require('@site/static/img/about.svg').default,
    description: (
      <p>
         Learn more about why I created this site.
      </p>
    ),
  },
  {
    title: 'Contact',
    url: '@site/docs/contact',
    Svg: require('@site/static/img/contact.svg').default,
    description: (
      <p>
         Get in touch about this site.
      </p>
    ),
  },
];

function Feature({Svg, title, url, description}) {
  return (
    <div className={clsx('col col--4')}>
<a href={url}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
	{description} 
      </div>
</a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
