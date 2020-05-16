module.exports = {
  // set base
  base: '/',

  // add plugins
  plugins: [
    [
      'vuepress-plugin-serve',
      {
        post: 1234,
        staticOptions: {
          dotfiles: 'allow',
        },
        beforeServer(app, server) {
          app.get('/', function(req, res) {
            res.json({ custom: 'response' })
          })
        },
      },
    ],
    ['@vuepress/last-updated']
  ],
  //
  title: 'NIMBLE IDE',
  description: 'Beautiful MacOS native, open-source Swift and multi-language IDE',
  heroImage: '/assets/NimbleIcon.png',
 // theme: 'theme-default',
 // port : 8888,
  themeConfig: {
    // enable links to edit repo page
    repo: 'scade-platform/nimble-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page!',
  	 // displayAllHeaders: true, // Default: false
    nav: [
   { text: 'Use', link: '/users/' },
	 { text: 'Extend', link: '/extend/' },
	 { text: 'Download', link: '/download' },
 	// { text: 'GitHub', link: 'https://www.google.com' } 
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: {
      '/users/': [
        {
          title: 'Using Nimble',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2,   // optional, defaults to 1
          children: [
            ['/users/','Getting Started'],
          	['/users/dailyuse','Daily Use'],
         	  ['/users/changelog','Changelog']
          ]
        } ],

       '/extend/': [
        {
          title: 'Extending Nimble',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
   		children: [
            ['/extend/plugin','Develop a Plugin'],
            ['/extend/coreext','Extend the Core'],
 			      ['/extend/docuext','Extend the Documentation']
          ]
        }]
    }
      //     {
      //   title: 'Installation',   // required
      //   path: '/users',      // optional, which should be a absolute path.
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 1	,    // optional, defaults to 1
      //   children: [
      //     '/users/',
      //   ]
      // },
      // {
      //   title: 'Bla',   // required
      //   path: '/extend',      // optional, which should be a absolute path.
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 1	,    // optional, defaults to 1
      //   children: [
      //     '/extend/'
      //   ]
      // }
 
  } // end theme config
}
