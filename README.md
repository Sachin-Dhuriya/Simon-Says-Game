# Simon Says Game
Simon Says Game is a fun and interactive memory game where players replicate a sequence of colors generated by the game. Each level progressively adds a new color to the sequence, challenging the player's memory and reaction speed. This project serves as a classic example of using HTML, CSS, and JavaScript to build interactive, browser-based applications.

# Features
Responsive Layout: The game adapts to different screen sizes, ensuring smooth play on both desktop and mobile devices.

Dynamic Game Levels: Each correct player response increases the game level, making the sequence progressively longer.

Visual Feedback: Flash effects and background color changes provide feedback on user actions and game events (correct sequences, game over).

High Score Tracking: The game keeps track of the highest score achieved during the session, displayed prominently for motivation.

# Technologies Used
HTML: Provides the structure of the game interface.

CSS: Styles the buttons and layout, with media queries for responsive design.

JavaScript: Implements the game logic, including sequence generation, user input handling, level progression, and high score tracking.

# Components
HTML Structure:
Title and Instructions (h1 and h2 tags) guide players on how to start and play the game.
button-container: A flexbox layout that holds the four colored buttons (red, yellow, green, blue).

CSS Styling:
.btn classes style each colored button with distinct colors and flashing effects.
Media queries adjust button size and text for better accessibility on smaller screens.

JavaScript Logic:
gameSeq and userSeq arrays track the game's and user's color sequences.
LevelUp function adds a new color to the sequence at each level.
checkAns function compares the player’s input to the generated sequence, determining if the player advances or if the game ends.
Event listeners handle user input, enabling interaction through mouse clicks or keyboard presses.

# How to Play
Start the Game: Press any key to begin.

Follow the Sequence: Watch the color pattern displayed by the game, then click the buttons in the same order.

Level Up: Successfully repeat the pattern to advance to the next level.

Game Over: If you click the wrong sequence, the game ends, and your score is displayed. Press any key to start a new game.
