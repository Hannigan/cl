
chrome.omnibox.onInputEntered.addListener(function(text) {
    
    // Input formatting
    ws = /\s+/;
    args = text.split(ws);
    args = args.filter(function(x){return x!="";});
    argTail = tail(args).join(" ") 

    // Regex
    var isCal = RegExp("(^cal$|^cale?n?d?(a|e)?r?$)", "i");
    var isMap = RegExp("^ma*ps*$", "i");
    var isAdd = RegExp("^add?$", "i");

    // Switches
    if (isMap.test(args[0])) {
      navigate("http://maps.google.com/maps?q=" + argTail);
    }
    
    else if (isCal.test(args[0])) {
      if (isAdd.test(args[1])) {
        if (window.XMLHttpRequest) {
          req = XMLHttpRequest(); 
          req.open("POST") //TODO 
        }
        else {
          failure("Your browser does not support XMLHttpRequest."))
        }  
      }
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

function tail(arr,n) {
  if (!n) {n = 1;}
  x = [];
  for (i=n; i<arr.length; i++) {
    x[i-n] = arr[i];
  }
  return x;
}

function failure(text) {
  alert(text)
}
