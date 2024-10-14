import clsx from 'clsx';
import styles from './styles.module.css';
import IconTech from '@site/static/img/icon-tech.svg';
import IconArticles from '@site/static/img/icon-articles.svg';
import IconForums from '@site/static/img/icon-forums.svg';

const FeatureList = [
  {
    title: (
      <a href="https://kb.pyx.io/docs/intro" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <div className={styles.iconAndText}>
          <IconTech className={styles.icon} alt="Technical Documents Icon" />
          <div className={styles.textContainer}>
            <span className={styles.firstWord}>Technical</span>
            <span className={styles.secondWord}>Documents</span>
          </div>
        </div>
      </a>
    ),
    description: (
      <p className={styles.description}>
        Pyx community forums are here for additional support of your open-source implementation of UNTP.
      </p>
    ),
  },
  {
    title: (
      <a href="https://kb.pyx.io/blog" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <IconArticles className={styles.icon} alt="Articles Icon" />
        Articles
      </a>
    ),
    description: (
      <p className={styles.description}>
        UNTP is open-source software supporting supply chain transparency, scalability, and value.
      </p>
    ),
  },
  {
    title: (
      <a href="https://forum.pyx.io/" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <IconForums className={styles.icon} alt="Forums Icon" />
        Forums
      </a>
    ),
    description: (
      <p className={styles.description}>
        Pyx community forums are here for additional support of your open-source implementation of UNTP.
      </p>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.card)}> {/* Added the card class */}
      <div className={styles.cardContent}> {/* Card content styling */}
        <div className="text--center">
          {Svg && <Svg className={styles.featureSvg} role="img" />}
        </div>
        <div className="text--center padding-horiz--md">
          {title}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
