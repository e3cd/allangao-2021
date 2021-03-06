export default {
	cms_manual_init: true,
	backend: {
	  name: 'github',
	  repo: 'e3cd/allangao-2021',
	  branch: 'develop',
	},
	media_folder: 'public/img',
	public_folder: 'img',
	collections: [
	  {
		name: 'pages',
		label: 'Pages',
		files: [
		  {
			label: 'Home',
			name: 'home',
			file: 'content/pages/home.md',
			fields: [
			  {
				label: 'Hero Title',
				name: 'hero_title',
				widget: 'string',
			  },
			  {
				label: 'Hero Description',
				name: 'hero_description',
				widget: 'markdown',
			  },
			],
		  },
		],
	  },
	  {
		name: 'metadata',
		label: 'Metadata',
		files: [
		  {
			label: 'Index',
			name: 'index',
			file: 'content/metadata/index.md',
			fields: [
			  {
				label: 'Title',
				name: 'title',
				widget: 'string',
			  },
			],
		  },
		],
	  },
	],
  };