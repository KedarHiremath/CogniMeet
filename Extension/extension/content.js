let recognition;
let panel;
let finalTranscript = "";
let isRecording = false;

function createPanel() {
    if (!panel) {
        panel = document.createElement("div");
        panel.style.position = "fixed";
        panel.style.right = "0";
        panel.style.top = "0";
        panel.style.width = "300px";
        panel.style.height = "100%";
        panel.style.background = "white";
        panel.style.zIndex = "999999";
        panel.style.overflowY = "auto";
        panel.style.padding = "10px";
        panel.innerHTML = "<h3>Live Transcript</h3><div id='transcript'></div>";
        document.body.appendChild(panel);
    }
}

chrome.runtime.onMessage.addListener((request) => {

    if (request.action === "start" && !isRecording) {

        if (!('webkitSpeechRecognition' in window)) {
            alert("Speech Recognition not supported in this browser.");
            return;
        }

        createPanel();

        recognition = new webkitSpeechRecognition();
        recognition.continuous = true; // keeps listening
        recognition.interimResults = true; // shows partial results
        recognition.lang = "en-US";

        recognition.onresult = function(event) {
            let interimTranscript = "";
            let transcriptDiv = document.getElementById("transcript");

            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    let text = event.results[i][0].transcript;
                    finalTranscript += text + "\n";
                    transcriptDiv.innerHTML += "<p>" + text + "</p>";
                    transcriptDiv.scrollTop = transcriptDiv.scrollHeight;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            // show live partial result
            transcriptDiv.innerHTML += "<p style='color: gray'>" + interimTranscript + "</p>";
        };

        recognition.onerror = function(event) {
            console.error("Speech recognition error", event);
        };

        recognition.start();
        isRecording = true;
    }

    if (request.action === "stop" && isRecording) {
        recognition.stop();
        isRecording = false;

        // download final transcript
        const blob = new Blob([finalTranscript], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transcript.txt";
        a.click();
    }
});