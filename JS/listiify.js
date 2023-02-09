function initGroceryList(){

// Hente elementer
const inputElement= document.getElementById('userInput');
const addButton= document.getElementById('add');
const resultBox= document.getElementById('allItems');
const deleteElement= document.getElementById('deleteButton');

// Lyttefunksjon
addButton.addEventListener('click', addGrocery);
deleteElement.addEventListener('click', deleteFunction);


// Accessibility krav: navigasjon med tastatur (add-button)
window.addEventListener('keyup', (add) => {
    if(add.key === 'Enter') {
        addGrocery();
    }
});

function addGrocery(){
    const liElement = document.createElement('li');
    

    if(inputElement.value !== ''){
        const checkBox = document.createElement('input');
        console.log(checkBox)
        checkBox.setAttribute('type', 'checkbox');
        //checkBox.classList.add('checkBox');
        liElement.appendChild(checkBox);
    

    liElement.textContent = "- " + inputElement.value;
    resultBox.appendChild(liElement);

    liElement.addEventListener('click', function(){
        liElement.style.textDecoration= "line-through";
    })
    
    //resultBox.insertAdjacentElement("beforeend", liElement);
    inputElement.value= "";
    }
};

function deleteFunction(){
    resultBox.innerHTML="";
}
}


initGroceryList();



// Create checkbox og søppelkasse når jeg legger inn fra inputElement. 
let checkBox= document.createElement('p');
checkBox
// Når jeg krysser av checkbox, kommer det linethrough

// Slette hver og en når jeg trykker på søppelkasse





