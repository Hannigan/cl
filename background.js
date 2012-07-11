ws = /\s+/

chrome.omnibox.onInputEntered.addListener(function(text) {
    args = text.split(ws);
    navigate("http://maps.google.com/maps?q=" + text);
});


function navigate(url) {
   chrome.tabs.getSelected(null, function(tab) {
     chrome.tabs.update(tab.id, {url: url});
   });
}