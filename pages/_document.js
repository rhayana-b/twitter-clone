import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <style>{this.props.styleTags}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}