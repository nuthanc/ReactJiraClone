### React-Jira-Clone

### Initial setup
```sh
npx create-react-app react-jira-clone
```
* Project link: https://github.com/nuthanc/ReactJiraClone/projects/1
* Wiki link: https://github.com/nuthanc/ReactJiraClone/wiki
* Reference link: https://github.com/nuthanc/udemy_react/tree/master/streams/client

### index and components
* Create index.js and components
* Create App.js inside components

### Setup basic Action Creators and Reducers folders
* Create actions and reducers dir inside src
* Create index.js within both

### Basic issues in components
* Create issues dir inside components
* Create IssueCreate and IssueList

### Redux installations
```sh
npm install redux react-redux redux-thunk
npm install react-router-dom
```

### Routes, semantic ui and History object
* Create history in history.js and routes in App.js

### Google Oauth
* Make use of streamy's Google client id and secret
* Add GAPI library in public index.html
* https://developers.google.com/identity/sign-in/web/reference
* gapi.auth2.getAuthInstance()
  * Returns the GoogleAuth object. You must initialize the GoogleAuth object with gapi.auth2.init() before calling this method
  * The gapi.auth2.GoogleAuth object. Use this object to call gapi.auth2.GoogleAuth's methods.
* GoogleAuth.isSignedIn.get()
  * Returns whether the current user is currently signed in
* GoogleAuth.isSignedIn.listen(listener)
  * Listen for changes in the current user's sign-in state.
  * listener: A function that takes a boolean value. listen() passes true to this function when the user signs in, and false when the user signs out.

### Add Redux form
* npm install redux-form
* Problem with redux-form in IssueCreate