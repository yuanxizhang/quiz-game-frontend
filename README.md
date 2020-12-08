# Quiz Game - A Flashcard App 
> A simple web application that helps new developers master programming skills and improve their chances of getting a developer job. The frontend is built with React and Redux, the backend is built with Ruby on Rails and PostgreSQL

## Demo
[Quiz Game live demo](https://quiz-box.netlify.app/#/flashcards)
![screen shot](https://github.com/yuanxizhang/quiz-game-frontend/blob/master/public/img/sreenshot.png)

## Table of contents
* [Objective](#Objective)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Backend](#backend)

## Objective
Provide a tool for new developers to practice, learn, and land a developer job.
## Technologies
* React 16.13.1
* Redux 4.0.5
* Rails 6.0.3
* PostgreSQL 12.3
* Bootstrap 4.5.2
* axios 0.21.0
## Setup
We will need [node.js](https://nodejs.org/en/download/) to run this app.

To build a React app like this one, we need to install create-react-app:
```
npm install -g create-react-app
```
To run the application in development mode:
```
npm start
```
navigate to http:localhost:3000 in any browser to preview the app live

To build this application for production
```
npm run build
```
## Features
* Study a set of flashcard based on the subject of your choice
* Flip the flashcard to view the correct answer
* Search jobs based on job title and job location
## Inspiration
Inspired by [Quizlet](https://quizlet.com/)
## Backend 
* [Rails API backend live demo on heroku](http://online-quiz-api.herokuapp.com/api/v1/tests)
* [Rails backend code on Github](https://github.com/yuanxizhang/quiz-game-api)