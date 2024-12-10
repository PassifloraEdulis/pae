class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  displayCurrentQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      console.log(currentQuestion.question);
      this.displayAnswers(currentQuestion.answers);
    } else {
      console.log("Quiz completed!");
    }
  }

  displayAnswers(answers) {
    for (let i = 0; i < answers.length; i += 2) {
      const answer1 = answers[i];
      const answer2 = answers[i + 1];
      console.log(`[${i + 1}] ${answer1}\t[${i + 2}] ${answer2}`);
    }
  }

  selectAnswer(answerIndex) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (answerIndex >= 1 && answerIndex <= currentQuestion.answers.length) {
      const selectedAnswer = currentQuestion.answers[answerIndex - 1];
      console.log(`You selected: ${selectedAnswer}`);
    } else {
      console.log("Invalid answer index. Please choose a valid option.");
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.displayCurrentQuestion();
  }
}

// Example usage:
const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Madrid", "Berlin"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Earth", "Jupiter"],
  },
  // Add more questions as needed
];

const myQuiz = new Quiz(questions);
myQuiz.displayCurrentQuestion(); // Display the first question
