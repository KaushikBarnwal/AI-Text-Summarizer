document.getElementById('submit-button').addEventListener('click', function() {
    const textToSummarize = document.getElementById('text_to_summarize').value;
    fetch('/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ article: textToSummarize })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('summary').value = data.summary;
        }
    })
    .catch(error => console.error('Error:', error));
});
