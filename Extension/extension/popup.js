document.getElementById("start").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    try {
        await chrome.tabs.sendMessage(tab.id, { action: "start" });
    } catch (err) {
        alert("Open Google Meet first!");
    }
});

document.getElementById("stop").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    try {
        await chrome.tabs.sendMessage(tab.id, { action: "stop" });
    } catch (err) {
        alert("Open Google Meet first!");
    }
});