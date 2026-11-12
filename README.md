<img src="https://socialify.git.ci/khethiwengema04-gif/Task2-ReactTS/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Task2-ReactTS" width="640" height="320" />

# Link Vault

## Project Overview

The Link Vault is a web application developed using React and TypeScript. The purpose of the application is to allow users to save, organise, manage and access their favourite website links from one place.
The application works similarly to a browser bookmarking feature, allowing users to keep useful links without having to remember or search for them again.
This project was developed as the second official React task based on Lesson 2. It demonstrates the use of React concepts, including components, props, array manipulation, objects and browser Local Storage.
The application uses Local Storage to store link information in the browser. 

## Project Objectives

The main objectives of this project are to:

- Develop a user-friendly and responsive React application.
- Allow users to save and manage their favourite website links.
- Practise Create, Read, Update and Delete (CRUD) operations.
- Implement searching and filtering functionality.
- Use Local Storage to maintain saved link information.
- Apply React components, props, state.

## Technologies Used

The project makes use of the following technologies:

- React.js: Used to build the user interface using reusable components.
- **TypeScript:** Used to provide type safety and improve code organisation.
- **HTML:** Used to structure the application's content.
- **CSS:** Used to style the application and create a responsive layout.
- **JavaScript:** Used for application logic, array manipulation and object handling.
- **Browser Local Storage:** Used to store saved links in the browser.

## Features and Functionality

### 1. Save New Links 
Users can add new favourite links by providing the required information:
- Title
- Website URL
- Description
- Optional tags

The information is stored as a link object and added to the application's collection of saved links.

### 2. View Saved Links (Read)
Users can view their saved links in the application. Each saved link contains its title, URL, description and associated tags.

### 3. Edit Saved Links (Update)
Users can update previously saved links by modifying their details. This allows them to keep their saved information accurate and up to date.

### 4. Delete Saved Links (Delete)
Users can remove links they no longer need from their collection.

### 5. Search Functionality
The application allows users to search through their saved links using different information, including:
- Link title
- Website URL
- Description
- Tags
This makes it easier to find specific saved links.

### 6. Data Persistence
Browser Local Storage is used to maintain saved link information.
The application uses JSON methods to convert link objects into strings when saving data and convert the stored strings back into JavaScript objects when retrieving data.
This allows saved information to remain available after refreshing or reopening the browser, provided the browser's Local Storage has not been cleared.

## Installation and Setup
Follow these steps to run the project locally.

**Step 1: Clone the repository**
```bash
git clone https://github.com/khethiwengema04-gif/Task2-ReactTS.git
```

**Step 2: Navigate into the project directory**
```bash
cd Task2-ReactTS
```

If the React application is inside the nested `Task2-ReactTS` folder, navigate into that folder as well:
```bash
cd Task2-ReactTS
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the development server**
Check the `scripts` section in `package.json` for the correct start command. If the project uses Vite, run:

```bash
npm run dev
```

If it uses a different development setup, use the corresponding command.

**Step 5: Open the application**
Opening the local development URL displayed in the terminal.


## Conclusion
The Links Vault project provides practical experience in developing a React application using TypeScript.
Through this task, important concepts such as React components, props, state management, arrays, objects and Local Storage are applied to solve a real-world problem.
The application demonstrates how users can manage their favourite website links through CRUD operations while using browser-based storage as an initial solution for data persistence.

## Repository
GitHub: https://github.com/khethiwengema04-gif/Task2-ReactTS
