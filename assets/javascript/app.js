$(document).ready(function(){
$("p").hide()


    $(document).on('click', '#start-over', function(e) {
        game.reset();
      });
      

      $(document).on('click', '.answer-button', function(e) {
        game.clicked(e);
   
      });
      
      $(document).on('click', '#start', function(e) {
        $("p").show()
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
        game.loadQuestion();
      });

      var panel = $('#quiz-area');
      var countStartNumber = 30;
      



      var questions = [{
        question: "Which Justice League member has NEVER died?",
        answers: ["Superman", "The Flash", "Wonder Woman", "Green Lantern"],
        correctAnswer: "Wonder Woman",
        image:"assets/images/justice1.jpeg"
      }, {
        question: "Which is a bigger number?",
        answers: ["Actors who played Superman", "Number of Robins", "Actors who played Batman", "They are all the same"],
        correctAnswer: "Actors who played Batman",
        image:"assets/images/justice2.gif"
      }, {
        question: "Aquaman may be the King of Atlantis, but based on his secret identity, he could be mistaken for the King of...",
        answers: ["Camelot", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: "Camelot",
        image:"assets/images/justice3.jpeg"
      }, {
        question: 'What color sun give a Kryptonian their powers?',
        answers: ["Yellow", "Red", "Blue", "Green"],
        correctAnswer: "Yellow",
        image:"assets/images/justice4.jpeg"
      }, {
        question: 'True or False: Fans voted for the third Robin to be killed by the Joker.',
        answers: ["True", "False"],
        correctAnswer: "False",
        image:"assets/images/justice5.jpeg"
      }, {
        question: "Wonder Woman's lasso most closely resembles what device?",
        answers: ["A Taser", "Lie Detector", "Weed Eater", "Blood Pressure Monitor"],
        correctAnswer: "Lie Detector",
        image:"assets/images/justice6.jpeg"
      }, {
        question: "If Superman was given a Lantern Power Ring based on the meaning behind his 'S', which color ring would he have",
        answers: ["Yellow", "Red", "Blue", "Green"],
        correctAnswer: "Blue",
        image:"assets/images/justice7.jpeg"
      }, {
        question: "Which Justice league member is the strongest?",
        answers: ["The flash", "Robert", "Trump", "Superman"],
        correctAnswer: "Superman",
        image:"assets/images/wallpaper.jpeg"
      }];
      
      
      
      
      var game = {
        questions:questions,
        currentQuestion:0,
        counter:countStartNumber,
        correct:0,
        incorrect:0,
        countdown: function(){
          game.counter--;
          $('#counter-number').html(game.counter);
      
          if (game.counter === 0){
            console.log('TIME UP');
            game.timeUp();
          }
        },
        loadQuestion: function(){
          timer = setInterval(game.countdown, 1000);
          panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
          for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
            panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
          }
        },
        nextQuestion: function(){
          game.counter = countStartNumber;
          $('#counter-number').html(game.counter);
          game.currentQuestion++;
          game.loadQuestion();
        },
        timeUp: function (){
          clearInterval(timer);
          $('#counter-number').html(game.counter);
      
          panel.html('<h2>Out of Time!</h2>');
          panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
          panel.append('<img src="' + questions[this.currentQuestion].image + '" />');
      
          if (game.currentQuestion === questions.length - 1){
            setTimeout(game.results, 3 * 1000);
          } else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
        results: function() {
          clearInterval(timer);
      
          panel.html('<h2>All done,hey man am not Judging</h2>');
          $('#counter-number').html(game.counter);
          panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
          panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
          panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
          panel.append('<br><button id="start-over">Start Over?</button>');
        },
        clicked: function(e) {
          clearInterval(timer);
      
          if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
            this.answeredCorrectly();
          } else {
            this.answeredIncorrectly();
          }
        },
        answeredIncorrectly: function() {
          game.incorrect++;
          clearInterval(timer);
          panel.html('<h2>Nope!</h2>');
          panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
          panel.append('<img src="' + questions[game.currentQuestion].image + '" />');
      
          if (game.currentQuestion === questions.length - 1){
            setTimeout(game.results, 3 * 1000);
          } else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
        answeredCorrectly: function(){
          clearInterval(timer);
          game.correct++;
          panel.html('<h2>Correct!</h2>');
          panel.append('<img src="' + questions[game.currentQuestion].image + '" />');
      
          if (game.currentQuestion === questions.length - 1){
            setTimeout(game.results, 3 * 1000);
          } else {
            setTimeout(game.nextQuestion, 3 * 1000);
          }
        },
        reset: function(){
          this.currentQuestion = 0;
          this.counter = countStartNumber;
          this.correct = 0;
          this.incorrect = 0;
          this.loadQuestion();
        }
      };

  



















})