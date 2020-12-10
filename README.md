# Quiz Game - A Quiz App with Built-in Flashcards and Job Search Tools 
> A simple web application that helps new developers master programming skills and improve their chances of getting a developer job. The frontend is built with React and Redux, the backend is built with Ruby on Rails and PostgreSQL

## Demo
[Quiz Game live demo](https://quiz-box.netlify.app/#/flashcards)
![screen shot](https://github.com/yuanxizhang/quiz-game-frontend/blob/master/public/img/sreenshot.png)

## Table of contents
* [Problem](#Problem)
* [Technologies](#Technologies)
* [Diagram](#React App Diagram with Axios and Router)
* [Setup](#setup)
* [Features](#features)
* [Backend](#backend)
* [Frontend](#Frontend)
* [Inspiration](#inspiration)

## Problem
* Problem: New developers need simple tools to learn, to test their knowledge level, and to find a job
* Solution: Use flashcards to learn, use quiz to test, use job search tool to get a developer job
## Technologies
* React 16.13.1
* Redux 4.0.5
* Rails 6.0.3
* PostgreSQL 12.3
* Bootstrap 4.5.2
* axios 0.21.0
## React App Diagram with Axios and Router
![diagram](https://github.com/yuanxizhang/quiz-game-frontend/blob/master/public/img/diagram.png)
## Setup
Download [node.js](https://nodejs.org/en/download/) to run this app.

To run the application in development mode in the project directory:
```
npm start
```
Navigate to http:localhost:3000 in any browser to preview the app live

To build this application for production
```
npm run build
```
## Features
* Option to practice with the flashcards before taking the quiz
* Immediate feedback on the answer choice for each question
* Quiz Progress tracking
* View quiz result after completing the quiz 
* Option to repeat quiz
* Option to Search specific jobs using the job search form
## Frontend
To build a React app, install create-react-app:
```
npm install -g create-react-app
```
Create a new React project:
```
npx create-react-app quiz-game-frontend
```
## Backend 
To build a REST API with with Ruby on Rails.
```ruby
rails new quiz-game-api --database=postgresql --api
```
* [Rails API backend live demo on heroku](http://online-quiz-api.herokuapp.com/api/v1/tests)
* [Rails backend code on Github](https://github.com/yuanxizhang/quiz-game-api)

