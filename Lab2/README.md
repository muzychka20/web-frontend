
# Exercise 1 - Canvas Drawing with Navigation 🎨

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
