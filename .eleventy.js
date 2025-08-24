module.exports = function(eleventyConfig) {
    // This tells Eleventy to copy the 'css' and 'js' folders over to the final site.
    // Without this, your site would have no styling or scripts.
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    return {
        // This tells Eleventy where to find things.
        dir: {
            input: ".",          // Look for files in the root folder
            output: "_site",     // Build the final website to a folder called _site
            includes: "_includes" // This is where our layouts live
        }
    };
};