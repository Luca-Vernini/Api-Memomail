// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MemoMail API Docs',
  tagline: 'Documentazione delle API di MemoMail',
  favicon: 'img/favicon.ico',

  // URL e baseUrl aggiornati per GitHub Pages
  url: 'https://Luca-Vernini.github.io',
  baseUrl: '/Api-Memomail/',

  // Configurazione GitHub Pages
  organizationName: 'Luca-Vernini',
  projectName: 'Api-Memomail',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    localeConfigs: {
      en: { label: 'English' },
      it: { label: 'Italiano' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MemoMail API Docs',
      logo: {
        alt: 'MemoMail Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Luca-Vernini/Api-Memomail',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentazione',
          items: [
            {
              label: 'Introduzione',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Luca-Vernini/Api-Memomail',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MemoMail. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
