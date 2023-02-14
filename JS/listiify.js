// Function to gather all elements and functions  
function initGroceryList() {

    // Get elements from HTML
    const inputElement = document.getElementById('userInput');
    const addButton= document.getElementById('add');
    const resultBox= document.getElementById('allItems');
    const deleteAllButton= document.getElementById('deleteAllButton');
    const buttonStart = document.getElementById('buttonStart');
    const groceryListContainer = document.querySelector('.groceries');

    // Scrolling down to Grocery list, when cliking on the button
    buttonStart.addEventListener('click', () => {
        groceryListContainer.scrollIntoView({ behavior: 'smooth'});
    });

    // Listen to buttons - will be placed further in functions
    addButton.addEventListener('click', addGrocery);
    deleteAllButton.addEventListener('click', deleteAll);

    // Accessibility requirement: navigation with keyboard (add-button)
    window.addEventListener('keyup', (event) => {
        // If user press the 'Enter' key, call the addGrocery function
        if(event.key === 'Enter') {
            addGrocery();
        }
    });

    // Function that listens to the 'Delete all' button
    function deleteAll() {
        // Remove all the content from the result box
        resultBox.textContent= '';
    }

    // Function that listens to the 'Add' button and adds an item to the grocery list
    function addGrocery() {
        // Get the value entered in the input field
        const itemValue = inputElement.value.trim();

        // If no value is entered, return without doing anything
        if (itemValue === '') return;
        
        // Create a list item to hold the value and other elements
        const item = document.createElement('li');
        item.textContent = itemValue;
    
        // Create a checkbox element
        const checkBox = document.createElement('input');

        // Set the type of the checkbox to be a checkbox
        checkBox.type = 'checkbox';

        // Style the checkbox
        checkBox.style.width = '25px';
        checkBox.style.height = '25px';
        checkBox.style.marginRight = '25px';
        checkBox.style.appearance = 'none'; // Remove the default appearance of the checkbox
        checkBox.style.border = '3px solid black'; // Add a black border
        checkBox.style.borderRadius = '4px'; // Give the checkbox rounded corners
        checkBox.style.outline = 'none'; // Remove the outline when the checkbox is clicked
        checkBox.style.cursor = 'pointer'; // Change the cursor to a pointer when the mouse is over the checkbox
        checkBox.style.backgroundSize = 'contain'; // Make the bckground image fit within the checkbox

        // Add a change event listener to the checkbox
        checkBox.addEventListener('change', function() {
            // If the checkbox is checked
            if (checkBox.checked) {
                // Set the background image to the check mark
                checkBox.style.backgroundImage = "url('./ASSETS/check.png')";
            } else {
                // Reset the background image and set the background color to white
                checkBox.style.backgroundImage = 'none';
                checkBox.style.backgroundColor = 'white';
            }
        })

        // Add checkbox to the list item before the input value
        item.prepend(checkBox);

        // Create a trash button
        const deleteButton = document.createElement('button');

        // Create an image for the trash button
        const deleteIcon = document.createElement('img');
        // Get image from files
        deleteIcon.src = './ASSETS/garbage.png';
        // Add the delete icon to the delete button
        deleteButton.appendChild(deleteIcon);
        // Add the delete button to the list item
        item.appendChild(deleteButton);

        // For styling the trash button in CSS
        deleteButton.classList.add('delete-button');      

        // Reset the input value
        inputElement.value= '';
        // Add the list item to the result box
        resultBox.appendChild(item);
        
        // Listen to the list item - when clicked, add or remove the line-through based on the checkbox's state
        item.addEventListener('click', (event) => {
            // Check if the target of the event is the checkbox
            if (event.target.type === 'checkbox') {
                // If the checkbox is checked, add a line-through to the list item
                if (event.target.checked) {
                    item.style.textDecoration = 'line-through';
                } else {
                    // If the checkbox is not checked, remove the line-through from the list item
                    item.style.textDecoration = 'none';
                }
            }
        });
            
        // Listen to the trash btton - when clicked, remove the item from the list
        deleteButton.addEventListener('click', (event) => {
            resultBox.removeChild(item);
        });
    }
}

// Call the initGroceryList function to start the application
initGroceryList();






