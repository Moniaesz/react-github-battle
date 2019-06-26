### React Github Battle

Implementation of Github Battle App, made along with [React Fundamental Course](https://tylermcginnis.com/courses/react-fundamentals/).

ES6 code refacoring was made after [Modern JavaScript course](https://tylermcginnis.com/courses/modern-javascript/).

##### sidenote
react-github-battle utilizes Github API, that can be contacted without API key but with some limits. If it's the case (You get error and can't fetch Github users data):

* wait few hours
or
* register and get API Client ID and Client Secret to be inserted in api.js file, that can be found in utils app folder. You can register your app [here](https://github.com/settings/applications/new)


Live demo can be seen [here](https://github-battle-react-2be0f.firebaseapp.com/).

App has two main functionalities: battle github users and see most popular repositories.


1. Battle component:

* Option to choose two github repositories owners and battle them
* Option to reset user/s
* route with results of the battle - presenting winner & loser based on final score
* error handling if username doesn't exists on github

2. Popular component:

* list of most popular repos based on numbers of stars (default to all languages)
* filterable list to fetch repos from chosen language/technology

#### App make a use of:

* React data flow
* React Router V4
* Axios (promise-based HTTP client)
* Github API
* Webpack & Babel
* Firebase

#### For developers:

1. Clone or download this repository
2. Install project dependencies using npm install
3. Run development server with npm start
4. The page will run at http://localhost:8080


#### Dependencies

* [Tyler McGinnis React Course](https://tylermcginnis.com/courses/react-fundamentals/)
* [axios library](https://github.com/axios/axios)
* App deployment & hosting thanks to [Firebase](https://firebase.google.com/)