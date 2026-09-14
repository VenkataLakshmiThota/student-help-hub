// SCORE
let score = 0;


// ----------------------------------
// SHOW QUESTION SECTION
// ----------------------------------

function showQuestionSection() {

    document
        .getElementById("questionSection")
        .classList
        .remove("hidden");


    document
        .getElementById("questionSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ----------------------------------
// SUBMIT QUESTION
// ----------------------------------

function submitQuestion() {

    let subject =
        document
        .getElementById("subject")
        .value;


    let question =
        document
        .getElementById("question")
        .value
        .trim();


    // Check subject

    if (subject === "") {

        alert("Please select a subject.");

        return;
    }


    // Check question

    if (question === "") {

        alert("Please enter your question.");

        return;
    }


    // Show Understand section

    document
        .getElementById("understandSection")
        .classList
        .remove("hidden");


    document
        .getElementById("understandSection")
        .scrollIntoView({
            behavior: "smooth"
        });


    // Show basic hint

    document
        .getElementById("hint")
        .innerText =
        "First understand what the question is asking. Identify the given information and what you need to find.";
}


// ----------------------------------
// SHOW EXPLANATION
// ----------------------------------

function showExplanation() {

    let question =
        document
        .getElementById("question")
        .value
        .toLowerCase()
        .replace(/\s/g, "");


    let explanation =
        document
        .getElementById("explanationText");


    // Example question

    if (question.includes("2x+3=5")) {

        explanation.innerHTML =

            "Step 1: Subtract 3 from both sides.<br><br>" +

            "2x + 3 - 3 = 5 - 3<br>" +

            "2x = 2<br><br>" +

            "Step 2: Divide both sides by 2.<br><br>" +

            "x = 1";

    }

    else {

        explanation.innerHTML =

            "Break the problem into smaller steps. " +

            "Identify what is given, what you need to find, " +

            "and then choose the correct method to solve it.";
    }


    // Show explanation box

    document
        .getElementById("explanation")
        .classList
        .remove("hidden");
}


// ----------------------------------
// GO TO PRACTICE
// ----------------------------------

function goToPractice() {

    document
        .getElementById("practiceSection")
        .classList
        .remove("hidden");


    document
        .getElementById("practiceSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ----------------------------------
// CHECK ANSWER
// ----------------------------------

function checkAnswer() {

    let answer =
        document
        .getElementById("practiceAnswer")
        .value
        .trim()
        .toLowerCase();


    let result =
        document
        .getElementById("practiceResult");


    // Correct answer

    if (
        answer === "3" ||
        answer === "x=3"
    ) {

        score = 1;


        result.innerHTML =
            "✅ Correct! Excellent. You understood the method.";


        result.style.color = "green";

    }

    // Wrong answer

    else {

        score = 0;


        result.innerHTML =
            "❌ Not quite. Check your calculation and try again.";


        result.style.color = "red";
    }


    // Show Improve section

    document
        .getElementById("improveSection")
        .classList
        .remove("hidden");


    document
        .getElementById("improveSection")
        .scrollIntoView({
            behavior: "smooth"
        });


    // Show score

    document
        .getElementById("scoreText")
        .innerHTML =
        "Your score: <strong>" +
        score +
        "/1</strong>";
}


// ----------------------------------
// START AGAIN
// ----------------------------------

function startAgain() {

    // Clear question

    document
        .getElementById("question")
        .value = "";


    // Clear subject

    document
        .getElementById("subject")
        .value = "";


    // Clear practice answer

    document
        .getElementById("practiceAnswer")
        .value = "";


    // Hide sections

    document
        .getElementById("understandSection")
        .classList
        .add("hidden");


    document
        .getElementById("practiceSection")
        .classList
        .add("hidden");


    document
        .getElementById("improveSection")
        .classList
        .add("hidden");


    document
        .getElementById("explanation")
        .classList
        .add("hidden");


    // Return to home

    document
        .getElementById("home")
        .scrollIntoView({
            behavior: "smooth"
        });
}