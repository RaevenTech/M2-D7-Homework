
 
// EX11) Write a function to add a new link into the navbar**
 function addNewLink() {
     let link = document.createElement("a")
     link.href = "#"
     link.innerHTML = "newLink";
     nav.appendChild(link)
 }
 const nav = document.querySelector(".nav")

 // EX12) Write a function to change the color of the main title**
 function changeTitleColor() {
    let title = document.querySelector('h1')
    title.style.color = "green"
}
// EX13) Write a function to change the background of the jumbotron

function changeJumboBg (){

}



// EX14) Write a function to remove all the links under "Elsewhere"

function removeElsewhereLinks() {
    let elseLinks = document.querySelectorAll(".list-unstyled")[1];
    elseLinks.remove();
  }

  // EX15) Write a function to change the column size for heading in jumbotron

  function changeColumn (){

  }
// EX16) Write a function to remove the "Search" magnifying glass icon

function removeMagGlass (){

}
/*
JS Exercises







EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
*/