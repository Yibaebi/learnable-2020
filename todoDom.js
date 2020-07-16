let form = document.getElementById("form")
let itemList = document.getElementById("items");


form.addEventListener("submit", addTodo);

function addTodo(event) {
    event.preventDefault();

    //Get user to-do input;
    let userInput = document.getElementById("userInput").value;

    console.log(userInput);
    //Create new list item
    let li = document.createElement("li");

    //Create new input form to hold todo list 
    let inputForm = document.createElement("input");
    inputForm.className = "list-group-item";
    inputForm.value = userInput;
    inputForm.setAttribute("disabled", "");


    //Create edit button;

    // <button id = "buttons"  aria-hidden="true"></button>
    let editButton = document.createElement("button");
    editButton.id = 'buttons';
    editButton.className = "fa fa-pencil-square-o fa-1.8x";
    console.log(editButton);





    //Create a check button to indicate a task has been completed

    let checkButton = document.createElement("button");
    checkButton.id = 'buttons';
    checkButton.className = "fa fa-check-square-o";

    //create remove button
    let removeButton = document.createElement("button");
    removeButton.id = 'buttons';
    removeButton.className = "fa fa-trash";

    //Add input form to the list element;
    li.appendChild(inputForm);
    li.appendChild(removeButton);
    li.appendChild(editButton);
    li.appendChild(checkButton);

    editButton.addEventListener('click', () => this.edit)
    //   // //Add created list to created todo list
    itemList.appendChild(li);

    //Clear input form
    function myFunction() {
        document.getElementById("form").reset();
    }

    myFunction();
}

//Create Remove event
itemList.addEventListener('click', editDeleteCheck);

function editDeleteCheck() {
    function removeList(event) {
        if (event.target.classList.contains('fa-trash')) {
            if (confirm("Are you sure?")) {
                let li = event.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }

//     itemList.addEventListener('click', checkList);

//     function checkList(event) {
//         if (event.target.classList.contains('fa-check-square-o')) {
//             console.log(1)
//             // this.childNodes[0].style.color = "red";
//             // this.childNodes[0].style.textDecoration = "line-through";
//             // this.childNodes[0].style.fontStyle = "italic";
//         }
//     }
// }