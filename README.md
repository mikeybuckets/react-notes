# react-notes

**index.html:

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <main id="app">
  </main>
	<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
  <script src="/ProfilePage.compiled.js"></script>
</body>

</html>


**components:

import React from 'react';

// NavBar.js

class NavBar extends React.Component {
  render() {
    const pages = ['tools', 'discuss', 'docs', 'help'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

//ProfilePage.js

import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

// MainPage.js

var React = require('react');
var ReactDOM = require('react-dom');
var AnteaterProfile = require('./AnteaterProfile');

var MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Welcome to Anteater Towne!!!</h1>
        <AnteaterProfile />
        <footer>
          To view more anteater profiles just like this one, sign up for an account!
        </footer>
      </div>
    );
  }
});

ReactDOM.render(
  <MainPage />,
  document.getElementById('app')
);



