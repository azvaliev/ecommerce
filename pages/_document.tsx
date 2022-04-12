import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:wght@300;400&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
               {/* Icons Generated with https://realfavicongenerator.net */}
               <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
               <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
               <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
               <link rel="manifest" href="/icons/site.webmanifest"/>
               <link rel="shortcut icon" href="/icons/favicon.ico"/>
               <meta name="apple-mobile-web-app-title" content="Perseus"/>
               <meta name="application-name" content="Perseus"/>
               <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png"/>
               <meta name="msapplication-config" content="/icons/browserconfig.xml"></meta>
            </Head>
            <body>
               <div id="data-portal" />
               <div id="nav-portal" />
               <Main />
               <div id="filterbar" />
               <NextScript />
            </body>
         </Html>
      )
   }
}