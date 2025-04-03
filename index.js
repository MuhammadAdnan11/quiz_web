//? Define Quiz Data

const quizData=[
    {
        question: "What does HTML stands for?",
        options: [
            "Hypertext Markup language",
            "Machine language",
            "Assembly language",
            "text language",
        ],
        correct: 0,
    },
    {
        question: "What does URL stands for?",
        options: [
            "Hypertext Markup language",
            "Uniform Resource Locator",
            "Assembly language",
            "text language",
        ],
        correct: 1,
    },
];

//? step -2 Javascript Initialization
const quiz=document.querySelector("#quiz")
const answerElm=document.querySelectorAll(".answer")
const [questionElm, option_1, option_2, option_3, option_4]=document.querySelectorAll(
    "#question , .option_1,.option_2, .option_3, .option_4"
);
const submitBtn= document.querySelector("#submit"); 

let currentQuiz=0;
let score=0;

//? step-3 Load Quiz fucntion

const loadQuiz=()=>{
    const {question,options}=quizData[currentQuiz];
      
        questionElm.innerHTML= `${currentQuiz +1}: ${question}`;
        options.forEach(
        (curOption, index)=>(window[`option_${index + 1}`].innerText=curOption));

}

loadQuiz();


//? Getting the correct options

const getSelectedOption=()=>{
    // let ans_index;
    // answerElm.forEach((curOption,index)=>{
    //     if(curOption.checked){
    //         ans_index=index;
    //     }
    // })
    // return ans_index;
let answerElement=Array.from(answerElm)
   return answerElement.findIndex((curElm,index)=>curElm.checked)

}

//? deselected answers
const deselectedAnswers=()=>{
    return answerElm.forEach((curElm)=>(curElm.checked=false))
}

submitBtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);

if(selectedOptionIndex===quizData[currentQuiz].correct){
    score=score+1;
}

currentQuiz++;
if(currentQuiz<quizData.length)
{
    deselectedAnswers();
    loadQuiz();
}else{

    quiz.innerHTML=`
    <div class= "result">
    <h2>🥇 Your Score: ${score}/${quizData.length} Correct Answers </h2>
    <p>Congratulations on completing the Quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>

    </div>
`    
}

})

