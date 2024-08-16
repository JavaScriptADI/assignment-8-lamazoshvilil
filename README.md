# Assignment DOM


## Quiz
1. What is the DOM?
2. What is the difference between `document` and `window`?
3. What is the difference between `document.querySelector()` and `document.querySelectorAll()`?
4. What is the difference between `element.innerHTML` and `element.innerText`?
5. How to create a new element in the DOM?
6. How to add a new element to the DOM?
7. How to remove an element from the DOM?
8. How to add or remove a class to an element?
9. How to change the style of an element?
10. How to get children of an element?


## Exercise
1. Create a new HTML file and add a button to it from JavaScript.
2. Given `<ul>` in HTML file, add 10 new `<li>` elements to it from JavaScript.
    ```html
    <ul id="list"></ul>
    ```
3. Given the following HTML file, add event listener for the button to change the background color of the page.
    ```html
    <button id="button">Change Background</button>
    ```
4. Given the following HTML file, add event listener for the button to change the text of the paragraph.
    ```html
    <button id="button">Change Text</button>
    <p id="paragraph">Hello World</p>
    ```
5. Given the following HTML file, add event listener for the button to remove the paragraph.
    ```html
    <button id="button">Remove Paragraph</button>
    <p id="paragraph">Hello World</p>
    ```
6. Given the following HTML file, create a style and add class `.highlight` to it. Add event listener for the button to toggle the class to the paragraph.
    ```html
    <style>
    .highlight {
        background-color: yellow;
    }
    </style>
    <button id="button">Toggle</button>
    <p id="paragraph">Hello World</p>
    ```
7. Create a game where the user has to click on the button as many times as possible in 10 seconds. Display the number of clicks after 10 seconds. 
8. Create a tic-tac-toe game. 
    1. Create a 3x3 grid.
    2. Add event listener to each cell to change the text to `X` or `O`.
    3. Add event listener to the button to reset the game.
9. Create a to-do list. Use form submit or button click event to add new to-do to the list. Add event listener to each to-do to toggle line-through style (use css class).
    1. Add input field to add new to-do.
    2. Add button or form to add new to-do.
    3. Add event listener to the button or form to add new to-do to the list.
    4. Add event listener to each to-do to toggle line-through style.