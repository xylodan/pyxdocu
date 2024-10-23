import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '37a'),
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
    component: ComponentCreator('/blog/authors/capell', '53b'),
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
    component: ComponentCreator('/blog/Steve Capell Presents UN/CEFACT Recommendation 49', 'ea2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '6c1'),
    exact: true
  },
  {
    path: '/blog/tags/pyx',
    component: ComponentCreator('/blog/tags/pyx', '96d'),
    exact: true
  },
  {
    path: '/blog/tags/recommendation-49',
    component: ComponentCreator('/blog/tags/recommendation-49', '82b'),
    exact: true
  },
  {
    path: '/blog/tags/un-cefact',
    component: ComponentCreator('/blog/tags/un-cefact', '070'),
    exact: true
  },
  {
    path: '/blog/tags/untp',
    component: ComponentCreator('/blog/tags/untp', 'b1c'),
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
    component: ComponentCreator('/docs', 'c59'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2d2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '32c'),
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
                path: '/docs/Development/translate-your-site',
                component: ComponentCreator('/docs/Development/translate-your-site', 'a4a'),
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
                path: '/docs/Trust_Architecture/congratulations',
                component: ComponentCreator('/docs/Trust_Architecture/congratulations', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/create-a-blog-post',
                component: ComponentCreator('/docs/Trust_Architecture/create-a-blog-post', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/create-a-document',
                component: ComponentCreator('/docs/Trust_Architecture/create-a-document', '40a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/create-a-page',
                component: ComponentCreator('/docs/Trust_Architecture/create-a-page', '91d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/deploy-your-site',
                component: ComponentCreator('/docs/Trust_Architecture/deploy-your-site', '455'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trust_Architecture/markdown-features',
                component: ComponentCreator('/docs/Trust_Architecture/markdown-features', 'eb7'),
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
