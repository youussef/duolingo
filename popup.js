// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: StartDuolingo,
  });
});


function StartDuolingo() {
  // if (url.indexOf("duolingo.com") > -1) {
  //     // GetText();
  //     console.log("StartDuolingo");

  var test = document.getElementsByClassName("_13HXc").value;
  console.log(test);


  // }
  ;
}