// Get screen and buttons
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

// Add event listeners to buttons for input
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.num; // Get the value from the button
        if (value !== undefined) {
            screen.value += value; // Append button value to the screen
        }
    });
});

// Evaluate the expression when '=' button is clicked
equal.addEventListener('click', () => {
    // Check if the screen is not empty
    if (screen.value !== '') {
        try {
            // Remove any leading/trailing whitespace and evaluate the expression
            const result = eval(screen.value.trim());
            screen.value = result; // Display the result on the screen
        } catch (error) {
            // Handle any errors in expression evaluation (like incomplete input)
            screen.value = 'Error';
        }
    }
});

// Clear the screen when 'C' button is clicked
clear.addEventListener('click', () => {
    screen.value = ''; // Clear screen
});
