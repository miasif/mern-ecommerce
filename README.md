# MERN-E-Commerce 
Mern Ecom: An advanced and feature-rich eCommerce platform developed using the MERN stack and powered by Redux for state management. With a sleek and user-friendly interface, Mern Ecom offers a seamless shopping experience to customers and efficient management tools for administrators.



###Key Features:

- 🚀 &nbsp; Full-Featured Shopping Cart: Users can easily add, update, and remove products from their shopping cart, making the checkout process smooth and convenient.
- 🚀 &nbsp; Product Reviews and Ratings: Customers can leave reviews and ratings for products, helping others make informed purchase decisions.
- 🚀 &nbsp; Top Products Carousel: The homepage showcases the top-rated and best-selling products, offering a glimpse of trending items.
Product Pagination: Smooth product listings with pagination ensure quick loading and easy navigation.
- 🚀 &nbsp; Product Search Feature: A powerful search function enables users to find products based on keywords or categories.
User Profiles with Orders: Registered users have access to their profiles, where they can view order history and manage their account settings.
- 🚀 &nbsp; Admin Product and User Management: Administrators can efficiently manage products and user accounts via the admin panel.
- 🚀 &nbsp; Admin Order Details Page: The admin panel provides a comprehensive view of each order, facilitating effective order management.
- 🚀 &nbsp; Mark Orders as Delivered Option: Admins can update order status and mark orders as delivered after shipment.
- 🚀 &nbsp; Checkout Process: A multi-step checkout process includes shipping details, payment method selection, and order review.
- 🚀 &nbsp; PayPal / Credit Card Integration: Secure payment processing via PayPal or credit cards ensures safe transactions.
- 🚀 &nbsp; Database Seeder: The platform comes with a database seeder for easy setup and testing with dummy product and user data.
With its robust features and solid architecture, eCommerce is ready to revolutionize the online shopping experience for customers and streamline business operations for administrators.



## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'ADD_YOUR_SECRET'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (://127.0.0.1:5173/) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```

```
Sample User Logins
admin@email.com (Admin)
123456
john@email.com (Customer)
123456
jane@email.com (Customer)
123456
```

---






clone from a Udemy course **[MERN From Scratch 2023](https://www.udemy.com/course/mern-ecommerce/)**
