from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
import os

app = Flask(__name__)
CORS(app)  # Allows requests from Chrome extension

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/transcribe", methods=["POST"])
def transcribe():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file"}), 400

    file = request.files["audio"]
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    recognizer = sr.Recognizer()

    with sr.AudioFile(filepath) as source:
        audio = recognizer.record(source)

    try:
        text = recognizer.recognize_google(audio)
    except Exception as e:
        text = "Could not understand audio"

    return jsonify({"transcript": text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)