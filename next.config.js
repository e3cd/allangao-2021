const glob = require('glob')

module.exports = {
	webpack: (config) => {
	  config.module.rules.push({
		test: /\.md$/,
		loader: 'frontmatter-markdown-loader',
		// options: {
		// 	name: 
		// }
	  });
	  return config;
	},
  };