This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
git clone https://github.com/azvaliev/ecommerce
cd ecommerce
```

### Install Dependencies

```bash
npm install 
# or
yarn install
```

## Theming
The theme colors is managed in `styles/abstracts/_colors.scss` with comments to guide.

Change to your liking!

## Products Endpoint

Create a .env.local in the root folder

```bash
touch .env.local
```

Populate this file with an PRODUCTS_ENDPOINT variable set to whatever product endpoint you may desire to use.
You can see how I've shaped the data [here](https://perseus-five.vercel.app/products/data)

```
PRODUCTS_ENDPOINT=https://perseus-five.vercel.app/api/products
```

## Local Development Server

```bash
npm run dev
# or
yarn dev
```

## Favicons

I generated the favicons for this project using [Real Favicon Generator](https://realfavicongenerator.net).
If you wish to use your own, you may replace all the files in `/public/icons/`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
