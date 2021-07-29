<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# WDB SP'21 Frontend Project

Welcome to WDB's frontend project for development branch applicants 👋

Make sure you read these instructions carefully before you start. If you have any questions please reach out to webatberkeley@gmail.com.

The goal of this exercise is to create a simple app that;

- builds and compiles your code locally
- can be viewed at `localhost` using a local web server
- meets the requirements listed below.

If you have any comments or feedback please include it in the `submission.md` file. This is your chance to tell us what you thought about the exercise and any ideas or issues you may have had. It's a good way for us to get to know you and your process. We want to hear from you!

_Happy coding and good luck!_

<br />

---

<br />

## Setup

We'll be using Figma to relay how the final product should look and behave. The Figma link can be found here: https://www.figma.com/file/UZ1KmR1vZySGXGVJb8Vrbq/Frontend-Project?node-id=0%3A1.

If you are unable to use Figma or have errors dealing with it, we have attached some images of what the final product should look like in the figma-images folder.

For this project, we're expecting you to use a frontend framework, including but not limited to: React.js, Angular.js, Vue.js. Which framework you use if up to your discretion and your choice will not impact our decision. If you haven't worked with these technologies or another popular frontend framework in the past, the student branch might be more fitting. If this is the case, email us at webatberkeley.org for next steps.

<br />

---

<br />

## The project

This project will be creating a simple Ikea clone called Fry-Kea, where every product is meant to be furniture that can be eaten! The website you make must be capable of displaying an array of food furniture products with varying data. These furniture listings must lead to their own page when clicked and display the data associated with the item. furniture items and their data can be found in `Data.json`. This project is meant to be on the lighter side.

<br />

---

### **Project overview**

Please create a replica of the design provided (viewable through Figma or the images in the figma-images folder), and use the data provided in Data.json.

The Home Screen (Home Page in Figma, or home-page.png) is the main page of the website and displays basic information on all of the furniture listings. Clicking on a listing brings the user to the Listing View (Listing View page in Figma, or listing-view.png), which contains all the data associated with that listing.

All images required to create the replica are provided in the img folder.

Try to style the Home Screen and the Listing View as closely as possible to how they look in the Figma and the images.

**Requirements:**

- Use a navigation package or create an API to handle navigating to a listing - anything is fine as long as navigation isn't hard coded for each listing.
- Your website does not need to be responsive, and it should be built for a laptop or a monitor.
- DO NOT manually input or display post data i.e. do not hard code anything.
- DO NOT edit the Data.json in any way

**Additional Details:**

- Feel free to use UI libraries (Bootstrap, Material Design, etc...), or any CSS pre-processors (SASS, LESS, etc...). If you do not know what these are, no worries! There is no penalty for not using these tools.
- Feel free to change around the file structure as much as you want.
- Feel free to use any outside packages.
- If you copy code from an outside source that's fine, but please include the source as a comment.
- If the instructions seem ambiguous, that's on purpose! We want you to make as many decisions on your own as possible.

**Bonus Points:**

- Write neat, modular code.
- Write scalable code.
- Commented code.

**Notes**

- If you're unsure whether you're allowed to use a certain tool, go for it - we truly don't care - in fact, usage of outside tools is reflective of what you might be doing as a WDB developer as we highly encourage microservice architectures and writing as little code as possible.
- If you are unsure about spacing, distances, etc... feel free to eyeball it. We will not be answering questions relating to the details of the design, and instead, use your discretion. We will be looking more for functionality than a pixel-perfect replica of the design.

<br />

---

<br />

## How to Submit

Take a look at the `submission.md` file before submitting. If you deviated from the instructions or have any feedback, that's the place to put it!

To submit your project, please place your submission into a GitHub repo that is set to private. You will be submitting your code on [Gradescope](https://www.gradescope.com/). If you do not have a Gradescope account, please create one and if you are unable to create one, please email us immediately. The Gradescope course code is `BP347P`. You will see two different assignments: `Frontend Technical Project` and `Backend Techinical Project`. _Please only submit to Frontend Technical Project._ You can ignore Backend Technical Project.

The technical project will be due at 8:00 am PT on Monday, Febuary 8th. We will be unable to respond to clarification emails sent in after 11:59 pm PST on Sunday, February 7th, so if you have any questions about the project, please let us know before then. 

<br />

---

<br />

## FAQs

### **When is the assessment due?**

Please submit your exercise by 8:00 am PT on Monday, Febuary 8th. We will be unable to respond to clarification emails sent in after 11:59 pm PST on Sunday, February 7th, so if you have any questions about the project, please let us know before then. 

### **Which browsers should I support?**

We'll look for compatibility with the following browsers:

- **Google Chrome** (latest version)

### **What color values should I use?**

The exact color values don't matter; just try to get as close to the mockup as you can. You could also use a Chrome extension such as <a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">this color-picker</a>.
>>>>>>> 352799c57774467a7337f6dbd4c03156b03828a1
