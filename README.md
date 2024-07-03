# Vite React TypeScript + TailwindCSS Project

This project is a template for setting up this particular React application with TypeScript, Vite, and TailwindCSS. It provides a fast development environment and a clean structure for building modern web applications.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)


## Installation

To get started with this project, clone the repository and install the dependencies:

### Clone the Repository

```sh
git clone https://github.com/TEMIYORES/blutech-interview.git

cd blutech-interview
```

## Installation

Make sure you have Node.js installed. Then, install the required dependencies using npm or yarn:

```sh
# Using npm
npm install

# Using yarn
yarn install
```

## Running the Project

To start the development server, use the following command:

```sh
# Using npm
npm run dev

# Using yarn
yarn dev
```

This will start the Vite development server and open the application in your default web browser. Any changes you make to the code will be automatically reflected in the browser.

## Building for Production

To create a production build of the project, use the following command:

```sh
# Using npm
npm run build

# Using yarn
yarn build
```

This will generate optimized static files in the 'dist' directory. You can serve these files using any static file server.

```sh
blutech-interview/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Asset files (images, fonts, etc.)
│   ├── components/     # React components
│   ├── config/         # React Configurations
│   ├── context/        # Context Api Configuration
│   ├── hooks/          # Context api hooks
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── index.css/      # CSS and TailwindCSS styles
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project README
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration

```

## Happy Coding! 🥳 #blutech