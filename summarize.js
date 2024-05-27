const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

async function summarizeText(text) {
    const data = JSON.stringify({ inputs: text });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer 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'
        },
        data: data
    };

    try {
        const response = await axios(config);
        return response.data[0].summary_text;
    } catch (err) {
        console.error(err);
        throw new Error('Error in summarizing text');
    }
}

app.post('/summarize', async (req, res) => {
    try {
        const textToSummarize = req.body.text;
        const summarizedText = await summarizeText(textToSummarize);
        res.send({ summary: summarizedText });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = summarizeText;




// // summarizer.js
// const axios = require('axios');
// const express = require('express');
// const app = express();
// const port = 3000;
// // Parses JSON bodies (as sent by API clients)
// app.use(express.json());
// // Serves static files from the 'public' directory
// app.use(express.static('public'));
// // Start the server
// app.listen(port, () => {
// console.log(`Server running at http://localhost:${port}/`);
// });

// // This is the function where the call to the API is made. Returns the summarized text as a string.
// async function summarizeText(text) {
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
//             return response.data[0].summary_text;
//             } catch (err) {
//             console.log(err);
//             }
//     }
//     makeRequest();
// }
// // Allows for summarizeText() to be called outside of this file
// module.exports = summarizeText;

// // Express POST Endpoint Configuration
// // The following lines in the express.js file define the /summarize endpoint:

// // app.post('/summarize', async (req, res) => {
// //     const textToSummarize = req.body.text;
// //     const summarizedText = await summarizeText(textToSummarize);
// //     res.send({ summary: summarizedText });
// // });


// app.post('/summarize', (req, res) => {
//     const text = req.body.text_to_summarize;
    
//     summarizeText(text)
//     .then(response => {
//         res.send(response); // Send the summary text as a response
//     })
//     .catch(error => {
//         console.log(error.message);
//     });
// });