var enabled = true;
var myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.textContent = enabled ? 'Currently On' : 'Currently Off';
});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Currently On' : 'Currently Off';
    chrome.storage.local.set({enabled:enabled});
    console.log("it is" + enabled);

    chrome.runtime.sendMessage(
        enabled,
        function (response) {
            console.log(response);
        }
    );
};

