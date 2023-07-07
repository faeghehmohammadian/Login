
function verification(){
  let name=document.getElementsByName("name")[0];
  let pass=document.getElementsByName("psw")[0];
  let errorname=document.querySelector(".showmessagename");
  let errorpass=document.querySelector(".showmessagepass");
  if (name.value==""){
    errorname.textContent="Please Enter Username";
  }
  if (pass.value==""){
    errorpass.textContent="Please Enter Password";
  }
   if (name.value && pass.value){
    alert("hello");
    errorname.textContent="";
    errorpass.textContent="";
    
  }
}