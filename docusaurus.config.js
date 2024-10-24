// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pyx Knowledge Base',  // Your project title
  tagline: 'Technical Documents and Articles',
  favicon: 'img/pyx-favicon.svg',

  // Set the production url of your site here
  url: 'https://kb.pyx.io/',  // Your actual site URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',  // Set the base URL for your docs

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pyx', // Usually your GitHub org/user name.
  projectName: 'pyxdocu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/xylodan/pyxdocu/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/xylodan/pyxdocu/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Pyx-stacked-rgb-rev.jpg',
      metadata: [
        { name: 'keywords', content: 'UNTP, UNCEFACT, UN/CEFACT, Trust Architect, Interoperability, Sustainability, Verifiable Credentials,  Decentralized Identifiers, Sustainable Development Goals, Critical Raw Materials, ESG, SDG, Environment Social Governance, Sustainability, Supply Chain, VC, DID' }, // Keywords for SEO
        { name: 'description', content: 'PYX Knowledge Base for technical documents and articles on UNTP and Trust Architecture' }, // Description for SEO
      ],
      navbar: {
        title: 'PYX Knowledge Base',
        logo: {
          alt: 'PYX Logo',
          src: 'img/pyx-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tech Docs',
          },
          { to: '/blog', label: 'Articles', position: 'right' },
          {
            href: 'https://forum.pyx.io/',  // New external URL link
            label: 'Forums',        // Label for the new link
            position: 'right',             // Position it on the right
          },

          {
            href: 'https://github.com/uncefact/spec-untp',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.pyx.io/',
            label: 'Pyx Global',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tech Docs',
                to: '/docs/intro',
              },
              {
                label: 'Articles',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forums',
                href: 'https://forum.pyx.io/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/pyxglobal/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/uncefact/spec-untp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PYX Knowledge Base.`,
      },
            prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',  // Set the default mode to light
        disableSwitch: true, // Allow the user to switch between dark and light modes
        respectPrefersColorScheme: false, // Don't respect the system preferences, always start in dark mode
      },
    }),

  // Add Google Fonts stylesheets here
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;
