const blogTools = require("eleventy-plugin-blog-tools"); // https://plug11ty.com/plugins/blog-tools/
const readerBar = require("eleventy-plugin-reader-bar"); // https://plug11ty.com/plugins/reader-bar/
const pluginRss = require("@11ty/eleventy-plugin-rss"); // https://plug11ty.com/plugins/eleventy-plugin-rss/ https://www.11ty.dev/docs/plugins/rss/

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/*.css");
	eleventyConfig.addPassthroughCopy("src/*.ttf");
	eleventyConfig.addPassthroughCopy("src/bg");
	eleventyConfig.addPassthroughCopy("src/img");

	// eleventyConfig.addFilter("excerpt", (post) => {
	// 	const content = post.replace(/(<([^>]+)>)/gi, "");
	// 	return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	// });

	eleventyConfig.addPlugin(blogTools);
	eleventyConfig.addPlugin(readerBar);
	eleventyConfig.addPlugin(pluginRss);

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
