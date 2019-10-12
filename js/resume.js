function rename(inputId) {
  let inputIdWithHash = "#" + inputId;
  let elementValue = $(inputIdWithHash).text();
  $(inputIdWithHash).replaceWith('<input name="test" size="50" id="' + inputId + '" type="text" value="' + elementValue + '"> <button type="button" id="bt" onclick="replace()"> Replace ! </button>');
}

function replace() {
  let x = document.getElementById("firstname").value;
  $('#firstname').replaceWith('<h1 id="firstname" onclick=rename(\'firstname\')> ' + x + ' </h1>');
  $('#bt').replaceWith('');
}

function mouseOver() {
  document.getElementById("0").style.color = "#ffffff";
}

function mouseOut() {
  document.getElementById("0").style.color = "black";
}





