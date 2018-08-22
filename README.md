This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React - Photobrowser

This is a training spec for a photo browsing web application. The goal the application is to render a simple grid of images and allow navigation from each image to a details page.

## Demo

[here](http://deluxe-photo-app.surge.sh/)

## Installation

- clone this repo: git clone https://github.com/SamiNami/reactPhoto.git
- run the code locally: npm run start
- building for production: npm run build

## Requirements

### General requirements

- [x] The application should use [JSONPlaceholder](http://jsonplaceholder.typicode.com) as a source for the photo content
- [x] the application must use react
- [x] the application must run on the latest chrome version
- [x] get the images from [here](http://jsonplaceholder.typicode.com/photos)
- [x] the source code must be made available somehow

### The grid page

- [x] Load a reasonable amount of thumbnails from the photo api, paging is optional.

### The details page

- [x] Clicking a thumbnail from the grid should navigate to a details page, showing the full image and title of the photo.

## Optional requirements

- [x] use [redux](http://redux.js.org/) for state management
  - [x] use [thunks](https://github.com/gaearon/redux-thunk)
- [x] the demo is accessible on the internet
- [x] the source code has a `README.MD` detailing how to run the code locally
- [x] ES2017 syntax used in code
