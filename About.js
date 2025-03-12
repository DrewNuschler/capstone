
let openMe = document.getElementById("part1");
let messageParagraph = document.getElementById("messageParagraph1");

function click1Part1() {
    let hey;
    hey = {};
    hey.you = prompt("Have you considered coding?");
  
    messageParagraph.innerHTML = `awdawdawdwwd${hey.you}`;
  
  }

  openMe.onclick = click1Part1;