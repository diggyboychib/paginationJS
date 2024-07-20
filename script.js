window.onload=apiCall();
let data;
async function apiCall(){
    const urlData=await fetch("https://jsonplaceholder.typicode.com/posts");
    data=await urlData.json();
    loadData();
    getNav();
}
let pageIndex=0;
let postPerPage=5;
function loadData(){
    const container=document.getElementById("container");
    container.innerHTML=""

    for(let i=pageIndex*postPerPage;i<(pageIndex*postPerPage)+postPerPage;i++){
    let innerDiv=document.createElement("div")
        innerDiv.setAttribute("class","inner-div")
        innerDiv.innerHTML=`
        <div class="title">${i+1 + " "+data[i].title}</div>
        <div class="body">${data[i].body}</div>
        `
        container.appendChild(innerDiv)
    }
}

function getNav(){
    let navbar=document.getElementById("nav");
    let navItem;
    for(let i=0;i<data.length/postPerPage;i++){
        navItem=document.createElement("div");
        navItem.textContent=`${i+1}`;
        navbar.appendChild(navItem);

        navItem.addEventListener("click",function(){
            pageIndex=this.innerHTML-1;
            loadData();
        })
    }
    
}




