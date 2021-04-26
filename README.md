# Rock, Paper, Scissors

Rock, Paper, Scissors is a web application for playing rock, paper, scissors as well as a more difficult version which presents 5 possible player selections.

The project spec can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).

## Features

![Screenshot of Rock, Paper, Scissors landing page](https://user-images.githubusercontent.com/12686237/116107336-f1577f00-a680-11eb-88aa-738433386204.png)
* The user is presented with historical win stats in the right and left columns of the page, and two options for playing the game: classic and difficult.
* In the above image I am hovering over the difficult game option to illustrate on hover styling.

![Screenshot of Rock, Paper, Scissors choose fighter page](https://user-images.githubusercontent.com/12686237/116107403-02a08b80-a681-11eb-89c8-977fae2683e9.png)
* After choosing the game type the user is presented with the choice of fighters they have to shoot with.
* The user is also presented with a change game button in the left column. Clicking this button will take them back to the landing page.
  * The [demonstration](https://www.youtube.com/watch?v=a2M5h1B9DQQ) has this occurring only after the first game is completed but I chose to display it here because I think it makes for a better user experience. #FOMO

![Screenshot of Rock, Paper, Scissors who won page](https://user-images.githubusercontent.com/12686237/116107452-0b915d00-a681-11eb-83a9-d2b00df40f4c.png)
* The user is presented with a message regarding who won (or if it was a draw), each player's chosen fighters, and can see that the winner's score has increased by 1.
* After 2 seconds the page automatically refreshes to the choose fighter page for the game type they last selected. The change game button is disabled during this 2 second period.

## Contributors

This application was built by [Alex Kio](https://github.com/alexmkio/); a Front End Engineering, Mod 1 student at the [Turing School of Software and Design](https://turing.io/).

## Technologies Used

This application uses vanilla JavaScript, HTML, and CSS.

## Future Additions

I am unlikely to add any future functionality to this application, but here are some ideas for features that might improve it:

* Mobile-first design breakpoints
* Dark mode
* Utilize localStorage to allow storage of multiple players stats (as well as the stats of the corresponding computer player)
* Allow user to choose the emoji that represents them
* Utilize a database to store user login credentials, emoji selections, and score
