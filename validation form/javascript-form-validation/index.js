function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["fname"].value;
  if (name.length<5){
      seterror("name", "*Enter a valid name");
      returnval = false;
  }

  if (name.length == 0){
      seterror("name", "*Length of name cannot be zero!");
      returnval = false;
  }



  var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }




  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length != 10){
      seterror("phone", "*Mobile number must have 10 digits!");
      returnval = false;
  }

  var password = document.forms['myForm']["fpass"].value;
  if (password.length < 6){

      
      seterror("pass", "*Password must have atleast one Uppercase, lowercase, digits, special characters & 6 characters!");
      
  }

  var cpassword = document.forms['myForm']["fcpass"].value;
  if (cpassword != password){
      seterror("cpass", "*Confirm password is required!");
      returnval = false;
  }

  return returnval;
}
