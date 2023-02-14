// Function to gather all elements and functions  
function initGroceryList() {

    // Get elements from HTML
    const inputElement = document.getElementById('userInput');
    const addButton= document.getElementById('add');
    const resultBox= document.getElementById('allItems');
    const deleteAllButton= document.getElementById('deleteAllButton');
    const buttonStart = document.getElementById('buttonStart');
    const groceryListContainer = document.querySelector('.groceries');

    //initialize tasks array
    let tasks = [];
    if(localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(item => {
            renderListItem(item) 
        })
    }
    

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
        // Clear tasks array and remove from local storage
        tasks = [];
        localStorage.removeItem('tasks');
    }

    // Function that listens to the 'Add' button and adds an item to the grocery list
    function addGrocery() {
        // Get the value entered in the input field
        const itemValue = inputElement.value.trim();

        // If no value is entered, return without doing anything
        if (itemValue === '') return;
        
        // add item value to task and localstorage
        tasks.push(itemValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderListItem(itemValue)

        // Reset the input value
        inputElement.value = '';  
    }

    function renderListItem(itemValue) {
        // Create a list item to hold the value and other elements
        const item = document.createElement('li');
        item.textContent = itemValue;

        // Create a checkbox element
        const checkBox = document.createElement('input');

        // Set the type of the checkbox to be a checkbox
        checkBox.type = 'checkbox';

        // Style the checkbox
        checkBox.classList.add('checkbox-li');

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

        item.appendChild(deleteButton);

        // For styling the trash button in CSS
        deleteButton.classList.add('delete-button');      

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
            // Get the index of the item in the tasks array
            const index = tasks.indexOf(item.textContent);

            // Remove the item from the tasks array
            tasks.splice(index, 1);

            // Remove the item from the result box
            resultBox.removeChild(item);

            // Update the tasks array in local storage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    }
}


// Call the initGroceryList function to start the application
initGroceryList();






