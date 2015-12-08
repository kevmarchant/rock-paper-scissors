# Rock, Paper, Scissors (RPS) game by Kevin Marchant
Creating the Rock, Paper, Scissors game for eBay.

I use a Mac, so the instructions below will workly nicely on a Mac using Terminal.  You may need to translate some instructions for your own OS, if it is different.

## See it in action!

The production assets from this test are deployed to http://kevinmarchant.com/rock-paper-scissors if you'd like to see it working.

## Tech stack
This game uses the following technologies:
* [node.js] - I'm using npm to install dependencies
* [gruntjs] - Grunt is the task runner, for compiling SASS and JS for production
* [requirejs] - JS module loader - I'm a big fan!
* [knockoutjs] - I'm using knockout.js to create my viewmodels and write tests around them
* [karma] - Karma is the JS test runner
* [karma-jasmine] - Jasmine performs the actual JS tests

The following Grunt plugins check my code for mistakes in the Javascript, and compiles it for production:
* [grunt-contrib-watch] - Run tasks whenever watched files change
* [grunt-contrib-uglify] - Minify files with UglifyJS
* [grunt-contrib-jshint] - Validate files with JSHint
* [grunt-contrib-sass] - Compile Sass to CSS
* [grunt-contrib-cssmin] - Compress CSS files

## Installation
If you haven't already, please install [node.js] using the downloadable installer.  Once installed check that you can run npm by opening a Terminal window and typing:

```sh
$ npm version
```

If you already have npm, great!  Ensure that npm is up-to-date with the following command:

```sh
$ npm update -g npm
```

Then, you will need [git], which again is a downloadable installer.  Once installed check that you can run it:

```sh
$ git version
```

RPS uses a [ruby] gem to compile the SASS, which will need installing.  If you're on OS X or Linux you probably already have Ruby installed; test with:

```sh
$ ruby -v
```

You then need to install the SASS gem like so:

```sh
$ sudo gem install sass
```

Once these are all installed, navigate to a memorable folder location and clone the repository:

```sh
$ cd ~/MyRepos
$ git clone https://github.com/kevmarchant/rock-paper-scissors.git
```

Enter the newly created directory and install the dependencies using npm:

```sh
$ cd rock-paper-scissors
$ npm install
```

That's it!  You are ready to go.

## Playing and modifying the game

You can load the index.html file in your browser and enjoy your hour break, or you can modify the source code as you wish.  

As a general guide, here are the files you might want to modify:

* /public/index.html - The HTML page that loads in the CSS and JS
* /scripts/main.js - This is the main config file for require, which loads knockout and the viewmodels
* /scripts/viewmodels/*.js - These are the knockout viewmodel files
* /scripts/tests/*.js - Here you will find all the Jasmine tests which surround the knockout viewmodels
* /styles/styles.scss - The top level SASS file, which includes the partials to make the final CSS file
* /styles/partials/*.scss - Here you will find the partials, which are named to make it easy to find what you need

If you make any changes, you will need to recompile the CSS and/or JS files.  You can either make your changes and run:

```sh
$ grunt
```

...or you can have Grunt watch all the files in the /styles and /scripts folders, and recompile as you go:

```sh
$ grunt watch
```

Be sure to check the output, as the JS Lint task will show you any errors in your Javascript.

If you are editing the JS files, you might want to run Karma in the background, to check that the application still works as expected.  Simply run:

```sh
$ karma start
```

## Notes about this test

This was written as Minimum Viable Product.  Criteria that I tried to meet include:

* Can be played as Human vs Robot, Robot vs Robot, Human vs Human or Robot vs Human.  I wanted to show the flexibility I had built into the viewmodels and game architecture
* Achieve a visually appealing game with animation and interaction without resorting to jQuery - all animation is achieved using CSS3
* Make the game extensible - the playableOptionsViewModel has a multidimensional array containing available options and decision mappings, and all logic is based around those options
* Ensure that the code is simple and legible, to allow other developers to modify it with ease
* Make the MVP very simple and intuitive to use, so that it doesn't need instructions, and can be used by children right up to tech-savvy adults
* Seperate all Javascript from the DOM and write tests around each of the JS viewmodels, to show clean seperation of business logic from UI, and a BDD approach to FE development
* Base64 encode images and embed them in the CSS to reduce HTTP requests and avoid delays while loading the hand images
* Show good optimisation for production, which includes concatenation/minification of CSS and JS assets
* Keep the UI simple, to avoid too many cross-browser issues
* Document installation instructions and approach overview in this readme, to show use of technologies to solve this problem

Only currently having access to a Mac, this game has been tested on the following browsers/devices:

* Firefox for Mac v42.0
* Chrome for Mac v47.0
* Safari for Mac v9.0.1
* Safari on my iPhone 6 Plus

Further improvements that could be made if I were to develop the game further include:

* Optimisation for mobile - it works well on my iPhone 6 Plus but wouldn't work well on smaller devices
* Develop the Jasmine test suite - I have written a basic set around each viewmodel but they could go further
* Save results to a BE service - the scoreboard viewmodel would support that easily
* Make the robots learn patterns of decision making, based on previous input
* Save game state to localstorage to persist across page refreshes - it would be simple to build this into the game viewmodel

I have very much enjoyed writing this game, and I hope it meets the requirements as set out in the test brief!  I really appreciate all feedback, positive or otherwise, so I will wait with baited breath to hear your thoughts  :)

[node.js]: <https://nodejs.org/en>
[ruby]: <https://www.ruby-lang.org>
[git]: <http://git-scm.com>
[gruntjs]: <http://gruntjs.com>
[grunt-contrib-watch]: <https://github.com/gruntjs/grunt-contrib-watch>
[grunt-contrib-uglify]: <https://github.com/gruntjs/grunt-contrib-uglify>
[grunt-contrib-jshint]: <https://github.com/gruntjs/grunt-contrib-jshint>
[grunt-contrib-sass]: <https://github.com/gruntjs/grunt-contrib-sass>
[grunt-contrib-cssmin]: <https://github.com/gruntjs/grunt-contrib-cssmin>
[requirejs]: <http://requirejs.org/>
[knockoutjs]: <https://www.npmjs.com/package/knockout>
[karma]: <http://karma-runner.github.io>
[karma-jasmine]: <https://github.com/karma-runner/karma-jasmine>