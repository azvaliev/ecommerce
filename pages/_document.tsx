import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:wght@300;400&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
               <div id="nav-portal" />
               <Main />
               <div id="filterbar" />
               <NextScript />
            </body>
         </Html>
      )
   }
}