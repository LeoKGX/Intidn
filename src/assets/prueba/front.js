function cambiar_parrafo(){
  document.getElementById("edit-acercade").style.display="block";
};

function myFunction2(text) {
  document.getElementById("text-acercade").innerText = text;
};

function logMessage(mesa) {
  console.log(mesa + "<br>");
};

document.getElementById("edit-acercade").addEventListener("keyup", (e) => {
  logMessage('Key "${e.key}" released [event: keyup]');
if (e.key== "Enter")
{document.getElementById("edit-acercade").style.display="none"}
})
