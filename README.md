# Ecommerce-Follow-Along
## Milestone 1: Project Overview

Ecommerce-Follow-Along is a standard e-commerce website designed to provide a seamless online shopping experience for a wide range of users. The platform allows customers to browse products, add them to a cart, and securely make purchases. It also includes features like user authentication, product search and filtering, and order tracking.

The goal of this project is to create a functional and user-friendly e-commerce application that covers all essential aspects of online shopping, including managing products, orders, and users.


### Key Features:

Product Catalog: Browse and search through a variety of products effortlessly.

User Authentication: Secure login and registration system for personalized user experiences.

Shopping Cart: Add, update, or remove items before proceeding to checkout.

Order Management: Track orders, view order history, and handle payments securely.

Admin Panel: Manage products, orders, and users with administrative controls.

### Tech Stack:
Front-End: React — for building an interactive and responsive user interface.

Back-End: Node.js with Express — for server-side logic and API handling.

Database: MongoDB — for efficient storage and retrieval of product, user, and order data.


### Why This Project?

This project aims to simulate the development of a real-world e-commerce platform while giving hands-on experience with the MERN stack. It’s a great way to understand the interplay between the front-end, back-end, and database, while solving a common user problem: making online shopping simple and enjoyable.


## Milestone 2: Project Setup and Login Page:

### Description:

In Milestone 2, I focused on structuring the project and setting up the frontend and backend for the e-commerce application. This milestone involved configuring the development environment, creating a functional login page, and laying the foundation for future API integrations.

### What I Learned:
Project Folder Structure: I organized the project files into separate directories for the frontend (React) and backend (Node.js), streamlining the development process.
React Frontend Setup: I initialized a React app to handle the user interface, ensuring a smooth foundation for building the app's frontend.

Node.js Backend Setup: I set up a basic Node.js server to handle backend functionality, preparing for API integration in later milestones.

Tailwind CSS Integration: I configured Tailwind CSS to enable utility-based, responsive styling throughout the project.

Login Page Development: I created the first user interface of the e-commerce platform—a functional and styled login page—allowing users to securely log into the platform.

### Key Features:

Folder Structure: Organized files into frontend and backend directories for better management.

Login Page: A functional login page for users to access the platform securely.

Styling: Used Tailwind CSS to style the application with modern, responsive design principles.

## Milestone 3: Project Setup for Backend

### Description:

I focused on setting up the backend for the e-commerce application. This milestone involved organizing the backend code, connecting the application to MongoDB, setting up a Node.js server, and implementing basic error handling to ensure smooth operation.

### What I Learned

Backend Folder Structure: I organized the backend code into a structured hierarchy, with separate folders for routes, controllers, models, and middleware.

Server Setup: I initialized a Node.js server using Express and configured it to listen on a designated port, ready to handle incoming API requests.

MongoDB Integration: I connected the application to MongoDB, ensuring efficient data storage and retrieval.

Error Handling: I implemented basic error handling to provide clear messages for debugging and better user feedback when something goes wrong.

### Key Features:

Backend Organization: Set up a clean folder structure for organizing backend files.

Server Initialization: Configured a basic Node.js server using Express.

Database Connection: Successfully integrated MongoDB for data management.

Error Handling: Added basic error handling for smoother server operation.

## Milestone 4: Creating User Model and Controller

### Description:

I expanded the backend functionality of the e-commerce application by introducing user data management and file uploads. This involved creating a User Model and Controller, as well as configuring Multer for handling file uploads like profile pictures.

### What I Learned:

User Model Creation: Designed a blueprint for user data, specifying fields like name, email, and password using a MongoDB schema.

User Controller: Implemented logic to manage user-related operations, such as adding new users and retrieving their information.
File Uploads with Multer: Configured Multer to handle and store file uploads securely, enabling the application to accept user-uploaded images.

### Key Features:

User Model: Defined the structure for user data in the database using MongoDB schemas.

User Controller: Managed server-side operations related to users, like handling requests for user registration or retrieval.

File Uploads: Enabled file upload functionality, allowing users to upload profile pictures that are stored on the server.


## Milestone 5: Sign-Up Page Implementation

### Overview

In this milestone, we focused on enhancing the frontend by building the Sign-Up Page and setting up routes to handle the user sign-up process smoothly.

### Learning Outcomes 🎯

By completing this milestone, we:

Created the frontend UI for users to register by filling out their details.

Implemented form validation to ensure user inputs (like email and password) met the required criteria before submission.

### Sign-Up Page

The Sign-Up page allowed users to enter their details to create an account. This page included fields for:

- Name

- Email

- Password

It provided users with a structured way to submit their information, which was then sent to the server for processing.

### Form Validation

Form validation was implemented to ensure users entered correct and properly formatted information.

Email addresses were validated to match a standard email format.

Passwords were checked to meet security criteria (e.g., minimum length).

Invalid inputs were restricted to prevent errors and ensure the backend received clean data.

## Milestone 6: Backend Signup Endpoint Implementation

### Overview

In this milestone, we focused on developing the backend for the Signup page, ensuring that user data is securely stored in the database.

### Learning Outcomes 

By completing this milestone, we:

Learned how to encrypt passwords before saving them.

Stored complete user data securely in the database.

### Key features:
Encrypting the Password

Used bcrypt to hash the user's password during signup.

Stored the hashed password in the database instead of plain text.

Storing Complete User Data

Saved all user details (e.g., name, email, etc.) securely in the database.

Ensured the password remained encrypted.

## Milestone 7:

### Overview

This milestone focused on implementing a backend endpoint for user login. The main objectives were to validate user credentials and verify the encrypted password stored in the database.

### Steps for Milestone 7 

1. Created Login Endpoint:

Accepted user credentials (email/username and password).

Retrieved the corresponding user from the database.

2. Validated Password:

Used bcrypt to hash the entered password.

Compared it with the stored hashed password for authentication.

## Milestone 8: Product Card Component and Homepage

### Overview

This milestone focused on creating a frontend card component for products and designing a homepage to display these cards for each product.

### Learning Goals:

Learned how to create a card component.

Learned how to display those cards on the products page.

Created a reusable card component for displaying product details.

Used props to pass product information dynamically.

Implemented array mapping to render multiple product cards.

Designed a structured homepage layout usinG TAILWIND CSS.

## Milestone 9:
### Learning Goals
Learn how to create a form to collect product details
Learn how to take multiple images as input
### Key Points
- The form will be used to input product details, which will be saved in the database and displayed on the product home page
- The form should support uploading multiple product images

## Milestone 10: Creating a Mongoose Schema and Endpoint
### Learning Goals
- Learned how to write a product schema using Mongoose
- Learned how to create an endpoint to validate and store product details in MongoDB
### Key Points
- Product Schema
- Defined the structure of product data, including fields like name, description, price, and image URL
- Ensured proper validation, such as required fields and correct data types
### Endpoint Creation
- Built a POST endpoint to receive product data
- Validated and stored the product details in MongoDB

## Milestone 11:

 ### Overview

 In this milestone, we have made our home page dynamic by fetching product data from MongoDB and displaying it using our product card component. This enhances our application's functionality by integrating backend and frontend components effectively.

### Key Features

- API endpoint to fetch all product data from MongoDB.

- Frontend function to retrieve and display data.

- Dynamic rendering of products using the product card component.

## Milestone 12 - My Products Page

### Overview

In this milestone, we will create a My Products page that displays all products added by the logged-in user. We will achieve this by writing a backend endpoint that fetches products from MongoDB based on the user's email and dynamically rendering them in the frontend using a product card component.

### Key Features

- Backend Endpoint: Fetches all products associated with the logged-in user's email.

- Frontend Data Fetching: Calls the backend API to retrieve the user's products.

- Dynamic Rendering: Displays products dynamically using the existing product card component.

- Filtering Data: Understand how to filter database records based on constraints (user email).

### Steps Implemented

#### Backend:

- Created an endpoint to fetch products from MongoDB where email matches the logged-in user.

- Used Express and Mongoose to query and return the filtered data.

#### Frontend:

- Wrote a function to call the backend API and fetch the user’s products.

- Rendered the product data dynamically using the existing product card component.

## Milestone 13 - Edit Uploaded Products

### 📌 Overview

In this milestone, we implemented functionality to edit previously uploaded products. This includes adding an edit button to each product card and creating a backend endpoint to update product details inside a MongoDB database.

###🎯 Learning Goals

- By completing this milestone, we learned:

- How to write an API endpoint to update existing data in MongoDB.

- How to auto-fill a form with existing data for editing.

- How to update and save the modified details back to the database.

### 🛠 Steps Implemented

#### Backend: Update Product Endpoint

- Created an Express.js endpoint to handle PUT requests for updating product details in MongoDB.

- Used Mongoose to find the product by its ID and update the details.

#### Frontend: Edit Button & Auto-fill Form

- Added an "Edit" button to each product card.

- When clicked, it pre-fills a form with the product's existing details.

- Allowed users to modify the details and save changes.

## Milestone 14 - Delete Product Functionality

### 📌 Overview

In this milestone, we implemented functionality to delete products. This includes adding a delete button to each product card and creating a backend endpoint to remove a product from the MongoDB database using its ID.

### 🎯 Learning Goals

- By completing this milestone, we learned:

- How to write an API endpoint to delete a product using its ID in MongoDB.

- How to trigger a delete action from the frontend and communicate with the backend.

- How to ensure a seamless user experience when deleting a product.

### 🛠 Steps Implemented

#### Backend: Delete Product Endpoint

- Created an Express.js endpoint to handle DELETE requests for removing products from MongoDB.

- Used Mongoose to find the product by its ID and delete it.

#### Frontend: Delete Button

- Added a "Delete" button to each product card.

- When clicked, it sends the product ID to the backend endpoint.

- Removed the product from the UI upon successful deletion.


## Milestone -15
### 📌 Overview
In this milestone, you'll learn how to create a Navbar component in React and reuse it across multiple pages to navigate smoothly between different parts of your application.

### 🎯 Learning Goals
By the end of this milestone, you will understand:

How to create a Navbar component in React.

How to reuse the Navbar component across multiple pages.

How to make the Navbar responsive for all screen sizes.

How to enable smooth navigation between pages using React.

### 🔑 Key Features
A Navbar component with navigation links to:
- Home

- My Products

- Add Product

- Cart

- Reusable Navbar on every page.

- Responsive design for all screen sizes.

- Seamless navigation between pages.

## Milestone 16 - Product Info Page

### Overview 🌟

In this milestone, I have created a Product Info Page that displays detailed product information, allows users to select the desired quantity, and provides an Add to Cart button.

### Learning Goals 🎯

By completing this milestone, I learned:

How to create a new page to display product information.

How to add a quantity selector.

How to implement an Add to Cart button.

### Features 🔑

Display detailed product information.

Option to choose product quantity.

Button to Add to Cart.

Navigation to this page from the Product List.


## Milestone 17 - Add Products to Cart 🛒

### Learning Goals 🎯

By the end of this milestone, you will:

Edit the User Schema to store cart products.

Write an API endpoint to receive product details and store them in the database.

### Steps for Milestone 17 📝

1. Create Cart Schema

Define the Cart Schema to store product information.

Link cart items to the User Schema.

2. Write the Endpoint

Create an endpoint to receive product details.

Store the product in the User's cart inside the database.


## Milestone 18 - Cart Page Backend Endpoint

### Description
In this milestone, we have created a **Backend Endpoint** to fetch all products inside the user's cart based on their email ID. This functionality helps display cart items on the cart page.

### Learning Goals 🎯

- Create an endpoint to receive requests from the cart page.

- Fetch all products from the cart for the logged-in user using their email ID.

### Features Implemented
- API Endpoint to fetch cart items.

- Filter cart products using user email.

- Connect backend with the cart page.

## Milestone 19 - Cart Functionality

### Learning Goals 🎯

- Create a cart page UI to display products.

- Add + and - buttons to increase or decrease product quantity.

- Build backend endpoints to update product quantity.

### Features Implemented ✅

- Frontend:

- Display cart products fetched from the backend.

- Buttons to increase or decrease product quantity. 

- Automatic cart updates on button click.

## Backend:

- Endpoint to increase product quantity.

- Endpoint to decrease product quantity.


## Milestone 20 - Profile Page

### Learning Goals 🎯

- Create a backend endpoint to send user data via email.

- Build a frontend profile page to display user information.

- Display profile photo, name, email, and addresses.

### Features Implemented ✅

#### Frontend:

- Profile page displaying user photo, name, and email.

- Address section with an "Add Address" button.

- Message showing "No address found" if no addresses are available.

#### Backend:

- Endpoint to fetch user data including name, email, and addresses.

- Endpoint to send user data via email.

## Milestone 21-Address Form Page

### Overview
In this milestone, we created a frontend page with an address input form. This form allows users to enter their address details, including country, city, address lines, zip code, and address type.

### Features
User-friendly address form with input fields for:

- Country

- City

- Address Line 1

- Address Line 2

- Zip Code

- Address Type

- State management to store input data.

- Navigation from the profile section when clicking “Add Address.”



## Milestone 22-Storing User Address in the Database via Backend API
### Overview
In Milestone 22, we will create a backend endpoint to store user addresses in a database. This endpoint will receive address details from the frontend and update the user's profile by adding the address to the address array inside the user collection.

### Features
- Create an API endpoint to handle address storage.
- Receive address data from the frontend form.
- Update the user collection by adding the address to the existing address array.
- Ensure data persistence by storing the updated user profile in the database.
- Enhance user profiles with multiple addresses.

## Milestone 23: Place Order & Address Selection

### Overview

In Milestone 23, we implemented the "Place Order" functionality in the frontend and defined the product schema for orders in the backend. This milestone helps in understanding how to handle order placement and address selection efficiently.

### Features Implemented

#### Frontend

- Place Order Button: Added a button inside the cart page to initiate the order placement process.

- Select Address Page: Created a new page to display all available addresses and allow users to select a delivery address.

#### Backend

- Order Schema: Defined a Mongoose schema to store order details.

- Get Addresses Endpoint: Implemented an API endpoint to fetch all addresses       associated with a user.

## Milestone 24: Order Confirmation Page

### Overview

In Milestone 24, we implemented the order confirmation page in the frontend, where users can review their order details before placing it. This milestone focuses on enhancing the user experience in the order placement process.

### Features Implemented

#### Frontend

- Order Confirmation Page: Created a page to display the products being ordered.

- Selected Address Display: Showcased the user's chosen delivery address.

- Total Price Calculation: Displayed the total value of the cart.

- Final Place Order Button: Added a button at the bottom to confirm and place the order.

## Milestone 25

### Overview
This milestone focuses on creating a backend endpoint to place an order. The endpoint will handle products, user details, and address information, storing order details in MongoDB.

### Features
- Accepts user email, product details, and address as input.
- Retrieves the user’s _id using their email.
- Creates separate orders for each product with the same address.
- Saves order details in the MongoDB orders collection using the existing schema.

## Milestone 26

### Overview

This milestone focuses on creating a backend endpoint to retrieve all orders of a user using their email.

### Features
- Accepts user email as input.
- Retrieves the user’s _id using their email.
- Fetches all orders associated with the user’s _id.
- Returns the user's order details in the response.


## Milestone 27-My Orders Page

### Overview

The My Orders page allows users to view all their previous orders. It fetches order details from the backend by sending a GET request to the /my-orders endpoint with the user's email as a query parameter.

### Features

- Fetches user orders from the backend.

- Displays the list of orders.

- Adds a "My Orders" link in the navigation bar for easy access

## Milestone 28

### Overview

The My Orders page allows users to view all their previous orders. It fetches order details from the backend by sending a GET request to the /my-orders endpoint with the user's email as a query parameter. Additionally, users can cancel their placed orders.

### Features

- Fetches user orders from the backend.

- Displays the list of orders.

- Allows users to cancel orders.

- Hides the cancel button if the order is already canceled.

- Adds a "My Orders" link in the navigation bar for easy access.