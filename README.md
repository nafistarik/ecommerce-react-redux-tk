## Project Overview

This is a responsive e-commerce application built using React and Redux. It provides users with a seamless shopping experience by allowing them to browse a variety of products, add items to their cart, and manage their selections. The application leverages Redux Toolkit for state management and Redux Persist for local storage of the shopping cart. With a user-friendly interface, dynamic product loading, and a functional cart, this e-commerce website aims to deliver an intuitive online shopping experience.

## Features

- Dynamic product fetching by RTK query from a mock API.
- Infinite scrolling to load more products.
- Search functionality to filter products.
- Cart management with the ability to add, remove products.
- Persistent cart state using Redux Persist.
- Responsive design suitable for mobile and desktop devices.

## Steps to Run the Application Locally

To run this application locally, follow these steps:

1. **Clone the Repository:**

git clone https://github.com/nafistarik/ecommerce-react-redux.git

2. **Navigate to the Project Directory:**

cd ecommerce-react-redux

3. **Install Dependencies: Make sure you have Node.js installed. Then, run:**

npm install

4. **Start the Development Server: Launch the application by running:**

npm run dev

5. **Open in Browser: After the server starts, open your browser and go to:**

http://localhost:5173

Now, you should be able to see your eCommerce application running locally! If you encounter any issues, feel free to ask for help!

## Explanation of Key Architectural Choices

1. React: Utilized for its component-based architecture, allowing for efficient UI rendering and reusability.

2. JavaScript: Chosen in place of TypeScript for my comfort level, enabling dynamic feature development with modern ES6+ syntax.

3. Redux Toolkit: Used for global state management, specifically for the shopping cart, simplifying state changes.

4. RTK Query: Implements data fetching from the Fake Store API, streamlining API calls and caching.

5. Redux Persist: Stores cart data in local storage, preserving user data across page refreshes for a better experience.
