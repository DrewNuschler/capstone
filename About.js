
let part1 = document.getElementById("part1");
let messageParagraph = document.getElementById("messageParagraph");

function click1Part1() {
    let hey;
    hey = {};
    hey.you = prompt("What's your name?");
  
    messageParagraph.innerHTML = `${hey.you}, Thank you for visiting my new portfolio page.`;
  
   }

  part1.onclick = click1Part1;

  function show() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
      } 

