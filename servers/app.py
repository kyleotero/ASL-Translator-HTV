import json

import requests
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/getUrl', methods=["POST"])
def test():
    content = request.args.get("data")
    test = json.loads(content)['word']
    print(test)

    if test is None:
        word = "hey lol"
    else:
        word = test

    if len(word) >= 3:
        link = check(word)
        if requests.get(link).status_code != 200 and word[-1] == 's':
            link = check(word[:-1])
    elif len(word) == 1:
        link = "https://handspeak.com/word/" + \
            word + "/" + word + "-abc" + ".mp4"
    else:
        link = "https://handspeak.com/word/" + \
            word[0:1] + "/" + word + ".mp4"

    if requests.get(link).status_code != 200:
        link = "Video cannot be found."

    return link


def check(word):
    link = "https://handspeak.com/word/" + \
        word[0:1] + "/" + word[0:3] + "/" + word + ".mp4"
    if requests.get(link).status_code != 200:
        link = "https://handspeak.com/word/" + \
            word[0:1] + "/" + word + ".mp4"
    if requests.get(link).status_code != 200:
        link = "https://handspeak.com/word/" + \
            word[0:1] + "/" + word[0:3] + "/" + word + "-fs" + ".mp4"
    if requests.get(link).status_code != 200:
        link = "https://handspeak.com/word/" + \
            word[0:1] + "/" + word + "-fs" + ".mp4"

    return link
