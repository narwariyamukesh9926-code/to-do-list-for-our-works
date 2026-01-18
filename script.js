let bhav = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (bhav.value == "") {
        alert("please enter task")
    } else {
        let newEle = document.createElement('ul');
        newEle.innerHTML = `${bhav.value}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171414"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
        text.appendChild(newEle);
        bhav.value = "";
        newEle.querySelector("svg").addEventListener("click", remove);
        function remove() {
            newEle.remove();
        }







    }
}


