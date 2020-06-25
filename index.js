var onFilesSelected = function(event) {
  var input = event.target;

  //document.getElementById("#perfil").style.display = 'block';

  var reader = new FileReader();
  reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById("foto");
      output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
  console.log(input.files[0]);
};