const QUESTIONS = 
[
    {
      question : "What is this shit?",
      choices: ["hey","jude","lets","blah"],
      answer: "hey",
    },
    {
        question : "What is this shit1?",
        choices: ["hey1","jude1","lets1","blah1"],
        answer: "hey1",   
	},
	{
        question : "What is this shit2?",
        choices: ["hey2","jude2","lets2","blah2"],
        answer: "hey2",   
    }
];

QUESTIONS.forEach(entries => Object.freeze(entries));

const generateQuestion = ({question,choices},count) =>
{
	const quizBx = document.querySelector('.quiz');

	const quizBx2 = document.createElement('div');

	const questionCounter = document.createElement('p');
	questionCounter.classList.add('question-counter');	
	questionCounter.innerHTML = `Question` + " " + `<span class="counter">${count + 1}</span>` + " " + `of ${QUESTIONS.length}`;

	const quizQuestion = document.createElement('h3');
	quizQuestion.classList.add('quiz-question');
	quizQuestion.textContent = question;

	const choicesBtn = document.createElement('div');
	choicesBtn.classList.add('choices-btn');

	for(let i=0; i<4; i++)
	{
		const choiceBtn = document.createElement('div');
		const radioBtn = document.createElement('input');
		const label = document.createElement('label');
		radioBtn.type = "radio";

		radioBtn.name = `choices${count}`; 
		radioBtn.value = choices[i];

		label.textContent = choices[i];

		choiceBtn.append(radioBtn);
		choiceBtn.append(label);

		choicesBtn.append(choiceBtn);
	}

	quizBx2.append(questionCounter);
	quizBx2.append(quizQuestion);
	quizBx2.append(choicesBtn);

	quizBx.prepend(quizBx2);
}

for(let i=QUESTIONS.length-1; i>=0; i--)
{
	generateQuestion(QUESTIONS[i],i);
}

const quizBx = document.querySelectorAll('.quiz > div');

quizBx.forEach((question,index) => index === 0 || index === quizBx.length - 1 ? question.style.display = "block" : question.style.display = "none");

const choicesBtn = document.querySelectorAll('.choices-btn > div');
const navigationBtn = document.querySelectorAll('.navigation-btn button');

const navigationOperation = (()=>
{
	let count = 0;

	return (e)=>
	{		
		if(e.target.textContent === "Next")
		{
			if(count === QUESTIONS.length - 1) return;
			count++;				
		}
		else
		{
			if(count === 0) return;
			count--;
		}

		quizBx.forEach((question,index) => index === count || index === quizBx.length - 1 ? question.style.display = "block" : question.style.display = "none")
	}
})()

navigationBtn.forEach(btn=>btn.addEventListener('click',navigationOperation));

class Counter
{
	constructor(count)
	{
		this.count = count;
	}

	increment()
	{
		this.count++;
		return this.count;
	}

	displayCount()
	{
		return this.count;
	}
}

const counter = new Counter(0);

console.log(counter);
console.log(counter.displayCount());
console.log(counter.increment());


// const questionCounter = document.querySelector('.question-counter');
// const counter = document.querySelector('.counter');
// const quizQuestion = document.querySelector('.quiz-question');
// const choicesBtn = document.querySelector('.choices-btn-bx');
// const prevNextBtn = document.querySelector('.btn-bx');

// function currentQuestion({question,choices},count)
// {
// 	counter.textContent = count+1;
// 	questionCounter.textContent = `Question` + " " + counter.textContent + " " + `of ${QUESTIONS.length}`;
// 	quizQuestion.textContent = question;
	
// 	for(let i=0; i<choices.length; i++)
// 	{
// 		choicesBtn.children[i].firstElementChild.value = choices[i];
// 		choicesBtn.children[i].lastElementChild.textContent = choices[i];
// 	}
// }
// currentQuestion(QUESTIONS[0],0);

// const getQuestion = (()=>
// {
// 	let count = 0;
// 	let checkIfFalse = 0;
// 	return (e) =>
// 	{
// 		Array.from(choicesBtn.children).forEach(btn=> btn.firstElementChild.checked === false ? checkIfFalse++ : checkIfFalse = 0);

// 		if(checkIfFalse === choicesBtn.children.length)
// 		{
// 			alert("Please provide an answer!");
// 			checkIfFalse = 0;
// 			return;
// 		} 

// 		if(e.target.textContent === "Next")
// 		{
// 			if(count === QUESTIONS.length-1) return;
// 			else
// 			{
// 				count++;
// 				currentQuestion(QUESTIONS[count],count);				
// 			}
// 		} 
// 		else
// 		{
// 			if(count === 0) return;
// 			else
// 			{
// 				count--;
// 				currentQuestion(QUESTIONS[count],count);
// 			}
// 		}
// 	}
// })();

// Array.from(prevNextBtn.children).forEach((btn => btn.addEventListener("click",getQuestion)));

// const getAnswer = (()=>
// {
// 	let totalPoints = 0;
// 	let answersArray = [];

// 	return (e)=>
// 	{
// 		let answer = QUESTIONS[parseInt(counter.textContent)-1].answer;
		
// 		if(answersArray[parseInt(counter.textContent-1)])
// 		{
// 			answersArray[parseInt(counter.textContent-1)] = e.target.value; 
// 		}
// 		else 
// 		{
// 			answersArray.push(e.target.value);
// 		}
// 		console.log(answersArray);

// 	}
// })();

// function preserveState()
// {
	
// }


// Array.from(choicesBtn.children).forEach(btn=> btn.firstElementChild.addEventListener('change',getAnswer));





