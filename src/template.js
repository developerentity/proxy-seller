// html skeleton provider
export default function template(
  title,
  initialState = {},
  content = "",
  styles = ""
) {
  let scripts = ""; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="public/client.js"></script>
                `;
  } else {
    scripts = ` <script src="public/bundle.js"> </script> `;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                ${styles}
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}
