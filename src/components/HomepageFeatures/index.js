import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <a href="https://kb.pyx.io/docs/intro" target="_blank" rel="noopener noreferrer">
        Technical Documents
      </a>
    ),    
    Svg: require('@site/static/img/laptop-svgrepo-com.svg').default,
    description: (
      <>
        Pyx community forums are here for additional support of your open source
        implementation of UNTP.
      </>
    ),
  },
    
  {
    title: (
      <a href="https://kb.pyx.io/blog" target="_blank" rel="noopener noreferrer">
        Articles
      </a>
    ),
    Svg: require('@site/static/img/article-svgrepo-com.svg').default,
    description: (
      <>
        UNTP is open-source software supporting supply chain transparency, scalability, and value. 
        These technical documents guide developers and trust architects in implementing UNTP.
      </>
    ),
  },      
  {
    title: (
      <a href="https://forum.pyx.io/" target="_blank" rel="noopener noreferrer">
        Forums
      </a>
    ),
    Svg: require('@site/static/img/broadcast-svgrepo-com.svg').default,
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
