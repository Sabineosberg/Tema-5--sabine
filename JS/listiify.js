function initGroceryList(){

// Hente elementer
const inputElement= document.getElementById('userInput');
const addButton= document.getElementById('add');
const resultBox= document.getElementById('allItems');
const deleteElement= document.getElementById('deleteButton');

// Lyttefunksjon
addButton.addEventListener('click', addGrocery);
deleteElement.addEventListener('click', deleteFunction);

function deleteFunction(){
    resultBox.innerHTML="";
}


// Accessibility krav: navigasjon med tastatur (add-button)
window.addEventListener('keyup', (add) => {
    if(add.key === 'Enter') {
        addGrocery();
    }
});

function addGrocery(){
    const liElement = document.createElement('li');
    

    if(inputElement.value !== ''){
        
    

    liElement.textContent = "- " + inputElement.value;
    

    liElement.addEventListener('click', function(){
        liElement.style.textDecoration= "line-through";
    })

    const checkBox = document.createElement('input');
        console.log(checkBox)
        checkBox.setAttribute('type', 'checkbox');
        //checkBox.classList.add('checkBox');
        liElement.prepend(checkBox);

    const btn = document.createElement('button');
    const imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', './ASSETS/garbage.png');
    btn.appendChild(imgDelete)
    liElement.appendChild(imgDelete)

    
    //resultBox.insertAdjacentElement("beforeend", liElement);
    inputElement.value= "";
    resultBox.appendChild(liElement);

    btn.addEventListener('click', () => {
        resultBox.removeChild(liElement)
    })
    
    }
};


}


initGroceryList();



// Create checkbox og søppelkasse når jeg legger inn fra inputElement. 
/* let checkBox= document.createElement('p');
checkBox */
// Når jeg krysser av checkbox, kommer det linethrough

// Slette hver og en når jeg trykker på søppelkasse





