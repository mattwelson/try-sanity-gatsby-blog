export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea74e0cd3d2f5497e49484f',
                  title: 'Sanity Studio',
                  name: 'try-sanity-gatsby-blog-studio',
                  apiId: '31370fca-0ee2-4f0e-99c5-f016bad2aa08'
                },
                {
                  buildHookId: '5ea74e0c2d64de6dd63b888f',
                  title: 'Blog Website',
                  name: 'try-sanity-gatsby-blog',
                  apiId: '58ab1a01-a399-4c5c-9d18-c7dee34c65e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattwelson/try-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://try-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
