/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Les Copains',
  tagline: 'En cours de réalisation',
  url: 'https://les-copains.lcaminale.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'les-copains', // Usually your GitHub org/user name.
  projectName: 'dive-into', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '53af7952396e5be48d55cbb3785cf3b8',
      indexName: 'dive-into',
      appId: 'L13U009O8B',
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    gtag: {
      trackingID: 'G-XN0PYBT2T9',
    },
    navbar: {
      title: 'Les Copains',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Posts',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://gitlab.com/les-copains',
          label: 'Gitlab',
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
              label: 'dolt',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Gitlab',
              href: 'https://gitlab.com/les-copains/dive-into',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/les-copains/dive-into/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/les-copains/dive-into',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
