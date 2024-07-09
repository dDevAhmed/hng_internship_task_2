# Timbu Shop - HNG Internship Task 2

Timbu Shop is an e-commerce web application developed as part of the HNG Internship (Stage 2 Task). This project showcases the practical application of frontend development skills, including React, styled-components, and routing.

## Table of Contents
- [Timbu Shop - HNG Internship Task 2](#timbu-shop---hng-internship-task-2)
  - [Table of Contents](#table-of-contents)
  - [HNG Internship](#hng-internship)
  - [Task Requirements](#task-requirements)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)

## HNG Internship
The HNG Internship is a remote internship designed to find and develop the most talented software developers. It focuses on frontend, backend, mobile, and design tracks, providing real-world tasks and collaborative opportunities. 

## Task Requirements
- **Build a multi-page React application** with routing.
- **Include a navbar, hero section, product listing, cart, and checkout** pages.
- **Ensure responsiveness** across different screen sizes (desktop, tablet, mobile).
- **Use styled-components** for styling.

## Features
- **Responsive Design**: Adapts to various screen sizes.
- **Product Listing**: Displays a range of products in different categories.
- **Shopping Cart**: Allows users to add, remove, and update products.
- **Checkout**: Provides a seamless checkout experience.
- **Newsletter Subscription**: Enables users to subscribe to updates.

## Technologies Used
- **React**: For building user interfaces.
- **Styled Components**: For component-level styling.
- **React Router**: For handling navigation.
- **FontAwesome**: For icons.
- **Figma**: For design mockups.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/timbu-shop.git
    ```
2. Navigate to the project directory:
    ```bash
    cd timbu-shop
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage
- Open your browser and go to `http://localhost:3000` to see the application.
- Navigate through the Home, Products, Cart, and Checkout pages.

## Project Structure
```plaintext
timbu-shop/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── HeroSection/
│   │   ├── ProductListing/
│   │   ├── Cart/
│   │   ├── Checkout/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   ├── App.js
│   ├── index.js
│   └── App.css
