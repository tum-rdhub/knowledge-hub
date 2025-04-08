/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
    tutorialSidebar: [
      {
        type: 'doc',
        id: 'home',
        label: 'Home',
      },
      {
        type: 'category',
        label: 'RDM',
        collapsible: true,
        collapsed: false,
        link: {
            type: 'doc',
            id: 'rdm', 
          },
        items: [
          'link-to-ub-material', 
          'success-failure-stories',
        ],
      },
      {
        type: 'category',
        label: 'Data Analysis & AI',
        collapsible: true,
        collapsed: false,
        link: {
            type: 'doc',
            id: 'data-analysis/data-analysis',
          },
        items: [
          //'data-analysis/index', // docs/data-analysis/index.md
          // 'data-analysis/data-handling',
          {
            type: 'category',
            label: 'Training Materials',
            collapsed: false,
            collapsible: true,
            link: {
              type: 'doc',
              id: 'data-analysis/training-materials/training-materials',
            },
            items: [
              'data-analysis/training-materials/python-for-data-analysis',
              'data-analysis/training-materials/links',
            ],
          },
          'data-analysis/best-practices',
          'data-analysis/links',
          'data-analysis/open-source-tools',
        ],
      },
      {
        type: 'category',
        label: 'Software Development',
        collapsible: true,
        collapsed: false,
        link: {
            type: 'doc',
            id: 'software-development/software-development',
          },
        items: [
          //'data-analysis/index', // docs/data-analysis/index.md
          'software-development/links',
          'software-development/best-practices',
        ],
      },
      {
        type: 'doc',
        id: 'about',
        label: 'About & Contact',
      },
    ],
  };
  