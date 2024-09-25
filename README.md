
# CLICON - eCommerce Platform

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
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img width='320px' src="" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
</table>


## File Structure

```
└── 📁src
    └── 📁assets
        └── 📁images
            └── 📁ads
                └── adWatch.png
                └── homepod.png
                └── image.png
                └── xbox.png
            └── 📁forDesign
                └── acces.png
                └── checkout.png
                └── discont.png
                └── flash.png
                └── image.png
                └── image1.png
                └── image2.png
                └── image3.png
                └── mac.png
                └── news.png
                └── wishlest.png
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

   \`\`\`bash
   git clone https://github.com/yourusername/CLICON.git
   \`\`\`

2. Navigate to the project folder:

   \`\`\`bash
   cd CLICON
   \`\`\`

3. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

4. Start the development server:

   \`\`\`bash
   npm run dev
   \`\`\`

   The project will be running.

## Usage

- Browse products and categories.
- Add products to your cart.
- Login or register to save your cart and proceed with checkout.
-- (you can use this account to login username:michaelw password:michaelwpass)

## API

We used [DummyJSON API](https://dummyjson.com/) to simulate product and user data.

## Libraries

- **React**: For building the user interface.
- **Vite**: As the build tool for fast and optimized bundling.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Redux**: For global state management (managing cart, user authentication, etc.).
- **React Router**: For handling navigation and routing in the app.