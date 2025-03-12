
let clickMe = document.getElementById("click1");
let messageParagraph = document.getElementById("messageParagraph");

function click1() {
    let ask;
    ask = {};
    ask.me = prompt("Have you considered coding?");
  
    messageParagraph.innerHTML = `awdawdawdwwd${ask.me}`;
  
  }

  clickMe.onclick = click1;