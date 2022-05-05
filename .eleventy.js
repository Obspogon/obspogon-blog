const blogTools = require("eleventy-plugin-blog-tools"); // https://plug11ty.com/plugins/blog-tools/
const readerBar = require("eleventy-plugin-reader-bar"); // https://plug11ty.com/plugins/reader-bar/

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src");

	eleventyConfig.addFilter("reverse", (arr) => {
		arr.reverse();
	});

	eleventyConfig.addPlugin(blogTools);
	eleventyConfig.addPlugin(readerBar);

	eleventyConfig.setBrowserSyncConfig({
		open: true,
	});

	return {
		// When a passthrough file is modified, rebuild the pages:
		passthroughFileCopy: true,
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
	};
};
