# Space Battle OOP Lab: 
- Build a game of battling alien spaceships using Javascript.
- Using OOP, loops, and functions to build a rudimentary space battle game.
- The game will be programmed for, and played using window.prompt to get input from the user and buttons in the browser, you can also use console.log and window.alert. You should not style the page until you first get all the functionality down. 
- Break the problem down as far as you can and don't move on until the smallest piece works. 

BIND METHODS TO USE THEM AS EVENT LISTENERS! 

Example: 
`class Example {`
`constructor(name){`
`this.name = name`
`this.method = this.method.bind(this)`
`}`
`methodFromExample(){`
`return this.name`
`}`
`}`

`const btnEl = document.querySelector('button')`
`btnEl.addEventListener('click', methodFromExample)`

## Game Specifications:
There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

### A game round would look like this:
- You attack the first alien ship
- If the ship survives, it attacks you
- If you survive, you attack the ship again
- If it survives, it attacks you again ... etc
- If you destroy the ship, you have the option to attack the next ship or retreat
- If you retreat, the game is over, perhaps leaving the game open for further developments or options
- You win the game if you destroy all of the aliens
- You lose the game if you are destroyed

### Ship Properties
hull is the same as hitpoints. If the hull reaches 0 or less, the ship is destroyed 
firepower is the amount of damage done to the hull of the target with a successful hit 
accuracy is the chance between 0 and 1 that the ship will hit its target 

- Your spaceship, the USS Assembly should have the following properties:
hull - 20
firepower - 5
accuracy - .7

- The alien ships should each have the following ranged properties determined randomly: You could be battling six alien ships each with unique values.
hull - between 3 and 6
firepower - between 2 and 4
accuracy - between .6 and .8

Example use of accuracy to determine a hit: 
`if (Math.random() < alien[0].accuracy) {`
`console.log('You have been hit!'); }`

Start with the actors and then the actions. In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an attack method (an action). 

A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.

- Output in Chrome console:
You can use CSS in your Chrome console messages. Above is a simple example where messages are easier to differentiate.
- Formula, use %c in the first argument to console log, and provide CSS to the second argument: 
`console.log('%c spacebattle', 'font-size: 40px');`
- Use multiple CSS properties: 
`console.log('%c You have done ' + player.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;');`
