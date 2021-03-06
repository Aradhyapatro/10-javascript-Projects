const QuizQuestions = [{
        "question": "What is india's capital",
        "a": "New Delhi",
        "b": "Mumbai",
        "c": "Chennai",
        "d": "Bhubaneswar",
        "answer": "New Delhi"
    },
    {
        "question": "What is The most used language in ML",
        "a": "JavaScript",
        "b": "C",
        "c": "C++",
        "d": "Python",
        "answer": "Python"
    },
    {
        "question": "What is The most used language in Web Dev",
        "a": "JavaScript",
        "b": "C",
        "c": "C++",
        "d": "Python",
        "answer": "JavaScript"
    },
    {
        "question": "Founder of kiit",
        "a": "Honourable",
        "b": "Chutya",
        "c": "Achutya",
        "d": "Achutya Samanta",
        "answer": "Achutya Samanta"
    },
    {
        "question": "What is The most crowded branch in kiit",
        "a": "CSE",
        "b": "ETC",
        "c": "IT",
        "d": "Law",
        "answer": "CSE"
    },
    {
        "question": "How can we describe an array in the best possible way",
        "a": "The Array shows a hierarchical structure",
        "b": "Arrays are immutable",
        "c": "Container that stores the elements of similar types",
        "d": "The Array is not a data structure",
        "answer": "Container that stores the elements of similar types"
    },
    {
        "question": "Which one of the following is the process of inserting an element in the stack?",
        "a": "Insert",
        "b": "Add",
        "c": "Push",
        "d": "None of the above",
        "answer": "push"
    },
    {
        "question": "When the user tries to delete the element from the empty stack then the condition is said to be a",
        "a": "Overflow",
        "b": "Underflow",
        "c": "Garbage collection",
        "d": "None of the above",
        "answer": "Underflow"
    },
    {
        "question": "Who is the national crush of india",
        "a": "Rashmika",
        "b": "Anupama",
        "c": "Kiara",
        "d": "Struggle",
        "answer": "Rashmika"
    },
    {
        "question": "Which game is the GOAT",
        "a": "GTA San andreas",
        "b": "Mario",
        "c": "Mortal Kombat",
        "d": "Minecraft",
        "answer": "GTA San andreas"
    },
    {
        "question": "Which one of the following is not the application of the stack data structure",
        "a": "Asynchronous data transfer",
        "b": "Backtracking",
        "c": "Reversal",
        "d": "Recursion",
        "answer": "Asynchronous data transfer"
    },
    {
        "question": "Which data structure is mainly used for implementing the recursive algorithm",
        "a": "Stack",
        "b": "Queue",
        "c": "Array",
        "d": "Tree",
        "answer": "Stack"
    },
    {
        "question": "What is another name for the circular queue among the following options",
        "a": "Square buffer",
        "b": "Rectangular buffer",
        "c": "Ring buffer",
        "d": "None of the above",
        "answer": "None of the above"
    }
];

let Question = document.getElementById("Question");
let q1 = document.getElementById("aa");
let q2 = document.getElementById("bb");
let q3 = document.getElementById("cc");
let q4 = document.getElementById("dd");
let answerels = document.getElementsByClassName("answer");
let submit = document.getElementById("Submit");
let c = 0;

function putQuestions() {
    const currQ = QuizQuestions[c];

    Question.innerHTML = currQ.question;
    q1.innerHTML = currQ.a;
    q2.innerHTML = currQ.b;
    q3.innerHTML = currQ.c;
    q4.innerHTML = currQ.d;

}

function getSelected() {
    let ans;
    console.log(answerels[0]);
    for (let i = 0; i < answerels.length; i++) {
        const element = answerels[i];
        if (element.checked) {
            ans = element.id;
        }
    }
    return ans;
}

function unCheck() {
    for (let i = 0; i < answerels.length; i++) {
        answerels[i].checked = false;
    }
}

submit.addEventListener("click", function() {
    const data = getSelected();
    console.log(c);
    if (c != QuizQuestions.length - 1) {
        if (data === QuizQuestions[c].answer) {
            c++;
            unCheck();
            putQuestions();
        } else {
            alert("Wrong Answer");
            location.reload();
        }
    } else {

        alert("Congratulations you have Won the Quiz,Now please i beg you close the browser");

    }
});

putQuestions();