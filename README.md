# 🌎 React Travel Journal 📖

## ℹ️ About this project

This is a solo project that is a part of [Scrimba's React Course](https://scrimba.com/learn/learnreact) by Bob Ziroll.

At the end of every module, there's a solo project to practise all the concepts that were taught on the same module.

Every solo project has a list of features that need to be on the project, and a [Figma design](https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=0%3A1) to replicate.

In this project I had to create a Travel Journal, that has a `title`, `location`, `image`, `dates`, `google maps link` and a small `description`. I decided to create it with real places I've visited. 

The main goal of the project was to practise creating reusable code - this means that any new data that is added to the file data.js, will automatically be formatted and displayed on the page.

🌐 [Live Demo of this project](r-travel-journal.netlify.app)

## 🧰 Technologies used

- HTML
- CSS
- JavaScript
- ReactJS

## ✅ Solo Project Requirements

- `data array in a separate js file`
- `use .map() and props`

## 💡 How this project was created

1.
- Created a components folder inside src directory to create a `Navbar`, `Countries` and a `Footer` component. 

- Created an images folder to add the icons from the design

- Created a data.js file with an array of objects, each one containing a `title`, `location`, `google maps url`, `dates`, `description` and an `image`. This will be used inside the `Countries` component.

2. 
- The `Navbar` component is rendering an icon and the title of the project and is styled on the CSS file 

- The `Countries` component is receiving the information from the file data.js through props, and using JSX is displaying each piece of data, in a styled component

- The `Footer` component is rendering a basic styled component with credits

3. 

- Import all components to the `App` component 

- Create a new element - `Journal Elements` - to use the .map() method, in order to return each of the items in the data.js file and display them according to the styled component `Countries` 

- Display the `Journal Elements` between `Navbar` and `Footer`

## 💻 Setup
To run this project, install it locally using npm:

```
$ cd react-travel-journal
$ npm install
$ npm start
```
