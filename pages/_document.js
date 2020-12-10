import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return(
            <Html>
                <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link rel="shortcut icon" href="https://res.cloudinary.com/dgtemyvsk/image/upload/v1607231832/logo_lottery_app_2_rnoo82.png" type="image/x-icon" />
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                </Head>

                <body className="min-h-full relative">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;