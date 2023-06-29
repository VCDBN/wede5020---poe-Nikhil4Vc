function validateForm(event){
    event.preventDefault();

    var name= document.getElementById('Name').value;
    var surname= document.getElementById('Surname').value;
    var email= document.getElementById('Email').value;
    var number= document.getElementById('Contact').value;

    document.getElementById('nameError').textContent='';
    document.getElementById('surnameError').textContent='';
    document.getElementById('emailError').textContent='';
    document.getElementById('numberError').textContent='';

    if (name === ''){
        document.getElementById('nameError').textContent ='Please enter your Name!';
        return;
    }

    if (surname === ''){
        document.getElementById('surnameError').textContent ='Please enter your Surname!';
        return;
    }

    if (email === ''){
        document.getElementById('emailError').textContent ='Please enter your Email!';
        return;
    }

    if (number === ''){
        document.getElementById('numberError').textContent ='Please enter your Contact number!';
        return;
    }
    
    alert('Your details has been successfully entered in, You will be contacted shortly');

}

 
var form = document.getElementById('Contactform');
form.addEventListener('submit', validateForm);


function clearInput(){
    var getValue= document.getElementById("Name");
      if (getValue.value !="") {
          getValue.value = "";
      }
      var getValue= document.getElementById("Surname");
      if (getValue.value !="") {
          getValue.value = "";
      }
      var getValue= document.getElementById("Email");
      if (getValue.value !="") {
          getValue.value = "";
      }
      var getValue= document.getElementById("Contact");
      if (getValue.value !="") {
          getValue.value = "";
      }
}







    