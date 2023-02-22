// console.log("load");
// console.log("loaded");

// function-is a set of Code/

// function functionName(name, category){
// alert(`Welcome ${name}! You are ${category}`)}
// functionName("Ankita","Brilliant.");

// function login(name){
//     alert(`Please sign in to your account ${name}.`)}

// login("Ankita",);

function addTodo() {
    var gettingTodos = document.getElementById('todohere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById("todohere").value = "";
        cs();
        alert('added!');
    } else {
        alert("add todo first,before submitting!");
    }
}

// function cs(){
//     var mainDiv = document.getElementById("displayTodos");
//     var div =document.createElement("div");
//     var h1 = document.createElement("h1");
//     h1.innerText="structure created!"
//     h1.style.color="Red";
//     div.append(h1);
//     var h1sec = document.createElement("h1");
//     h1sec=innerText="Hello world!";
//     h1sec.style.color="Blue";
//     div.append(h1sec);
//     mainDiv.append(div);
// }




function cs() {
    var divFromHtml = document.getElementById('displayTodos');
    var gettingTodosFromLS = JSON.parse(localStorage.getItem('Todos'));
    console.log(gettingTodosFromLS, 'gettingTodosFromLS');

    var finalStructure = []

    for (var i = 0; i < gettingTodosFromLS.length; i++) {
        // console.log(gettingTodosFromLS[i])
        finalStructure += `<div id ="row">
                                <p>${gettingTodosFromLS[i]}</p>
                                <i id ="delete"onclick="deleteTodo(${i})" class="fa-solid fa-trash"></i>
                            </div>`
    }
    divFromHtml.innerHTML = finalStructure;
}

cs();

function deleteTodo(todoIndex) {
    console.log(todoIndex);
    var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
    // local storage se todos ko bahar nikala


    todosFromLS.splice(todoIndex,1)
    localStorage.setItem('Todos', Json.stringify(todosFromLS))
    cs();
}

