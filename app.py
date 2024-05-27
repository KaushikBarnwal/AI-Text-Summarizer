# app.py
from flask import Flask, request, render_template
from transformers import pipeline

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['text_to_summarize']
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        summerize = summarizer(user_input, max_length=150, min_length=30, do_sample=False)
        return render_template('index.html', Summary=summerize)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)






