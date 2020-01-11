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
                  buildHookId: '5e19e4e10f67a0cdb133c3bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-owrf1ojs',
                  apiId: 'd91ddf9b-e176-4598-93cf-eb65c0590b44'
                },
                {
                  buildHookId: '5e19e4e1cf0486c28fb50aae',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c4u8vfj8',
                  apiId: 'afa57b63-5a03-489d-8d10-a890579aa33e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dat1601/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c4u8vfj8.netlify.com', category: 'apps' }
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
