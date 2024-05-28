# AI Text Summarizer App

Welcome to the AI Text Summarizer App! This Flask web application leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. Users can simply paste a piece of text into the input box, click the "Summarize" button, and receive a summarized version of the input text.

## Features

- **Text Summarization**: Utilizes the Hugging Face `transformers` library to perform text summarization using state-of-the-art models such as BART.
- **Easy-to-Use Interface**: Simple and intuitive interface for users to input text and receive summaries.
- **Responsive Design**: Designed to work seamlessly on both desktop and mobile devices.
- **Efficient**: Model loading is optimized to ensure fast response times.

## Requirements

- Python 3.x
- Flask
- transformers
- torch
- gunicorn (for deployment in production)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Bishwarup-Das/AI-Text-Summarizer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ai-text-summarizer
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. Start the Flask application (On development mode):

    ```bash
    python app.py
    ```

2. Open your web browser and go to [http://localhost:5000](http://localhost:5000).

3. Paste the text you want to summarize into the input box and click the "Summarize" button.

## Deployment on Hosting server

1. Install dependencies on Hosting Server:

    ```bash
    pip install -r requirements.txt
    ```


2. Start the Flask application on production mode:

    ```bash
    gunicorn app:app
    ```

The application can be deployed to various platforms, including:

- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)

Follow the platform-specific deployment instructions to deploy the application.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Hugging Face](https://huggingface.co/) for providing the `transformers` library.
- [Flask](https://flask.palletsprojects.com/) for the web framework.
- [Render](https://render.com/) for hosting the application.
