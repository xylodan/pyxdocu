import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '069'),
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
    component: ComponentCreator('/blog/authors/capell', '117'),
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
    component: ComponentCreator('/blog/tags/pyx', '71d'),
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
    component: ComponentCreator('/docs', 'a0b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0db'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4b5'),
            routes: [
              {
                path: '/docs/category/untp-advanced',
                component: ComponentCreator('/docs/category/untp-advanced', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/untp-getting-started',
                component: ComponentCreator('/docs/category/untp-getting-started', '94f'),
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
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/congratulations',
                component: ComponentCreator('/docs/UNTP_Getting_Started/congratulations', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/create-a-blog-post',
                component: ComponentCreator('/docs/UNTP_Getting_Started/create-a-blog-post', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/create-a-document',
                component: ComponentCreator('/docs/UNTP_Getting_Started/create-a-document', 'fad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/create-a-page',
                component: ComponentCreator('/docs/UNTP_Getting_Started/create-a-page', 'd92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/deploy-your-site',
                component: ComponentCreator('/docs/UNTP_Getting_Started/deploy-your-site', 'a68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNTP_Getting_Started/markdown-features',
                component: ComponentCreator('/docs/UNTP_Getting_Started/markdown-features', '71e'),
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
