var questionSelections = new Array(2);
        window.addEventListener("load", () => {
            document.getElementById("allQuestionsContainer").addEventListener("click", questionRatingSelector);
            document.getElementById("submitRatingsButton").addEventListener("click", calculateRatings);
        });
        function questionRatingSelector(e) {
            // TODO: Make this safer
            var selectedAttribute = parseInt(e.target.parentNode.getAttribute("data-questionNumber"));
            var selectedRating = parseInt(e.target.textContent);
            if (!selectedAttribute || !selectedAttribute) {
                return;
            }
            var selectedQuestion = selectedAttribute - 1;
            
            if (questionSelections[selectedQuestion]) {
                const divQuestion = document.querySelectorAll('div[data-questionNumber="' + (selectedQuestion + 1) + '"]')[0];
                const previousRatingNode = divQuestion.querySelectorAll("p")[questionSelections[selectedQuestion] - 1];
                previousRatingNode.classList.remove("ratingSelected");
            }
            e.target.classList.add("ratingSelected");
            questionSelections[selectedQuestion] = selectedRating;
        }
        function calculateRatings(e) {
            var totalPoints = questionSelections.length * 10;
            var actualPoints = 0;
            var questionCount = 0;
            questionSelections.forEach((element) => {
                questionCount++;
                actualPoints += element;
            });
            if (questionCount < questionSelections.length) {
                document.getElementById("resultText").textContent = "Please rate all questions";
                return;
            }
            var text = (actualPoints / totalPoints) > 0.5 ? "Cyber Security might be the right course for you." : "It seems like Cyber Security might not be a perfect fit."
            var textColorClass = (actualPoints / totalPoints) > 0.5 ? "greenText" : "redText";
            
            document.getElementById("resultText").textContent = text;
            document.getElementById("resultText").classList.remove("greenText");
            document.getElementById("resultText").classList.remove("redText");
            document.getElementById("resultText").classList.add(textColorClass);
        }