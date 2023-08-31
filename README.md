# WebApp boilerplate with React JS

### Requirements:

-   Make sure you are using node version 10
-   Using `Node.js`, install `React` and `Webpack` on your computer. This code makes use of the `Flux` framework and the `React-Router-Dom` package

1. Install the packages:

```
$ npm install
```

2. Create a .env file:

```
$ cp .env.example .env
```

3. And last, start the script :

```bash
$ npm run start
```

## Technical info:

-   This project is stylized using `Bootstrap`
-   No `HTML5` was used outside the `React` files.
-   Heavy use of the `Flux` framework.

## Gameplay

-   Home page: set your player name.
-   The player name is not obligatory. If you don't set your player name, you will be `Player`.

![Home Page](src/img/Screenshot%202023-08-30%20at%2020.52.42.png)

-   Boat selection page: here we set up our naval fleet.
-   First select an orientation (`Horizontal` or `Vertical`).
-   Second select a ship type (`Carrier`, `Battleship`, `Destroyer` or `Patrol boat`).
-   Third select in your board a cell to place your `Ship`.
-   Once you finished placing your `Ships` click on the yellow button.

![Boat Selection](src/img/Screenshot%202023-08-30%20at%2020.53.08.png)

-   Game page: play against the cpu!.
-   Here the `Player` and the `Cpu` will attack each other in turns until the `Player` or the `Cpu` runs out of lives.
-   Once the `Player` or the `Cpu` runs out of lives, the game will finish and the winner will be announced.
-   To play again, you need to click on the `Battleship`, on the top rigth of the page.

![Game](src/img/Screenshot%202023-08-30%20at%2020.54.32.png)

## Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
