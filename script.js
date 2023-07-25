//your JS code here. If required.
const pElement=document.getElementById("timer");
const current=new Date();
pElement.innerText=current.toLocaleDateString()+", "+ current.toLocaleTimeString();

