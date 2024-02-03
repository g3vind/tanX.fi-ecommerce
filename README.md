# Ecommerce (React) Coding Assessment

**Live Preview:** [tanX.fi Ecommerce](https://tanxfi-ecommerce.netlify.app/)

**JSON Server Deployed Data:** [tanX.fi Data](https://tanxfi-data.onrender.com/)

## Technologies and Packages Used

1. **Redux Toolkit:** Efficient state management for features like adding to cart and favorites.
2. **Auth0:** Secure authentication for user login and signup.
3. **TailwindCSS:** Sleek and responsive CSS framework.
4. **React Router DOM:** Client-side routing for a smooth user experience.
5. **React Icons:** Integration for a wide range of icons.

## Features

1. **Cart Management:** Add to Cart functionality with options for clearing the cart and adjusting item quantities.
2. **Favorites:** Ability to add and remove items from the Favorites page.
3. **Authentication:** User-friendly login and signup features using the Auth0 library.
4. **Shimmer UI:** Enhancing the user experience with shimmering loading effects.
5. **JSON Server Deployment:** Deployed the JSON Server on Render for efficient data handling.

## Screenshots

### 1. Home Page (Featuring all available products)

![Home Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/0a139edd-047c-4444-82c6-ddfc25b3b5f2)

### 2. Product Detail Page (Providing detailed information for each product)

![Product Detail Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/5e07a846-2fc6-4fbe-b771-9e5424f64f7d)

### 3. Login Screen

![Login Screen](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/30aa1cec-ce67-4162-9607-5d60a85fea0f)

### 4. Register Screen

![Register Screen](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/8c6887e8-e5a3-48c2-9af1-86f5580c6f0a)

### 5. Favorites Page (Containing all the user-selected favorite items)

![Favorites Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/0736d048-4fed-4196-82d9-14a411ea5566)

### 6. Cart Page (Displaying all products added to the user's cart)

![Cart Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/a4d3044f-5363-4d47-93d0-6908548f5bbe)

### 7. Empty Cart Page (Displayed when the user has no items in the cart)

![Empty Cart Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/19a3868b-c543-448e-94c9-977d64250b46)

### 8. Empty Favorites Page (Shown when the user has no favorite items)

![Empty Favorites Page](https://github.com/g3vind/tanX.fi-ecommerce/assets/70854788/7379c2b8-2f1c-4637-8ce2-1561550f1e40)

## Possible Improvements 

1. **Lazy Loading:** Enhance performance with lazy loading of assets.
2. **CSS Animations:** Add engaging animations for a more dynamic interface.
3. **Toastifiers:** Implement toast notifications for a better user feedback experience.

## If there was more time then

1. **Proper Login/Signup:** Develop a custom login/signup system without relying on external APIs like Auth0.
2. **User Authorization and Protected Routes:** Implement proper user authorization and protect sensitive routes.
3. **Using a database instead of JSON Server** As json server are slow so using a database like mongodb or postgresql would've been good.

## Project Structure

- `src`: Main source code directory.
  - `components`: Reusable React components.
  - `features`: Redux store configuration and slices.
  - `pages`: Different Pages.

## Development Setup
1. **Clone the repository.**
   ```bash
   git clone https://github.com/g3vind/tanX.fi-ecommerce.git
   ```

2. **Install dependencies.**
   ```bash
   cd tanX.fi-ecommerce
   npm install
   ```

3. **Run the development server.**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000).**
