const quizdata = [
    {
      question: "Koji je glavni grad Turske ?",
      a: "Paris",
      b: "Berlin",
      c: "London",
      d: "Ankara",
      points: 5,
      correct: "d",
    },
    {
      question: "Koji kontinent je najmanji?",
      a: "Evropa",
      b: "Azija",
      c: "Australija",
      d: "Amerika",
      points: 5,
      correct: "c",
    },
    {
      question: "Koji je glavni grad Norveske?",
      a: "Madrid",
      b: "Oslo",
      c: "Moskva",
      d: "Zagreb",
      points: 5,
      correct: "b",
    },
    {
      question: "Na kom kontinentu se nalazi Mongolija?",
      a: "Afrika",
      b: "Juzna Amerika",
      c: "Australija",
      d: "Azija",
      points: 5,
      correct: "d",
    },
    {
      question: "Koji je glavni grad Japana?",
      a: "Tokijo",
      b: "Hong Kong",
      c: "Seul",
      d: "Peking",
      points: 5,
      correct: "a",
    },
];
  

  const questionE1 = document.querySelector("#question");
  const a = document.querySelector("#a_text");
  const b = document.querySelector("#b_text");
  const c = document.querySelector("#c_text");
  const d = document.querySelector("#d_text");
  const submitBtn = document.querySelector("#submit");
  



  let currentQuestion = 0;
  let currentQuiz = 0;
  let answer;
let score = 0;
let correctAnswer = 0;
  start();
  



  function start() {
      uncheck()
      console.log(quizdata[currentQuiz]);
    const currentQuizData = quizdata[currentQuiz];
    console.log(currentQuizData)
      questionE1.innerHTML = currentQuizData.question;
      a.innerText = currentQuizData.a;
      b.innerText = currentQuizData.b;
      c.innerText = currentQuizData.c;
      d.innerText = currentQuizData.d;

  
    currentQuestion++;
  }
  



  const getSelected =() => {
      let answer;
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEL) => {
      if (answerEL.checked)
        answer = answerEL.id; 
    });
  
    return answer;
  }
  



  function uncheck(){
      const answerEls = document.querySelectorAll(".answer");
      answerEls.forEach((answerEL) => {
       answerEL.checked = false;
        
      });
  }
  

  submitBtn.addEventListener("click", () => {
      const answer = getSelected();
      console.log(answer);
      if(answer)
      {
          if(answer=== quizdata[currentQuiz].correct){
            score = score + quizdata[currentQuiz].points;
            correctAnswer++
            localStorage.setItem("score", score)
            let total = correctAnswer + "/" + quizdata.length
            localStorage.setItem("total", total)
          }
          currentQuiz++;
        
      }
     
   
    
      if (currentQuiz < quizdata.length) {
          start()
      }
      else {
          window.location.href = "TheEnd.html"
      }
    
  });


