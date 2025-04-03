Here's a revised README file for your project with the updated URL:

---

# E-Commerce React Redux App

## Project Overview

This is a **responsive e-commerce application** built with **React** and **Redux Toolkit**. The app provides users with a seamless shopping experience, allowing them to browse a variety of products, add items to their cart, and manage their selections. The application uses **Redux Toolkit** for state management, **RTK Query** for data fetching, and **Redux Persist** to store the shopping cart state locally, ensuring persistence even after page refreshes.

### Key Features:

- **Dynamic Product Fetching**: Products are fetched dynamically using **RTK Query** from a mock API.
- **Infinite Scrolling**: Scroll through products and load more items as you reach the bottom.
- **Search Functionality**: Filter products based on search input.
- **Cart Management**: Users can add, remove, and view products in their shopping cart.
- **Persistent Cart State**: Cart data is stored using **Redux Persist**, ensuring it is retained even after page refreshes.
- **Responsive Design**: The application is fully responsive and works on both mobile and desktop devices.

## Technologies Used:

- **React**: A JavaScript library for building user interfaces with a component-based architecture.
- **Redux Toolkit**: Simplifies state management, particularly for the shopping cart state.
- **RTK Query**: Efficiently handles data fetching and caching from a mock API.
- **Redux Persist**: Stores the shopping cart data in local storage for persistence.
- **Tailwind CSS**: A utility-first CSS framework for styling, which allows rapid UI development.
- **JavaScript (ES6+)**: For implementing modern JavaScript features and functionalities.

## Steps to Run the Application Locally

To get the application up and running locally, follow these steps:

### 1. Clone the Repository:

```bash
git clone https://github.com/nafistarik/ecommerce-react-redux-tk.git
```

### 2. Navigate to the Project Directory:

```bash
cd ecommerce-react-redux-tk
```

### 3. Install Dependencies:

Ensure **Node.js** is installed on your system. Then, install the required dependencies by running:

```bash
npm install
```

### 4. Start the Development Server:

Launch the application with:

```bash
npm run dev
```

### 5. Open the Application in Your Browser:

Once the server starts, open your browser and visit:

```text
http://localhost:5173
```

The application should now be running locally. If you encounter any issues, feel free to ask for help!

---

## Architectural Choices

### 1. **React**:
React's component-based architecture allows for reusable components and efficient UI rendering, making it easier to develop dynamic user interfaces.

### 2. **Redux Toolkit**:
Redux Toolkit simplifies global state management by providing a set of tools and best practices for managing state in a predictable way. It is particularly useful for managing the shopping cart state in this project.

### 3. **RTK Query**:
RTK Query simplifies data fetching by abstracting the complexities of making API calls and caching responses. It provides an easy-to-use interface to interact with REST APIs.

### 4. **Redux Persist**:
Redux Persist is used to save the shopping cart data to local storage. This ensures that cart contents are maintained even after the user refreshes the page, providing a better user experience.

### 5. **Tailwind CSS**:
Tailwind CSS is a utility-first CSS framework that accelerates the development of responsive and clean UIs by using a set of predefined utility classes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you need further modifications or additions!
