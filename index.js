var rls= require("readline-sync");
var userName= rls.question("Can I have your good name?");
console.log("Hi!"+ userName +",welcome to HOW WELL DO YOU KNOW HARDIK.")



var score=0;

//quiz function
function play(question, answer){
  ans=rls.question(question)
  if(ans.toString().toUpperCase()=== answer.toString().toUpperCase()){
    console.log("You are right!")
     score= score+1
  } else{
    console.log("Sorry, wrong answer :(")
  }
  console.log("current score:",score)
  console.log("-------------------")
}


var questions=[
  {q:"What is Hardik's age?", a:19},
  {q:"What is his last name?", a:"arora"},
  {q:"Where does he live?", a:"Dehradun"},
  {q: "Which sport does he like?", a:"cycling"},
  {q: "Name his favourite superhero.", a: "ironman"}
]

var l= questions.length
for(var i=0; i<l;i=i+1){
  play(questions[i].q, questions[i].a)
}

console.log("Your final score is: ", score);
console.log("Thankyou for trying and looking up my first program! SHARE YOUR FEEDBACKS")
