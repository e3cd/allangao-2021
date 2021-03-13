export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'e3cd/allangao-2021',
        branch: 'develop',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [{
            name: 'pages',
            label: 'Page',
            create: true,
            files: [{
                label: 'Home',
                name: 'home',
                file: 'content/pages/home.md',
                fields: [{
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
            }, ],
        },
        {
            name: 'metadata',
            label: 'Metadata',
            files: [{
                label: 'Index',
                name: 'index',
                file: 'content/metadata/index.md',
                fields: [{
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                }, 				],
            }, ],
        },
        {
            name: "Home Page Cards",
            label: "Home Page Cards",
            label_singular: "Card",
            folder: 'content/cards',
            create: true,
            slug: "{{slug}}",
            extension: 'md',
            format: 'yaml-frontmatter',
            fields: [{
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                    required: true,
                },
				{
					label: 'Use Seperator?',
					name: 'seperator',
					widget: 'boolean',
					default: false
				},
                {
                    label: "Card List Items",
                    name: "Cards",
                    label_singular: "Card List",
                    widget: 'list',
                    types: [
						{
                            label: "Title and Link",
                            name: "title_and_link",
                            widget: "string",
                            required: true,
                            minimize_collapsed: true,
                            fields: [
								{
                                label: 'Title',
                                name: 'title',
                                widget: 'string',
								required: true,
                            	},
								{
									label: 'Link Url',
									name: 'link_url',
									widget: 'string',
									required: true,
								},

								{
									label: 'Icon',
									name: 'Icon',
									widget: 'list',
									required: false,
									fields: [
										{
											label: "Icon",
											name: 'icon',
											widget: "image",
											media_library: {
												config: {
													multiple: false
												}
											},
										},
										{
											label: 'Link Url',
											name: 'link_url',
											widget: "string",										
										}
									]
								},
								{
									label: 'Use Seperator?',
									name: 'seperator',
									widget: 'boolean',
									default: false
								}
							]
                        },
                     
                        {
                            label: "Description",
                            name: "description",
                            widget: "string",
                            required: true,
                            minimize_collapsed: true,
                            fields: [
								{
                                label: 'Description',
                                name: 'description',
                                widget: 'text'
                            },
							{
								label: 'Use Seperator?',
								name: 'seperator',
								widget: 'boolean',
								default: false
							}
						]
                        },
                        {
                            label: "Contact Links",
                            name: "contact_links",
                            widget: "list",
                            label_singular: "Contact link",
                            fields: [
								{
                                    label: "Links",
                                    name: "links",
									label_singular: "link",
                                    widget: "list",
                                    types: [
										{
                                            label: "Link Item",
                                            name: "link_item",
                                            widget: "string",
                                            required: true,
                                            fields: [{
                                                    label: "Name",
                                                    name: "name",
                                                    widget: "string",
                                                },
                                                {
                                                    label: "Icon",
                                                    name: "icon",
                                                    widget: "image",
                                                    required: true,
                                                    field: {
                                                        label: "Icon",
                                                        name: "icon",
                                                        widget: "image",
                                                        media_library: {
                                                            config: {
                                                                multiple: false
                                                            }
                                                        },
                                                    }
                                                },
												{
                                                    label: "Link Url",
                                                    name: "link_url",
                                                    widget: "string",
                                                    required: true,
                                                    field: {
                                                        label: "Link Url",
                                                        name: "link_url",
                                                        widget: "string",
                                                       
                                                    }
                                                },
                                            ]
                                        },
                                    ]
                                },
								{
									label: 'Use Seperator?',
									name: 'seperator',
									widget: 'boolean',
									default: false
								}
                            ],
                        },
                    ]
                }
            ]
        }
    ],
};