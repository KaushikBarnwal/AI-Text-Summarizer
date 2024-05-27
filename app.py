from flask import Flask, request, render_template
from transformers import pipeline

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    summary = ""
    if request.method == 'POST':
        user_input = request.form['text_to_summarize']
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        summarized_text = summarizer(user_input, max_length=150, min_length=30, do_sample=False)
        summary = summarized_text[0]['summary_text']
    return render_template('index.html', Summary=summary)

if __name__ == '__main__':
    app.run(debug=True)







