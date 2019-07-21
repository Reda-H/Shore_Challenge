
var local_data = postalcodes;
var input_postalcode = document.getElementById("user_postalcode");
var value_out = 0;
input_postalcode.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log('test');
    event.preventDefault();
    for (var i = 0; i < local_data.length; i++) {
      if (local_data[i].pc == input_postalcode.value) {
        value_out = local_data[i].value;
        break;
      }
    }
    myFunction();
  }
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal_text = document.getElementById("modal-text");

function myFunction(){
  modal.style.display = "block";
  modal_text.innerHTML = value_out + " " + modal_text.innerHTML;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
