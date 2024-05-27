# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

ARTICLE = """Climate is sometimes mistaken for weather. But climate is different from weather because it is measured over a long period of time, whereas weather can change from day to day, or from year to year. The climate of an area includes seasonal temperature and rainfall averages, and wind patterns. Different places have different climates. A desert, for example, is referred to as an arid climate because little water falls, as rain or snow, during the year. Other types of climate include tropical climates, which are hot and humid, and temperate climates, which have warm summers and cooler winters.
"""
print(summarizer(ARTICLE, max_length=150, min_length=30, do_sample=False))

if __name__ == '__main__':
    app.run(debug=True)
