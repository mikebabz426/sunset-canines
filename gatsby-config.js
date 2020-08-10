// Plugin Configuration File
module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/images/`,
			},
		},
		"gatsby-plugin-sass",
	],
};
