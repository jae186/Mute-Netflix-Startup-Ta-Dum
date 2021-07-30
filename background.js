
var theStatus = true; 
chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
       theStatus = true;
    } else {
        theStatus = false;
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
                    setTimeout(function(){ unmuter(tabid) }, 10000);
                    console.log("unmuted")
                }
        }}                                                              }
       );

   