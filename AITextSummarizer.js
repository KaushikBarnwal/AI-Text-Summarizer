document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('text_to_summarize');
    const submitButton = document.getElementById('submit-button');
    const summaryArea = document.getElementById('summary');

    textArea.addEventListener("input", verifyTextLength);
    submitButton.addEventListener("click", submitData);

    function verifyTextLength() {
        const textLength = textArea.value.length;
        submitButton.disabled = textLength < 200 || textLength > 100000;
    }

    async function submitData() {
        submitButton.classList.add("submit-button--loading");
        const text_to_summarize = textArea.value;

        try {
            const response = await fetch('/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: text_to_summarize })
            });

            const data = await response.json();
            summaryArea.value = data.summary;
        } catch (error) {
            console.error('Error:', error);
        } finally {
            submitButton.classList.remove("submit-button--loading");
        }
    }
});






// // AITextSummarizer.js
// const textArea = document.getElementById('user-input-textarea');
// const submitButton = document.getElementById('submit-button');
// const outputDiv = document.getElementById('output-div');

// // Event Listeners Syntax
// var button = document.getElementById("myButton");
// button.addEventListener("click", function() {
// document.getElementById("myParagraph").innerHTML = "Hello, world!";
// });

// // Enabling Interaction
// textArea.addEventListener("input", verifyTextLength);
// submitButton.addEventListener("click", submitData);

// // Function: verifyTextLength
// function verifyTextLength(e) {
//     const textarea = e.target;
//     // Check if the text in the text area is the right length - between 200 and 100,000 characters
//     if (textarea.value.length > 200 && textarea.value.length < 100000) {
//         submitButton.disabled = false; // Enable the submit button
//     } else {
//         submitButton.disabled = true; // Disable the submit button
//     }
// }

// // Function: submitData
// function submitData(e) {
//     submitButton.classList.add("submit-button--loading");
//     const text_to_summarize = textArea.value;

//     const axios = require('axios');
//     let data = 'response: [\r\n    {\r\n        "summary_text": "Amelia, a curious astronomer, spotted a peculiar comet through her telescope. Determined to investigate, she built a spaceship. On her journey, she encountered cosmic wonders, yet the comet remained elusive. Finally, at the edge of the universe, she understood its secret."\r\n    }\r\n]';
//     let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
//         headers: { 
//             'Content-Type': 'application/json', 
//             'Authorization': 'Bearer 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'
//         },
//         data : data
//     };

//     async function makeRequest() {
//         try {
//             const response = await axios.request(config);
//             console.log(JSON.stringify(response.data));
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }
//     makeRequest();
// }
// // Allows for summarizeText() to be called outside of this file
// module.exports = summarizeText;

// // Detecting user input and updating HTML dynamically
// const textarea = document.getElementById('text_to_summarize');
// textarea.addEventListener('input', () => {
// const userInput = textarea.value;
// // Check if user input length is within bounds
// if (userInput.length >= 200 && userInput.length <= 100000) {
// // Enable submission buttons
// enableSubmissionButtons();
// } else {
// // Disable submission buttons
// disableSubmissionButtons();
// }
// // Display the length of the input dynamically
// updateTextLengthDisplay(userInput.length);
// });