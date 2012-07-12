ws = /\s+/

chrome.omnibox.onInputEntered.addListener(function(text) {
    
    // Input formatting
    args = text.split(ws);
    args = args.filter(function(x){return x!="";})
    if (args.length > 1) {
      temp = args;
      tail = temp.splice(1).join(" ");
    }
    else {
      tail = "";
    }
    

    // Switches
    var isMap = RegExp("^ma*ps*$", "i");
    if (isMap.test(args[0])) {
      navigate("http://maps.google.com/maps?q=" + tail);
    }

    var isCal = RegExp("(^cal$|^cale?n?d?(a|e)?r?$)", "i");
    if (isCal.test(args[0])) {
      alert("yay cal") 
    }

    else {
      alert("CL DOES NOT UNDERSTAND THIS NONSENSE:\n" + "'" + text + "'");
    }
    
});


function navigate(url) {
   chrome.tabs.getSelected(null, function(tab) {
     chrome.tabs.update(tab.id, {url: url});
   });
}
