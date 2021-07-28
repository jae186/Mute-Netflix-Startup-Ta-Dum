

function muter(tabId){
          chrome.tabs.update(tabId, {muted: true});
        }

function unmuter(tabId){
          chrome.tabs.update(tabId, {muted: false});
        }


    
    chrome.tabs.onUpdated.addListener(function(tabid, changeinfo, tab) {
        
            if (changeinfo.status == "complete") {
                if(tab.url.indexOf("netflix.com/watch/") != -1){
                    muter(tabid);
                    setTimeout(function(){ unmuter(tabid) }, 10000);
                    console.log("hey")
                }
        }                                                              }
       );





/*
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    
        if (tab.status !== "complete"){
            return;
    }
        if(tab.url.indexOf("netflix") != -1){
            muter(id);
            setTimeout(function(){ unmuter(id) }, 10000);
            console.log("hey")
    }
})


if (d.getTime() >= (startTime + 7000)){
    chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
        const { audible, mutedInfo } = change;
        if (audible || mutedInfo && !mutedInfo.muted) {
          chrome.tabs.update(tabId, {muted: true});
        }
      });}

function toggleMute(tabId) {
    chrome.tabs.get(tabId, async (tab) => {
      let muted = !tab.mutedInfo.muted;
      await chrome.tabs.update(tabId, { muted });
      console.log(`Tab ${tab.id} is ${ muted ? 'muted' : 'unmuted' }`);
    });
  }
 */