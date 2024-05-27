// pipeline.js

// Import the necessary function from the @huggingface/model_hub package
const { pipeline } = require('@huggingface/model_hub');

// Define the async function for summarization
async function summarizeText() {
    // Initialize the summarizer pipeline with the BART model
    const summarizer = await pipeline('summarization', { model: 'facebook/bart-large-cnn' });

    // Get the text to summarize from the textarea
    const textToSummarize = document.getElementById('text_to_summarize').value;

    // Perform summarization on the input text
    const summary = await summarizer(textToSummarize, { max_length: 100, min_length: 30, do_sample: false });

    // Update the summary textarea with the summarized text
    document.getElementById('summary').value = summary[0].summary_text;
}
// Add an event listener to the submit button
document.getElementById('submit-button').addEventListener('click', summarizeText);




// const { default: pipeline } = require('@huggingface/model_hub');

// async function main() {
//     const summarizer = await pipeline('summarization', { model: 'facebook/bart-large-cnn' });

//     const ARTICLE = `Climate is sometimes mistaken for weather. But climate is different from weather because it is measured over a long period of time, whereas weather can change from day to day, or from year to year. The climate of an area includes seasonal temperature and rainfall averages, and wind patterns. Different places have different climates. A desert, for example, is referred to as an arid climate because little water falls, as rain or snow, during the year. Other types of climate include tropical climates, which are hot and humid, and temperate climates, which have warm summers and cooler winters.`;

//     const summary = await summarizer(ARTICLE, { max_length: 130, min_length: 30, do_sample: false });
//     console.log(summary);
// }

// main();