module.exports = (req, res) => {
  content = res.content();
  if (res.type = 'html') {
  res.add(
    content.replace(
      "</head>",
      '<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></head>'
    )
  );
    }
};
