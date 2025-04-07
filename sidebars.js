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
          'discipline-specific',
        ],
      },
      {
        type: 'category',
        label: 'Data Analysis',
        collapsible: true,
        collapsed: false,
        link: {
            type: 'doc',
            id: 'data-analysis/data-analysis',
          },
        items: [
          //'data-analysis/index', // docs/data-analysis/index.md
          'data-analysis/data-handling',
          'data-analysis/data-visualization',
          'data-analysis/link-to-julien',
        ],
      },
      {
        type: 'category',
        label: 'Additional Links',
        collapsible: true,
        collapsed: true,
        items: [
          'link-to-eda-course',
          'lmu-openscience-links',
        ],
      },
      {
        type: 'doc',
        id: 'insights-from-projects',
        label: 'Insights from Projects',
      },
      {
        type: 'doc',
        id: 'tools-and-templates',
        label: 'Tools & Templates',
      },
      {
        type: 'doc',
        id: 'about',
        label: 'About',
      },
    ],
  };
  