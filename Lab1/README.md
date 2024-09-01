# Exercise 1

This lab exercise is focused on building a simple interactive web page using HTML, CSS, and JavaScript. The task involves creating a light switch interface that can toggle a lightbulb on and off.

![Lightbulb Off](../Lab1/docs/lab1_ex_1_off.png)
![Lightbulb On](../Lab1/docs/lab1_ex_1_on.png)

## Project Structure

- **HTML**: The interface consists of a switch component and a lightbulb icon. The switch toggles between "On" and "Off" states.
- **CSS**: The styles control the appearance of the switch and the lightbulb. The lightbulb changes color when switched on or off.
- **JavaScript**: Handles the logic for toggling the lightbulb on and off when the switch is clicked.

### Files:

- `index.html`: The main HTML file containing the structure of the page.
- `style/style.css`: Contains the styles for the switch and lightbulb.
- `script/script.js`: Contains the JavaScript logic to toggle the lightbulb.

### How It Works:

1. The light switch is represented as a checkbox input wrapped in a label with two spans for the "On" and "Off" states.
2. When the checkbox is toggled, the lightbulb's class is updated, which in turn triggers a CSS style change, simulating the light turning on or off.

### How to Run:

Simply open the `index.html` file in your browser to see the interactive switch in action.

Enjoy experimenting with this simple web application!

# Exercise 2 - Dice Game 🎲

This is a simple web-based dice game where multiple players compete to score the highest points after a set number of rounds. The game features an interactive dice roll animation, player management, and dynamic score tracking.

## 🎥 Video Demonstration

Check out a video demonstration of the game in action:

[![Watch the video](../Lab1/docs/lab1_ex_2_photo.png)](https://www.youtube.com/watch?v=EAVZAPzzfKg)

## 🚀 How to Play

1. **Set Up Players**: The game starts by asking the user for the number of players and their names.
2. **Rolling the Dice**: Each player takes turns rolling the dice by clicking the "Roll" button.
3. **Scoring**: The player’s score increases by the number shown on the dice.
4. **Winning**: After the predefined number of rounds, the player with the highest score wins.

## ✨ Features

- Smooth dice roll animation
- Player management (adding names, tracking scores)
- Rounds and turn management
- Automatic winner announcement and game reset

## 📜 Code Highlights

- JavaScript handles game logic, including player turns, round progression, and score calculation.
- Dice roll animation is powered by CSS transitions and keyframe animations.

## 🛠️ Tech Stack

- HTML
- CSS (including Tailwind for styling)
- JavaScript

## 📸 Media

Enjoy the game and happy rolling! 🎉

## Exercise 3 - Canvas Drawing with Navigation 🎨

This exercise is about creating an interactive drawing application where users can draw lines and points on a canvas element by navigating in different directions using buttons. The project demonstrates the use of HTML, CSS, and JavaScript to build a dynamic and visually appealing web page.

![Steps](../Lab1/docs/lab1_ex_3_photo.png)

## 🚀 How It Works

1. **User Input**: The user begins by specifying the starting coordinates (`x`, `y`) and the step size (`difference`) through prompt dialogs.
2. **Canvas Setup**: The canvas is initialized with a width and height of 500x500 pixels. The line properties, including width, cap style, and color, are set using JavaScript.
3. **Drawing**: 
   - **Points**: A red point is drawn at the starting coordinates using the `drawPoint` function.
   - **Lines**: As the user clicks the navigation buttons (up, down, left, right), the application draws lines in the corresponding direction using the `drawLine` function, with the point marking the end of each line.
4. **Navigation**: Four buttons allow the user to navigate in different directions, drawing continuous lines on the canvas. The position updates dynamically based on the user’s input.

## ✨ Features

- **Interactive Drawing**: Users can create complex designs by combining line segments.
- **Dynamic Navigation**: Movement controls allow for intuitive interaction with the canvas.
- **Styled Interface**: The buttons and canvas are styled with modern CSS, including hover effects and smooth transitions.

## 🛠️ Tech Stack

- **HTML**: Defines the structure of the web page, including the canvas and navigation buttons.
- **CSS**: Enhances the visual appeal of the interface, with styles for the canvas and navigation controls.
- **JavaScript**: Manages the drawing logic and user interaction, updating the canvas in real-time based on user input.

## 🎨 Try It Out!

Open the `index.html` file in your browser and start drawing by clicking the navigation buttons. Experiment with different starting points and step sizes to create unique patterns and designs. Happy drawing! 🎉
