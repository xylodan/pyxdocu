import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Documents',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pyx community forums are here for additional support of your open source
        implementation of UNTP.
      </>
    ),
  },
  {
    title: 'Articles',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        UNTP is open-source software supporting supply chain transparency, scalability, and value. 
        These technical documents guide developers and trust architects in implementing UNTP.
      </>
    ),
  },
      
    {
    title: 'Forums',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pyx community forums are here for additional support of your open source
        implementation of UNTP.
      </>
    ),
  },
];

function Feature({ Svg, image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} className={styles.featureImg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
