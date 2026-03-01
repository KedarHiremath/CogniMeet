let mediaRecorder;
let recordedChunks = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "start") {

        chrome.tabCapture.capture({ audio: true, video: true }, (stream) => {

            if (!stream) {
                console.error("Error capturing tab");
                return;
            }

            mediaRecorder = new MediaRecorder(stream);

            recordedChunks = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {

                const blob = new Blob(recordedChunks, { type: "video/webm" });
                const url = URL.createObjectURL(blob);

                chrome.downloads.download({
                    url: url,
                    filename: "meet-recording.webm"
                });
            };

            mediaRecorder.start();
            console.log("Recording started");
        });
    }

    if (request.action === "stop") {
        if (mediaRecorder) {
            mediaRecorder.stop();
            console.log("Recording stopped");
        }
    }
});