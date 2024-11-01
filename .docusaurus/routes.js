import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c89'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/capell',
    component: ComponentCreator('/blog/authors/capell', 'ca5'),
    exact: true
  },
  {
    path: '/blog/authors/gough',
    component: ComponentCreator('/blog/authors/gough', '682'),
    exact: true
  },
  {
    path: '/blog/authors/zeus',
    component: ComponentCreator('/blog/authors/zeus', 'b9d'),
    exact: true
  },
  {
    path: '/blog/Steve Capell Presents UN/CEFACT Recommendation 49',
    component: ComponentCreator('/blog/Steve Capell Presents UN/CEFACT Recommendation 49', '8a8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/extensions',
    component: ComponentCreator('/blog/tags/extensions', '4fc'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '6c1'),
    exact: true
  },
  {
    path: '/blog/tags/pyx',
    component: ComponentCreator('/blog/tags/pyx', 'f0b'),
    exact: true
  },
  {
    path: '/blog/tags/recommenation-49',
    component: ComponentCreator('/blog/tags/recommenation-49', '50f'),
    exact: true
  },
  {
    path: '/blog/tags/uncefact',
    component: ComponentCreator('/blog/tags/uncefact', '277'),
    exact: true
  },
  {
    path: '/blog/tags/untp',
    component: ComponentCreator('/blog/tags/untp', '7c1'),
    exact: true
  },
  {
    path: '/blog/UNTP 2024 Session 21 Achievements',
    component: ComponentCreator('/blog/UNTP 2024 Session 21 Achievements', 'c04'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4e6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b1c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f0e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '35e'),
            routes: [
              {
                path: '/docs/category/developers',
                component: ComponentCreator('/docs/category/developers', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/trust-architecture',
                component: ComponentCreator('/docs/category/trust-architecture', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Development/manage-docs-versions',
                component: ComponentCreator('/docs/Development/manage-docs-versions', '24e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/TA-intro',
                component: ComponentCreator('/docs/Trust_Architecture/TA-intro', '32a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
