
# C L I C O N  - eCommerce Platform

CLICON is an eCommerce platform similar to Amazon, allowing users to browse products, add them to their cart, and manage their orders. The platform includes user authentication, cart management, and product browsing by category.

## Features

- **Browse Products**: Explore a wide range of products across different categories.
- **Add to Cart**: Users can add products to their cart, update quantities, and remove items.
- **User Authentication**: Register and login to save your cart and track your orders.
- **Category Filtering**: Browse products based on specific categories.
- **Cart Persistence**: Users' carts are saved upon login, allowing them to return to their session.


## Screenshots

 <table align="center">
  <tr>
    <td><img src="https://github.com/user-attachments/assets/cb834c16-b3b9-4d69-9e36-4ab60aee587f" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/14f5b6cd-977f-4421-a871-94c292fc55af" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e3f0f689-a485-4a8c-96fe-709336ccc16d" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/6d6e2848-5836-4d24-87d1-9bc51f6ee58d" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/3da9a8d4-066d-460c-8e94-0dfca146c01d" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/95c8cdf4-4798-435c-b475-1b29e39f356b" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/57204a31-d821-49df-81b6-0950aaebf1e9" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/d116e2da-4e7b-4551-ba17-9f40aadb16d1" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="https://github.com/user-attachments/assets/892fd877-b1bd-42f2-bfbc-50569696a07a" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img width='320px' src="https://github.com/user-attachments/assets/873c7db7-bd56-430a-a035-ec3e589019d2" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
</table>


## File Structure

```
└── 📁src
    └── 📁assets
        └── 📁images
            └── error.png
            └── Logo.png
    └── 📁components
        └── 📁bars
            └── DiscountBar.jsx
            └── Footer.jsx
            └── Header.jsx
            └── SubscribeBar.jsx
        └── 📁main
            └── HomeMain.jsx
        └── 📁products
            └── Categories.jsx
            └── Products.jsx
        └── Cart.jsx
        └── index.js
    └── 📁pages
        └── 📁ErrorPage
            └── ErrorPage.jsx
        └── 📁HomePage
            └── HomePage.jsx
        └── 📁ShopPage
            └── ShopPage.jsx
        └── 📁SignPage
            └── SignIn.jsx
            └── SignUp.jsx
        └── index.js
    └── 📁router
        └── index.jsx
        └── ProtectedRoute.jsx
    └── 📁store
        └── 📁slices
            └── cartSlice.js
            └── productsSlice.js
        └── store.js
    └── 📁styles
        └── 📁fonts
            └── _fonts.css
        └── global.css
    └── 📁utils
        └── icons.util.jsx
    └── App.jsx
    └── main.jsx
```
  
## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **State Management**: Redux
- **Routing**: React Router
- **API**: DummyJSON API for fetching products and handling basic user data
- **Build Tool**: Vite for fast and optimized development

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/CLICON.git
   ```

2. Navigate to the project folder:

   ```bash
   cd CLICON
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

  The project will be running.

## Usage

- Browse products and categories.
- Add products to your cart.
- Login or register to save your cart and proceed with checkout.
- - (you can use this account to login username:michaelw password:michaelwpass)

## API

We used [DummyJSON API](https://dummyjson.com/) to simulate product and user data.

## Libraries

- **React**: For building the user interface.
- **Vite**: As the build tool for fast and optimized bundling.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Redux**: For global state management (managing cart, user authentication, etc.).
- **React Router**: For handling navigation and routing in the app.
