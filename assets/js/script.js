"use strict"


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    let datas = "";
    let tbody = document.querySelector("tbody");
    posts.forEach(data => {
        datas += `
            <tr class="table-rows ">
                <th scope="row" class="user-id">${data.userId}</th>
                <td  class="data-id">${data.id}</td>
                <td>${data.title}</td>
            </tr> 
        `;
    });
    tbody.innerHTML = datas;
    async function getById(id) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const postId = await response.json();
        return postId;
    }
    let rows = document.querySelectorAll(".table-rows");
    rows.forEach(row => {
        row.addEventListener("click", function () {
            modal.style.display = "block";
            let dataId = document.querySelector(".data-id");
            let dataIdNum = parseInt(dataId.innerText);
            let modalText = document.querySelector(".modal-content p");
            getById(dataIdNum).then(postId => {
                if (postId.id === dataIdNum) {
                    modalText.innerText = row.innerText;
                  
                }
            });
        });
    });
};

let buttonData=document.querySelector("button")
buttonData.addEventListener("click",function(){
    getPosts();
})