![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 30: City Explorer

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-30)
* [![Build Status](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-30.svg?branch=submission)](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-30)
* [Front End](http://city-explorer-cs-lab-30.s3-website-us-west-2.amazonaws.com/)

### Modules
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
└── src
    ├── App.js
    ├── App.scss
    ├── App.test.js
    ├── components
    │   ├── darksky
    │   │   ├── darksky.js
    │   │   └── darksky.test.js
    │   ├── footer
    │   │   ├── footer.js
    │   │   ├── footer.test.js
    │   │   └── __snapshots__
    │   │       └── footer.test.js.snap
    │   ├── form
    │   │   ├── form.js
    │   │   └── form.test.js
    │   ├── header
    │   │   ├── header.js
    │   │   ├── header.test.js
    │   │   └── __snapshots__
    │   │       └── header.test.js.snap
    │   ├── map
    │   │   ├── map.js
    │   │   └── map.test.js
    │   ├── meetups
    │   │   ├── meetups.js
    │   │   └── meetups.test.js
    │   ├── movies
    │   │   └── movies.js
    │   ├── trails
    │   │   ├── trails.js
    │   │   └── trails.test.js
    │   └── yelp
    │       ├── yelp.js
    │       └── yelp.test.js
    ├── fetchCityData.js
    ├── fetchCityData.test.js
    ├── index.js
    ├── serviceWorker.js
    └── setupTests.js

```

---

### `./public/*`
#### Exported Values and Methods
Static views provided by `create-react-app`.

---

### `./src/index.js`
#### Exported Values and Methods
Entry point that renders `<App/>`.

---

### `./src/App.js`
#### Exported Values and Methods
Contains application state and methods and renders other components as children.

---

### `./src/fetchCityData.js`
#### Exported Values and Methods
Fetches location and resource data.

---

### `./src/components/*`
#### Exported Values and Methods
Presentational, functional components that may render resources from a particular endpoint as `props` provided by `<App/>`.

---

#### Tests
* What assertions were made?
  * Tests ensure components render without crashing. 
  * Snapshot tests on `<Header/>` and `<Footer/>` components. 
  * `<Form/>` properly calls its `handleSubmit` prop function.
  * `fetchCityData` functions return defined.
* What assertions need to be / should be made?
  * Snapshot tests could be made for each component. 
  * Additional functional tests should be made on `<App/>` and for the `fetchCityData` functions. 
  * Tests to ensure each element is dynamically assigned the proper `className`.

#### UML
N/A