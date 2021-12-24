const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const todoUl = document.querySelector(".todo-ul");

addButton.addEventListener("click", todoDiv);

function todoDiv() {
    const div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute(
        "style",
        "display:flex;flex-direction:row;justify-content:space-between;"
    );

    const liContainer = document.createElement("div");
    liContainer.classList.add("li-container");

    const li = document.createElement("li");
    li.classList.add("li");
    li.style.listStyle = "none";

    liContainer.appendChild(li);

    if (input.value != "") {
        li.innerHTML = input.value;
        input.value = "";
        input.style.border = "1px solid rgb(6 149 246)";
    } else {
        input.style.border = "1px solid red";
        return;
    }

    const inputRemove = document.querySelector(".input").value;
    inputRemove.innerHTML = "";

    div.appendChild(liContainer);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";

    btnContainer.appendChild(checkBtn);

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";

    btnContainer.appendChild(trashBtn);

    div.appendChild(btnContainer);

    todoUl.appendChild(div);

    const container = document.querySelector(".container");

    container.addEventListener("click", checkMarkValue);

    trashBtn.addEventListener("click", removeValue);

    const clearAllValuesButton = document.querySelector(".clear-all-button");

    clearAllValuesButton.addEventListener("click", clearAllValues, true);

    function clearAllValues() {
        const todoUl = document.querySelector(".todo-ul");

        const div = document.querySelector(".div");

        todoUl.removeChild(div);
    }
}

function checkMarkValue(e) {

    const container = document.querySelector(".container");

    const target = e.target;

    if (!target) {
        return;
    }

    if (target.matches(".check-btn") && container.contains(target)) {

        const todo = target.closest(".btn-container");

        todo.previousElementSibling.classList.toggle("toggle-li");
    }

}

function removeValue() {
    const removeDiv = document.querySelector(".div");
    todoUl.removeChild(removeDiv);
}