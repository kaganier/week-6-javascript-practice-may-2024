let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  playerOne.eyecolor = prompt ("What color are your eyes?");



  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}?`;
  messageParagraph.innerHTML =`Is ${playerOne.eyecolor}your favorite eye color?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer;
  customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  
  customer.height = prompt ("How tall are you?")

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}.`;
  messageParagraph.innerHTML = `Hi. ${customer.name}.${customer.height}is your current recorded height.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
  pet.color = prompt ("What color is your pet?");
  pet.type = prompt ("What type of pet do you own?")

  // Try it!
  // TODO: create a prompt to ask about a pet

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Hi you own a ${pet.color} ${pet.type}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
  let activity;

  activity = {}

  activity.fav = prompt ("What is your all time favorite activity?");

  messageParagraph.innerHTML = `${activity.fav} is your favorite activity"`;


  
}

part4.onclick = day1Part4;