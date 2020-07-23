module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Particle Design Gatsby Theme","short_name":"Gatsby Theme Particle","start_url":"/","background_color":"#ffffff","theme_color":"#5845DB","display":"browser","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"title","store":true,"attributes":{"boost":30}},{"name":"keywords"},{"name":"path","store":true},{"name":"description","store":true},{"name":"content"}],"resolvers":{"SitePage":{}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1152,"linkImagesToOriginal":false,"quality":75,"withWebp":false,"pngCompressionSpeed":4}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"}],"remarkPlugins":[],"defaultLayouts":{"default":"/Users/andrew.hock/particarbo/node_modules/gatsby-theme-carbon/src/templates/Default.js","home":"/Users/andrew.hock/particarbo/node_modules/gatsby-theme-carbon/src/templates/Homepage.js"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0f62fe","display":"browser","icon":"/Users/andrew.hock/particarbo/node_modules/gatsby-theme-carbon/src/images/favicon.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"983518b19848eae6cfeb24d757f74f96"},
    },{
      plugin: require('../node_modules/gatsby-theme-carbon/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
