import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', 'e9e'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '5ff'),
    exact: true
  },
  {
    path: '/docs/blog/authors',
    component: ComponentCreator('/docs/blog/authors', '164'),
    exact: true
  },
  {
    path: '/docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docs/blog/authors/all-sebastien-lorber-articles', '5f1'),
    exact: true
  },
  {
    path: '/docs/blog/authors/yangshun',
    component: ComponentCreator('/docs/blog/authors/yangshun', 'f7a'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '451'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', '135'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', '369'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', 'a37'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '987'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', 'a94'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '941'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', 'ae4'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', 'f3f'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'c78'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', 'ff9'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', 'b97'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', 'a62'),
            routes: [
              {
                path: '/docs/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/docs/category/tutorial---basics', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/docs/category/tutorial---extras', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', 'd68'),
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
    path: '/docs/',
    component: ComponentCreator('/docs/', '6fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
