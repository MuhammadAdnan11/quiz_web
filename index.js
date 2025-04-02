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

const answerElm=document.querySelectorAll(".answer")
const [questionElm, option_1, option_2, option_3, option_4]=document.querySelectorAll(
    "#question , .option_1,.option_2, .option_3, .option_4"
);
const submitBtn= document.querySelector("#submit"); 

let currentQuiz=0;
const score=0;

//? step-3 Load Quiz fucntion

const loadQuiz=()=>{
    const {question,options}=quizData[currentQuiz];
        console.log("current index: ", currentQuiz);
        console.log("Question: ",question);
        console.log("Options: ", options)
}

loadQuiz();
