const  quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hyper text transfer police",
        b: "Hyper text transfer protocol",
        c: "Hyper text markup language",
        d: "Hyper text makeup language",
        ans: "ans3"

    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Super Sheets",
        c: "Cascading style ship",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP ?",
        a: "Hyper text transfer protocol",
        b: "Hyper text transfer product",
        c: "Hyper text transfer power",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "Javason",
        b: "Javascript",
        c: "JustShutp",
        d: "All of these",
        ans: "ans2"
    },
    {
        question: "Q5: What is the full form of ALU?",
        a: "Airthmatical logical unit",
        b: "Alphabetical locator universe",
        c: "Aluminium load unit",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q6: What is the full form of RAM?",
        a: "Read Only Memory",
        b: "Random Access Memory",
        c: "Random Acceptance Memory",
        d: "Both a And b",
        ans: "ans2"
    },
    {
        question: "Q7: What is the full form of ROM?",
        a: "Read only memory",
        b: "Random only memory",
        c: "Render only must",
        d: "All of these",
        ans: "ans1"
    },
    {
        question: "Q8: How can a datatype be declared to be a constant type?",
        a: "Const",
        b: "Var",
        c: "Let",
        d: "Constant",
        ans: "ans1"
    },
    {
        question: "Q9: Javascript is an------ language?",
        a: "Object-oriented programming",
        b: "Object-based",
        c: "procedural",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q10: Which of the following keywords is used to define a variable in javascript?",
        a: "Var",
        b: "let",
        c: "Both a and b",
        d: "None of these",
        ans: "ans3"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
   const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
      
    });

    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener("click",() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
      
    questionCount++;
    

    deselectAll();

    if(questionCount < quizDB.length){
         loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}  </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        
        showScore.classList.remove("scoreArea");
        
    }
});