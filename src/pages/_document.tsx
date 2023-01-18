import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class VeniceDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
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
          <meta name="msapplication-TileColor" content="#12B886" />
          <meta name="theme-color" content="#12B886" />
          <meta name="description" content="Venice is your financial database. Continuously sync data from over 10,000 financial institutions & multiple data providers in minutes, saving yourself hours of manual input & expensive copy/paste mistakes." />
          <meta property="og:title" content="Venice — Financial data, fast." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://venice.is" />
          <meta property="og:image" content="http://venice-finance.s3.us-west-1.amazonaws.com/og-image.png" />
          <meta property="og:image:secure_url" content="https://venice-finance.s3.us-west-1.amazonaws.com/og-image.png" />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />
          <meta property="og:image:alt" content="Venice is the open-source data infrastructure trusted by data analysts, personal finance geeks, and developers to unify & access their finances in the most powerful & flexible ways." />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:description" content="Venice is your financial database. Continuously sync data from over 10,000 financial institutions & multiple data providers in minutes, saving yourself hours of manual input & expensive copy/paste mistakes." />
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
