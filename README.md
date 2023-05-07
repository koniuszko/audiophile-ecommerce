# Audiophile FrontEndMentor Challenge

This repository contains my solution for the Audiophile FrontEndMentor Challenge. The challenge required the development
of an e-commerce website for an audiophile store. I have used Next.js, TypeScript, Redux, Stripe for payments, and
MongoDB as the database for this project.

Link to the challenge: https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx

## Project Overview

The Audiophile website is designed to provide users with a seamless shopping experience for purchasing high-quality
audio equipment. Users can browse through a wide range of products, view detailed information about each product, add
products to their cart, and complete the checkout process using Stripe for secure payments.

## Technologies Used

- Next.js: Next.js is a React framework that allows for server-side rendering and provides an excellent developer
  experience.
- TypeScript: TypeScript is a statically typed superset of JavaScript, which helps catch errors during development and
  improves code quality.
- Redux: Redux is a predictable state container for JavaScript applications, used here to manage the global state
  for the shopping cart.
- Stripe: Stripe is a popular payment processing platform that ensures secure and reliable online transactions.
- MongoDB: MongoDB is a NoSQL database that provides flexibility and scalability for storing and retrieving data.

## Features

- Product Listing: Users can browse through various audio products and view detailed information about each product.
- Product Filtering: Users can filter products based on categories to find specific types of audio equipment.
- Cart Management: Users can add products to the cart, view the items in the cart, update quantities, and remove items.
- User Authentication: Users can create an account, log in, and securely manage their profile information.
- Checkout Process: Users can proceed to the checkout process, provide shipping details, and complete the payment using
  Stripe.
- Order History: Users can view their order history..

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/koniuszko/audiophile-ecommerce.git
   ```
2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Setup the environment variables:

- Create a `.env.local` file in the root directory of the project and add the following environment variables:
   ```bash
   MONGODB_DB_URI=<your_mongodb_uri>
   STRIPE_PUBLIC_KEY=<your_stripe_publishable_key>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   NEXTAUTH_SECRET=<your_nextauth_url>
   STRIPE_SIGNING_SECRET=<your_stripe_signing_secret>
   ```
    - Change the API_URL in the config.ts file to your Next.js public server URL.

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit http://localhost:3000 to access the Audiophile website.

* Note that in order to make full functional use of stripe webhooks, you must also configure your stripe account and add
  a
  webhook endpoint to your stripe account. You can find more information about this
  here: https://stripe.com/docs/webhooks

## Folder Structure

The project is structured as follows:

- `components`: Contains all the React components used in the project.
- `features`: Contains the Redux slices for managing the global state.
- `interfaces`: Contains the TypeScript interfaces used in the project.
- `layouts`: Contains the layout components used in the project.
- `models` : Contains the Mongoose models used in the project.
- `pages`: Contains the Next.js pages used in the project.
- `public`: Contains the public assets used in the project.
- `store`: Contains the Redux store configuration.
- `styles`: Contains the global styles used in the project.
- `types`: Contains the TypeScript types used in the project.
- `utils`: Contains the utility functions used in the project.

## Screenshots

![screenshot1.png](screenshots%2Fscreenshot1.png)
![screenshot2.png](screenshots%2Fscreenshot2.png)![screenshot3.png](screenshots%2Fscreenshot3.png)![screenshot4.png](screenshots%2Fscreenshot4.png)

## Contribution

If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
Contributions are always welcome!

## Still in Progress

- `ShoppigCart` - Store the shopping cart items in Session Storage, or local storage, so that the items persist even
  after the user closes the browser.
- `AccountPage` - User can update their profile information (address and password). Implement the functionality to
  update the user's address and password in the database. Using address as default shipping address for checkout.
- `AdminDashboard` - Create an admin dashboard to manage the products, orders, and users.

## License

The project is licensed under the MIT License. Feel free to use and modify the code as per your needs.

## Working Demo

You can view a live demo of the Audiophile website here:
https://audiophile-ecommerce-sigma.vercel.app/

To test the checkout process, you can use the following test card details: 4242 4242 4242 4242, any future date, and
any 3-digit CVC code.