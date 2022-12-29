# MDBmk Bookmarklet

This bookmarklet generates a Markdown link for the current webpage you are viewing and saves it to your clipboard. It can be useful for a workflow to bookmark websites in plain-text, Markdown files.

## Features

- Creates a Markdown link in the following format: `[page title](page URL "tags, add_date:YYYY-MM-DDTHH:MM:SS")`.
- Allows you to specify a list of 'tags' to be added to the Markdown link's title (the section enclosed in double quotes, inside the parentheses). When the Markdown link is rendered as HTML, the tags (including the `add_date` tag) will popup when the mouse cursor hovers over the link.
- Saves the generated markdown link to your clipboard, allowing you to easily paste it into a markdown file or document.

## Installation

1. Copy the JavaScript code in the `mdlink.min.js` file.
2. Create a new bookmark in your browser and give it a name (e.g. "Get Markdown Link").
3. Replace the bookmark's URL with the JavaScript code you copied in step 1.
4. Save the bookmark.

## Usage

To use this bookmarklet, follow these steps:

1. Navigate to the webpage you want to create a Markdown link for.
2. Click the bookmark you just created to run the bookmarklet.
3. The bookmarklet will prompt you to enter a list of tags to be added to the markdown link's title, separated by commas. If you do not want to add any tags, leave this field blank and press OK.
4. The bookmarklet will generate a markdown link for the current webpage and copy it to your clipboard.

## Contributing

Pull requests are welcome.

## License

Copyright (c) 2021-present · [Vasco Saint Basil Andrew Brown II](https://www.twitter.com/vascobrown)  · [MIT License](https://choosealicense.com/licenses/mit/)
