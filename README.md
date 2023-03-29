# 🙏  Namaste-React 
Namaste-React is a React Js live course being run by Akshay Saini, [Namaste Javascript YT](https://www.youtube.com/watch?v=pN6jk0uUrD8) course Author and founder of [Namaste Dev](https://learn.namastedev.com/).
This repo is an assignment code from the live classses being taken by Akshay.


# Parcel
- Development build
- Does hot reload (HMR)
- Local Server
- uses file watching algo written in C++
- Faster builds by caching things up in `.parcel-cache`.
- Image optimization
- minification and bundling of files in case of prod builds
- compress files(remove white spaces etc)
- consistent Hashing (read at own)
- code splitting
- differential bundling(so that app runs smoothly on almost all browsers and the older ones too).
- diagnostics and provide errors/good error handling
- gives a way to host app on `https`.
- Tree Shaking- remove unused code
- different `dev` and `prod` bundle.

# Notes
- Normal browser Js file do not have import statement and hence we need to provide type="Module" while importing JS file in index.html
- its not  good practice to import react/lob frm CDN, t is not effective for version control as well hence use npm.
- inside package.json `"main": "App.js"`, need to remove else parcel will conflict while building using `npx parcel build index.html` - prod build command
-  "browserslist": [
    "last 2 versions"
  ] specifically used in govt sites which need to be work on very old browsers or country specific configurations
