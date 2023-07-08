const form=document.getElementById('form');
const username=document.getElementById('name');
const pass=document.getElementById('psw');
const errorname=document.querySelector(".errormessagename");
const errorpass=document.querySelector(".errormessagepass");


form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('clicked');

  if (username.value == ""){
    errorname.textContent='Please Enter Username';
  }
  if (pass.value == ""){
    errorpass.textContent='Please Enter Password';
  }
  if (pass.value && (pass.value.length <8 || pass.value.length >20) ){
    errorpass.textContent='Password must be 8-20 character';
  }
  if(username.value && pass.value && pass.value.length >= 8 && pass.value.length <=20){
    errorpass.textContent='';
    errorname.textContent='';
    setTimeout(function(){ alert("Hello "+ username.value) }, 10);
  }
});