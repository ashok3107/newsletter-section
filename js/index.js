// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
let timer = 0;
const onSubscribeClick = () => {
  const inputEle = document.getElementById("email");
  const emailValue = inputEle.value;
  const errorMsgEle = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "none"
  errorMsgEle.innerText = "";
  if (!emailValue) {
    errorMsgEle.innerText = "Email address is required";
  } else if (!emailValue.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    errorMsgEle.innerText = "Please enter a valid email";
  } else {
    successMsg.style.display = "block";
    inputEle.value = "";
    timer = setTimeout(() => successMsg.style.display = "none", 5000);
  }
};