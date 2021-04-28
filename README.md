# Rock, Paper, Scissors

Rock, Paper, Scissors is a web application for playing rock, paper, scissors as well as a more difficult version which presents 5 possible player selections.

The project spec can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).

## Goals
* Make a quality bugless application that follows all of the best practices (DRY, separates data from DOM, etc) and shows comprehension of Mod1 skill set.
* Push myself out of my comfort zone in at least one area. (Hint: I chose trying to make it mobile-first and responsive.)

## Features

![Screenshot of Rock, Paper, Scissors landing page](https://user-images.githubusercontent.com/12686237/116107336-f1577f00-a680-11eb-88aa-738433386204.png)
* The user is presented with historical win stats in the right and left columns of the page, and two options for playing the game: classic and difficult.
* In the above image I am hovering over the difficult game option to illustrate on hover styling.

![Screenshot of Rock, Paper, Scissors choose fighter page](https://user-images.githubusercontent.com/12686237/116107403-02a08b80-a681-11eb-89c8-977fae2683e9.png)
* After choosing the game type the user is presented with the choice of fighters they have to shoot with.
* The user is also presented with a change game button in the left column. Clicking this button will take them back to the landing page.
  * The [demonstration](https://www.youtube.com/watch?v=a2M5h1B9DQQ) has this occurring only after the first game is completed but I chose to display it here because I think it makes for a better user experience. #FOMO
* I purposefully did not include the player emoji on click of fighter as is displayed in the [demonstration of the game](https://www.youtube.com/watch?v=a2M5h1B9DQQ). I did not appreciate the look.

![Screenshot of Rock, Paper, Scissors who won page](https://user-images.githubusercontent.com/12686237/116107452-0b915d00-a681-11eb-83a9-d2b00df40f4c.png)
* The user is presented with a message regarding who won (or if it was a draw), each player's chosen fighters, and can see that the winner's score has increased by 1.
* After 2 seconds the page automatically refreshes to the choose fighter page for the game type they last selected. The change game button is disabled during this 2 second period.

## Contributors

This application was built by [Alex Kio](https://github.com/alexmkio/); a Front End Engineering, Mod 1 student at the [Turing School of Software and Design](https://turing.io/).

## Technologies Used

This application uses vanilla JavaScript, HTML, and CSS.

## Reflections on Challenges and Wins
* Win: I loved making the classes, instantiating them, and manipulating their data and methods through one another (it was just like "playing" [mythicals](https://github.com/alexmkio/javascript-foundations)).
* Challenge: I kept trying to think of ways to use for loops and couldn't find many places where they would be more efficient or empathetic. I think I only have one.
* Win: I challenged myself to utilize scaleable measurements of area and font-size relying mainly on viewport.
* Challenge: I attempted mobile-first design and responsiveness and 1) I'm not satisfied, and 2) I ran into a lot of issues. Mainly, as soon as I decided that I wanted to move things around for mobile I ran into a whole list of issues relating to queryselectors, eventListeners, etc.

## Future Additions

I am unlikely to add any future functionality to this application, but here are some ideas for features that might improve it:

* Mobile-first design & breakpoints
* Dark mode
* Utilize localStorage to allow storage of multiple players stats (as well as the stats of the corresponding computer player)
* Allow user to choose the emoji that represents them
* Utilize a database to store user login credentials, emoji selections, and score
