const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //Unicode character ×
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click",function(e){
    // e (event object) captures the details of what was clicked.
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        // If true, it toggles the "checked" class on the <li> (adds/removes the "completed" effect).
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML  = localStorage.getItem("data");
}
showTask();