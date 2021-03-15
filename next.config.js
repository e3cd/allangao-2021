module.exports = {
	webpack: (config) => {
	  config.module.rules.push({
		test: /\.md$/,
		loader: 'frontmatter-markdown-loader',

	  },
	  {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
	  );
	  return config;
	},
  };