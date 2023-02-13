import Document, {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'

class VeniceDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12B886" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="msapplication-TileColor" content="#12B886" />
          <meta name="theme-color" content="#12B886" />
          <meta
            name="description"
            content="Get a fully hosted Plaid integration in minutes. Let us handle the heavy lifting so you can focus on building the future faster. Your customers will thank you."
          />
          <meta property="og:title" content="Venice — Frictionless financial data for developers." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://venice.is" />
          <meta property="og:image" content="http://venice-finance.s3.us-west-1.amazonaws.com/og-image.png" />
          <meta property="og:image:secure_url" content="https://venice-finance.s3.us-west-1.amazonaws.com/og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          <meta
            property="og:image:alt"
            content="Get a fully hosted Plaid integration in minutes. Let us handle the heavy lifting so you can focus on building the future faster. Your customers will thank you."
          />
          <meta property="og:image:type" content="image/png" />
          <meta
            property="og:description"
            content="Get a fully hosted Plaid integration in minutes. Let us handle the heavy lifting so you can focus on building the future faster. Your customers will thank you."
          />
          <meta property="og:site_name" content="Venice" />

          <Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default VeniceDocument
