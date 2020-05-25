import Document, { Head, Main, NextScript } from "next/document";

/**
 * pages/_document
 * ----------------------------------------------------------------------
 * Used to enhance the application's `<html>` and `<body>` tags, it's a
 * server-rendered component.
 *
 * Next.js pages skip the definition of the surrounding document's markup.
 *
 * @since 0.0.1
 */
export default class extends Document {
  render () {
    return (
      <html>
        <Head/>
        <body>
          <div id={"root"}>
            <Main />
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}
