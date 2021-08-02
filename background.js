
var theStatus;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request == true)
            theStatus = true;
        else
            theStatus = false;
        console.log("background.js got a message")
        console.log(request);
        console.log("status is " + theStatus);
        sendResponse("bar");
    }
);

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
       theStatus = true;
       console.log(theStatus);
    } else {
        theStatus = false;
        console.log(theStatus);
    }
});

function muter(tabId){
          chrome.tabs.update(tabId, {muted: true});
        }

function unmuter(tabId){
          chrome.tabs.update(tabId, {muted: false});
        }

    chrome.tabs.onUpdated.addListener(function(tabid, changeinfo, tab) {
        //makes sure the listener is only fired once
        if(theStatus){
            if (changeinfo.status == "complete") {
                if(tab.url.indexOf("netflix.com/watch/") != -1)  {
                    muter(tabid);
                    console.log("muted")
                    setTimeout(function(){ unmuter(tabid) }, 8000);
                    console.log("unmuted")
                }
        }}                                                              }
       );

   