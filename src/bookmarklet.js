javascript:
void (function () {
  let tags = "";
  tags = prompt(
    "Enter 'tags' to be added to the Markdown link's 'title', seperated by commas.",
  );
  if (tags != "") {
    tags += ", ";
  }

  title = document.title;
  url = window.location.href;

  window.createMarkdownLink = function (title, url, tags) {
    addDate = getAddDate();
    markdown_link = `[${title}](${url} \"${tags}add_date:${addDate}\")`;
    return markdown_link;
  };

  window.getAddDate = function () {
    let date = new Date();
    const timeZoneOffsetInHours = date.getTimezoneOffset() / 60;
    date.setHours(date.getHours() - timeZoneOffsetInHours);
    const dateAsString = date.toISOString().substring(0, 19);
    return dateAsString;
  };

  markdownLink = createMarkdownLink(title, url, tags);
  navigator.clipboard.writeText(markdownLink);
})();
