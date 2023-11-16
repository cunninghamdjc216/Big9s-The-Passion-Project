    //Rakimu & Nathanael code START
// let title = document.getElementById("#questionTitle");
// let image = document.getElementById("questionImage");
//title.innerHTML += "question2";
// let image2 = document.getElementById("");
// function log() {
//   console.log("hello world");

//   let title = document.querySelectorAll(".questionTitle");
//   // let titletest = document.getElementById("questionTitle")

//   // console.log(titletest);
//   // let title = document.querySelector(".log");

//   title.innerHTML += "question2";
//   window.location.href = "question.html"

  
// };
//print(question)
//print(heading)

  
// let question1 = {
//   question:"Do you enjoy creating stories?",
//   image:"https://i.pinimg.com/originals/b8/e7/5f/b8e75f140e483548018d93af53835c04.gif" height="500px"

// };

// let question2 = {
//   question:"",
//   image:""

// };

// let question3 = {
//   question:"",
//   image:""

// };

// let question4 = {
//   question:"",
//   image:""

// };


    
//Rakimu & Nathanael code END

 
    
//Hailey code START
function getTotalScore(userAnswer){
  let totalScore = 0
  if (userAnswer === "yes") {
      totalScore += 1;
    } else if (userAnswer === "no") {
      totalScore += 2;
    } else if (userAnswer === "Occasionally") {
      totalScore += 3;
    } 

  return totalScore
}
    let passion= document.querySelectorAll(".ending-one")[0];
    console.log(passion);

    let finalTotalScore= getTotalScore("yes");
console.log(finalTotalScore)

if (finalTotalScore === 1){ passion.innerHTML = "Your passion is writing"}
if (finalTotalScore === 2){ passion.innerHTML = "Your passion is reader"}
if (finalTotalScore === 3){ passion.innerHTML = "Your passion is nature"}
console.log(passion.innerHTML)
 


      
    


   
//Hailey code END