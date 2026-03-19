function analyzeSentiment() {
  const text = document.getElementById("inputText").value.toLowerCase();
  const result = document.getElementById("result");

  if (text === "") {
    result.innerText = "Please enter text.";
    return;
  }

  if (text.includes("good") || text.includes("happy") || text.includes("love")) {
    result.innerText = "😊 Positive Sentiment";
    result.style.color = "green";
  } 
  else if (text.includes("bad") || text.includes("sad") || text.includes("hate")) {
    result.innerText = "😞 Negative Sentiment";
    result.style.color = "red";
  } 
  else {
    result.innerText = "😐 Neutral Sentiment";
    result.style.color = "gray";
  }
}
